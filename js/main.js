function createclasses() {

    var json = document.getElementById("sourcedata").value;
    var baseclass = document.getElementById("inputclassname");
    var modname = document.getElementById("inputmodname");
    var baseClassName = baseclass.value.trim() == "" ? "Base" : baseclass.value.trim();
    var modulename = modname.value.trim() == "" ? "JsClassTest" : modname.value.trim();

    if (json && json.trim() != "") {
        try {
            var allclassses = [];
            var usedClasses = [];


            json = JSON.parse(json);
            breakDown(json, baseClassName);
            for (var y in allclassses) {
                var classob = createClassSignature(allclassses[y]);
                cleanUp(classob);
            }
            var totalstring = "";
            for (var y in usedClasses) {
                totalstring =  (y == usedClasses.length-1 ? "" : "\n\n") +"/*************"+usedClasses[y].class_name+"**************/\n" + usedClasses[y].signature + totalstring;
            }
            document.getElementById("resultdata").innerHTML  = totalstring;
            removeClass(document.getElementById("resultdata"),"prettyprinted");
            prettyPrint();

            function cleanUp(classobx) {
                var found = false;
                for (var i in usedClasses) {
                    var usedclass = usedClasses[i];
                    if (usedclass.class_name == classobx.class_name) {
                        found = true;
                        if (classobx.attrcounter >= usedclass.attrcounter) {
                            usedClasses[i] = classobx;
                        }
                    }
                }
                if (!found) {
                    usedClasses.push(classobx);
                }
            }

            function breakDown(object, name) {
                for (var attr in object) {
                    if (typeof object[attr] == "object") {
                        var obj = object[attr];
                        if (Object.prototype.toString.call(obj) === '[object Array]' && obj.length > 0) {
                            obj = obj[0];
                        }
                        object[attr] = "";
                        if(typeof obj == "object"){
                            breakDown(obj, attr);
                        }
                    }
                }
                allclassses.push({ name: name, obj: object });
            }


            function createClassSignature(classob) {
                var classname = capitalizeFirstLetter((classob.name).toLowerCase());
                var maincode = "angular.module(\""+modulename+"\").factory(\""+classname+"\", [\"BaseObject\", function(BaseObject) {\n";
                    maincode  += "\tvar " + classname + " =  function(){\n";
                var methods = "";
                var counter = 0;
                for (var attr in classob.obj) {
                    maincode += "\t\tthis." + attr + ";\n";
                    methods += "\t"+(classname) + ".prototype.get" + capitalizeFirstLetter(attr) + "= function(){\n";
                    methods += "\t\treturn this." + attr + "; \n";
                    methods += "\t};\n";
                    methods += "\t"+(classname) + ".prototype.set" + capitalizeFirstLetter(attr) + "= function(" + attr + "){\n";
                    methods += "\t\tthis." + attr + "=" + attr + "; \n";
                    methods += "\t};\n";
                    ++counter;
                }
                var inheritance = "\n\tBaseObject.inherit("+classname+", function(mapper) {\n"+
                				  "\t\t/* Use mapper object to register your mappings */\n"+
							      "\t\t//mapper.addClassMapping(\"friend\", \"Friend\");\n"+
							      "\t\t//mapper.addAttrMapping(\"name_one\", \"name\");\n"+
							      "\t});\n";
				var clsingtag = "\treturn "+classname+";\n"+
								"}]);";
                var finalstr  = maincode + "\t}"+inheritance+ methods + clsingtag;
                	

                return { class_name: classname, signature: finalstr, attrcounter: counter };
            }

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }


            //console.log(json);
        } catch (err) {
            console.log(err.message);
        }

    }


}


function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
