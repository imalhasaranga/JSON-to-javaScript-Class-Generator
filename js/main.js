function createclasses(){

	var json = document.getElementById("sourcedata").value;
	if(json && json.trim() != ""){
		try{
			var allclassses = [];


			json = JSON.parse(json);
			breakDown(json,"Base");

			for(var i in allclassses){
				console.log(JSON.stringify(allclassses[i])+" "+i );
			}

			function breakDown(object,name){
				for(var attr in object){
					if(typeof object[attr] == "object"){
						var obj = object[attr];
						if(Object.prototype.toString.call(obj) === '[object Array]' && obj.length > 0){
							obj = obj[0];
						}
						object[attr] = "";
						breakDown(obj,attr);
					}
				}
				allclassses.push({name : name, obj : object });
			}

			var totalstring = "";
			for(var y in allclassses){
				var classob = createClassSignature(allclassses[y]);				
				totalstring = "/*-------------------------------------------------------*/\n"+classob + totalstring;
			}
			document.getElementById("resultdata").value = totalstring;


			function createClassSignature(classob){
				var maincode = "var "+(classob.name).toLowerCase()+" =  function(){\n" ;
				var methods = "";
				for(var attr in classob.obj){
					maincode += "\tthis."+attr+";\n";
					methods  += (classob.name).toLowerCase()+".prototype.get"+capitalizeFirstLetter(attr)+"(){\n";
					methods  +=  "\treturn this."+attr+"; \n";
					methods  +=  "}\n";
					methods  += (classob.name).toLowerCase()+".prototype.set"+capitalizeFirstLetter(attr)+"("+attr+"){\n";
					methods  +=  "\tthis."+attr+"="+attr+"; \n";
					methods  +=  "}\n";
				}
				return (maincode+"}\n"+methods);
			}
			
			function capitalizeFirstLetter(string) {
			    return string.charAt(0).toUpperCase() + string.slice(1);
			}


			//console.log(json);
		}catch(err) {
			console.log(err.message);
		}

	}


}