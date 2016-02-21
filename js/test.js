/*-------------------------------------------------------*/
var base =  function(){
	this._id;
	this._v;
	this._tc;
	this._tu;
	this._f;
	this._orgId;
	this._ownerId;
	this.shortId;
	this.name;
	this.origFilename;
	this.filename;
	this.pages;
	this.pageCount;
	this.ownerName;
	this.self_url;
	this._tp;
	this._orgName;
	this.message;
	this.state;
	this.signingStatusString;
	this.readOutMsgTemplate;
	this._timeSent;
	this.hasSequence;
	this._texp;
	this.me;
	this._texpInstant;
	this._tpInstant;
}
base.prototype.get_id(){
	return this._id; 
}
base.prototype.set_id(_id){
	this._id=_id; 
}
base.prototype.get_v(){
	return this._v; 
}
base.prototype.set_v(_v){
	this._v=_v; 
}
base.prototype.get_tc(){
	return this._tc; 
}
base.prototype.set_tc(_tc){
	this._tc=_tc; 
}
base.prototype.get_tu(){
	return this._tu; 
}
base.prototype.set_tu(_tu){
	this._tu=_tu; 
}
base.prototype.get_f(){
	return this._f; 
}
base.prototype.set_f(_f){
	this._f=_f; 
}
base.prototype.get_orgId(){
	return this._orgId; 
}
base.prototype.set_orgId(_orgId){
	this._orgId=_orgId; 
}
base.prototype.get_ownerId(){
	return this._ownerId; 
}
base.prototype.set_ownerId(_ownerId){
	this._ownerId=_ownerId; 
}
base.prototype.getShortId(){
	return this.shortId; 
}
base.prototype.setShortId(shortId){
	this.shortId=shortId; 
}
base.prototype.getName(){
	return this.name; 
}
base.prototype.setName(name){
	this.name=name; 
}
base.prototype.getOrigFilename(){
	return this.origFilename; 
}
base.prototype.setOrigFilename(origFilename){
	this.origFilename=origFilename; 
}
base.prototype.getFilename(){
	return this.filename; 
}
base.prototype.setFilename(filename){
	this.filename=filename; 
}
base.prototype.getPages(){
	return this.pages; 
}
base.prototype.setPages(pages){
	this.pages=pages; 
}
base.prototype.getPageCount(){
	return this.pageCount; 
}
base.prototype.setPageCount(pageCount){
	this.pageCount=pageCount; 
}
base.prototype.getOwnerName(){
	return this.ownerName; 
}
base.prototype.setOwnerName(ownerName){
	this.ownerName=ownerName; 
}
base.prototype.getSelf_url(){
	return this.self_url; 
}
base.prototype.setSelf_url(self_url){
	this.self_url=self_url; 
}
base.prototype.get_tp(){
	return this._tp; 
}
base.prototype.set_tp(_tp){
	this._tp=_tp; 
}
base.prototype.get_orgName(){
	return this._orgName; 
}
base.prototype.set_orgName(_orgName){
	this._orgName=_orgName; 
}
base.prototype.getMessage(){
	return this.message; 
}
base.prototype.setMessage(message){
	this.message=message; 
}
base.prototype.getState(){
	return this.state; 
}
base.prototype.setState(state){
	this.state=state; 
}
base.prototype.getSigningStatusString(){
	return this.signingStatusString; 
}
base.prototype.setSigningStatusString(signingStatusString){
	this.signingStatusString=signingStatusString; 
}
base.prototype.getReadOutMsgTemplate(){
	return this.readOutMsgTemplate; 
}
base.prototype.setReadOutMsgTemplate(readOutMsgTemplate){
	this.readOutMsgTemplate=readOutMsgTemplate; 
}
base.prototype.get_timeSent(){
	return this._timeSent; 
}
base.prototype.set_timeSent(_timeSent){
	this._timeSent=_timeSent; 
}
base.prototype.getHasSequence(){
	return this.hasSequence; 
}
base.prototype.setHasSequence(hasSequence){
	this.hasSequence=hasSequence; 
}
base.prototype.get_texp(){
	return this._texp; 
}
base.prototype.set_texp(_texp){
	this._texp=_texp; 
}
base.prototype.getMe(){
	return this.me; 
}
base.prototype.setMe(me){
	this.me=me; 
}
base.prototype.get_texpInstant(){
	return this._texpInstant; 
}
base.prototype.set_texpInstant(_texpInstant){
	this._texpInstant=_texpInstant; 
}
base.prototype.get_tpInstant(){
	return this._tpInstant; 
}
base.prototype.set_tpInstant(_tpInstant){
	this._tpInstant=_tpInstant; 
}
/*-------------------------------------------------------*/
var _tpinstant =  function(){
	this.nano;
	this.epochSecond;
}
_tpinstant.prototype.getNano(){
	return this.nano; 
}
_tpinstant.prototype.setNano(nano){
	this.nano=nano; 
}
_tpinstant.prototype.getEpochSecond(){
	return this.epochSecond; 
}
_tpinstant.prototype.setEpochSecond(epochSecond){
	this.epochSecond=epochSecond; 
}
/*-------------------------------------------------------*/
var _texpinstant =  function(){
	this.nano;
	this.epochSecond;
}
_texpinstant.prototype.getNano(){
	return this.nano; 
}
_texpinstant.prototype.setNano(nano){
	this.nano=nano; 
}
_texpinstant.prototype.getEpochSecond(){
	return this.epochSecond; 
}
_texpinstant.prototype.setEpochSecond(epochSecond){
	this.epochSecond=epochSecond; 
}
/*-------------------------------------------------------*/
var me =  function(){
	this.state;
	this._id;
	this.fullName;
	this.email;
	this._userId;
	this.signRequired;
	this.fieldInputs;
	this.readOutMessage;
	this.timeSent;
	this.timeAccessed;
	this.signerview_url;
	this.clientLog_url;
	this.signerInput_url;
	this.signerAccess_url;
	this.timeSentFormatted;
}
me.prototype.getState(){
	return this.state; 
}
me.prototype.setState(state){
	this.state=state; 
}
me.prototype.get_id(){
	return this._id; 
}
me.prototype.set_id(_id){
	this._id=_id; 
}
me.prototype.getFullName(){
	return this.fullName; 
}
me.prototype.setFullName(fullName){
	this.fullName=fullName; 
}
me.prototype.getEmail(){
	return this.email; 
}
me.prototype.setEmail(email){
	this.email=email; 
}
me.prototype.get_userId(){
	return this._userId; 
}
me.prototype.set_userId(_userId){
	this._userId=_userId; 
}
me.prototype.getSignRequired(){
	return this.signRequired; 
}
me.prototype.setSignRequired(signRequired){
	this.signRequired=signRequired; 
}
me.prototype.getFieldInputs(){
	return this.fieldInputs; 
}
me.prototype.setFieldInputs(fieldInputs){
	this.fieldInputs=fieldInputs; 
}
me.prototype.getReadOutMessage(){
	return this.readOutMessage; 
}
me.prototype.setReadOutMessage(readOutMessage){
	this.readOutMessage=readOutMessage; 
}
me.prototype.getTimeSent(){
	return this.timeSent; 
}
me.prototype.setTimeSent(timeSent){
	this.timeSent=timeSent; 
}
me.prototype.getTimeAccessed(){
	return this.timeAccessed; 
}
me.prototype.setTimeAccessed(timeAccessed){
	this.timeAccessed=timeAccessed; 
}
me.prototype.getSignerview_url(){
	return this.signerview_url; 
}
me.prototype.setSignerview_url(signerview_url){
	this.signerview_url=signerview_url; 
}
me.prototype.getClientLog_url(){
	return this.clientLog_url; 
}
me.prototype.setClientLog_url(clientLog_url){
	this.clientLog_url=clientLog_url; 
}
me.prototype.getSignerInput_url(){
	return this.signerInput_url; 
}
me.prototype.setSignerInput_url(signerInput_url){
	this.signerInput_url=signerInput_url; 
}
me.prototype.getSignerAccess_url(){
	return this.signerAccess_url; 
}
me.prototype.setSignerAccess_url(signerAccess_url){
	this.signerAccess_url=signerAccess_url; 
}
me.prototype.getTimeSentFormatted(){
	return this.timeSentFormatted; 
}
me.prototype.setTimeSentFormatted(timeSentFormatted){
	this.timeSentFormatted=timeSentFormatted; 
}
/*-------------------------------------------------------*/
var fieldinputs =  function(){
	this.fieldPosition;
	this.state;
}
fieldinputs.prototype.getFieldPosition(){
	return this.fieldPosition; 
}
fieldinputs.prototype.setFieldPosition(fieldPosition){
	this.fieldPosition=fieldPosition; 
}
fieldinputs.prototype.getState(){
	return this.state; 
}
fieldinputs.prototype.setState(state){
	this.state=state; 
}
/*-------------------------------------------------------*/
var pages =  function(){
	this.pageNumber;
	this.pageImage_url;
	this.needsInput;
	this.fields;
	this.pagePosition;
}
pages.prototype.getPageNumber(){
	return this.pageNumber; 
}
pages.prototype.setPageNumber(pageNumber){
	this.pageNumber=pageNumber; 
}
pages.prototype.getPageImage_url(){
	return this.pageImage_url; 
}
pages.prototype.setPageImage_url(pageImage_url){
	this.pageImage_url=pageImage_url; 
}
pages.prototype.getNeedsInput(){
	return this.needsInput; 
}
pages.prototype.setNeedsInput(needsInput){
	this.needsInput=needsInput; 
}
pages.prototype.getFields(){
	return this.fields; 
}
pages.prototype.setFields(fields){
	this.fields=fields; 
}
pages.prototype.getPagePosition(){
	return this.pagePosition; 
}
pages.prototype.setPagePosition(pagePosition){
	this.pagePosition=pagePosition; 
}
/*-------------------------------------------------------*/
var pageposition =  function(){
	this.top;
	this.left;
	this.width;
	this.height;
}
pageposition.prototype.getTop(){
	return this.top; 
}
pageposition.prototype.setTop(top){
	this.top=top; 
}
pageposition.prototype.getLeft(){
	return this.left; 
}
pageposition.prototype.setLeft(left){
	this.left=left; 
}
pageposition.prototype.getWidth(){
	return this.width; 
}
pageposition.prototype.setWidth(width){
	this.width=width; 
}
pageposition.prototype.getHeight(){
	return this.height; 
}
pageposition.prototype.setHeight(height){
	this.height=height; 
}
/*-------------------------------------------------------*/
var fields =  function(){
	this.kind;
	this.fieldPosition;
	this.required;
	this.screenPos;
	this.fieldInput;
	this.text;
	this.video;
	this.image;
}
fields.prototype.getKind(){
	return this.kind; 
}
fields.prototype.setKind(kind){
	this.kind=kind; 
}
fields.prototype.getFieldPosition(){
	return this.fieldPosition; 
}
fields.prototype.setFieldPosition(fieldPosition){
	this.fieldPosition=fieldPosition; 
}
fields.prototype.getRequired(){
	return this.required; 
}
fields.prototype.setRequired(required){
	this.required=required; 
}
fields.prototype.getScreenPos(){
	return this.screenPos; 
}
fields.prototype.setScreenPos(screenPos){
	this.screenPos=screenPos; 
}
fields.prototype.getFieldInput(){
	return this.fieldInput; 
}
fields.prototype.setFieldInput(fieldInput){
	this.fieldInput=fieldInput; 
}
fields.prototype.getText(){
	return this.text; 
}
fields.prototype.setText(text){
	this.text=text; 
}
fields.prototype.getVideo(){
	return this.video; 
}
fields.prototype.setVideo(video){
	this.video=video; 
}
fields.prototype.getImage(){
	return this.image; 
}
fields.prototype.setImage(image){
	this.image=image; 
}
/*-------------------------------------------------------*/
var fieldinput =  function(){
	this.fieldPosition;
	this.state;
}
fieldinput.prototype.getFieldPosition(){
	return this.fieldPosition; 
}
fieldinput.prototype.setFieldPosition(fieldPosition){
	this.fieldPosition=fieldPosition; 
}
fieldinput.prototype.getState(){
	return this.state; 
}
fieldinput.prototype.setState(state){
	this.state=state; 
}
/*-------------------------------------------------------*/
var screenpos =  function(){
	this.top;
	this.left;
	this.width;
	this.height;
}
screenpos.prototype.getTop(){
	return this.top; 
}
screenpos.prototype.setTop(top){
	this.top=top; 
}
screenpos.prototype.getLeft(){
	return this.left; 
}
screenpos.prototype.setLeft(left){
	this.left=left; 
}
screenpos.prototype.getWidth(){
	return this.width; 
}
screenpos.prototype.setWidth(width){
	this.width=width; 
}
screenpos.prototype.getHeight(){
	return this.height; 
}
screenpos.prototype.setHeight(height){
	this.height=height; 
}
/*-------------------------------------------------------*/
var kind =  function(){
	this.type;
	this.name;
	this.fieldImage_url;
}
kind.prototype.getType(){
	return this.type; 
}
kind.prototype.setType(type){
	this.type=type; 
}
kind.prototype.getName(){
	return this.name; 
}
kind.prototype.setName(name){
	this.name=name; 
}
kind.prototype.getFieldImage_url(){
	return this.fieldImage_url; 
}
kind.prototype.setFieldImage_url(fieldImage_url){
	this.fieldImage_url=fieldImage_url; 
}
