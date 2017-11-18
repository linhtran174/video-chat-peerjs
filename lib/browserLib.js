function send(server, params, callback){
	var xhr = new XMLHttpRequest()
	xhr.open("GET", server, true)

	for(var p in params){
		xhr.setRequestHeader(p, params[p]);
	}

	xhr.onreadystatechange = () => {
		if(this.readyState == 1 && this.status == 200){
			callback(JSON.parse(xhr.responseText));
		}
	}
	xhr.send();
}

function $(elementId){
	return document.getElementById(elementId);
}