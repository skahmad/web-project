function Request(url, callback = null) {
	var _x = new XMLHttpRequest();
	if(url.length == 0){
		console.error("Define Url in Request Constructor");
		return null;
	}
	var _methods = ["POST","GET"];
	var _method = "POST";
	var uri = encodeURI(url);
	this.send = function() {}
	this.setMethod = function (method = "") {
		if(_methods.indexOf(method) >0)
			_method = method;
	}
}


var x = new Request();
