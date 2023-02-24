var _jQuery = function(elements){
	this.length = elements.length;
	for(var i = 0; i < this.length; i++){
		this[i] = elements[i];
	}
	return this;
}

_jQuery.prototype.css = function(name, value){
	for(var i = 0; i < this.length; i++){
		this[i].style[name] = value;
	}
	
	return this;
}

_jQuery.prototype.click = function(handler){
	for(var i = 0; i < this.length; i++){
		this[i].addEventListener('click',handler);
	}
	return this;
}

var jQuery = function(param){
	if(typeof(param)==='functuon'){
		window.addEventListener('load',param);
		return
	}
	
	var elements;
	
	if(typeof(param)==='string'){
		elements = document.querySelectorAll(param);
	}
	
	return new _jQuery(elements || []);	//undefined는 false취급
}

var $ = jQuery;