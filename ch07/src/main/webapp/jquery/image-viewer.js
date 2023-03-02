var imageViewer = {
	init: function() {
		$(function() {
			this._changeImage();
			$('#btn-change').click(this._changeImage.bind(this));
			$('#imgID').click(this._changeImage.bind(this));
			$('#btn-slideshow').click(this._controlinterval.bind(this));
		}.bind(this));
	},
	_randomIndex:function(){
		var index = Math.floor(Math.random() * this._images.length);
		return this._images[index];
	},
	_changeImage: function() {
		var obj;
		do{
			obj = this._randomIndex();
		}while( obj.name == $("#imgID").attr("title") );
		
		$("#imgID").attr("src", "images/" + obj.file);
		$("#imgID").attr("title", obj.name);
	},
	
	_intervalId:null,
	
	_controlinterval: function() {
		this._intervalId === null ?
		this._setInterval() : this._removeInterval();
	},
	
	_setInterval: function(){
		this._intervalId = setInterval(function(){
		$(imageViewer._changeImage());
		}, 500);
		$("#btn-slideshow").text("슬라이드쇼 중지");
	},
	
	_removeInterval: function(){
		clearInterval(this._intervalId);
		$("#btn-slideshow").text("슬라이드쇼 시작");
		this._intervalId = null;
	},
	
	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'Penguins.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}]
};