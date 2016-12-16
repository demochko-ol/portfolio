$(function() {
	"use strict";
	$(".features-content:gt(2)").hide().addClass('hide');
	
	$('.more').click(function(){
		if($(".features-content:gt(2)").hasClass('hide')){			
			$(this).text("See less");
			$(".features-content:gt(2)").slideDown(400).removeClass('hide');
			
		}else{
			$(this).text("See more");
			$(".features-content:gt(2)").slideUp(400).addClass('hide');
		}
	});
});