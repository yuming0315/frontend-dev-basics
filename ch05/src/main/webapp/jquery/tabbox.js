var TabBox = {
		onTabClicked: function(){
			$('.tab-box li.selected').removeClass("selected");
			$(this).addClass("selected");
		},
		_initialize:function(){
			$('.tab-box li').click(this.onTabClicked);	
		},
		init: function(){
			console.log(this);
			/*$(function(){
				$('.tab-box li').click(this.onTabClicked);	
			}.bind(this));*/
			
			$(TabBox._initialize);
		}
}