$(function(){
	"use strict";
	
	function setsHeaderHeight() {
		var wheight = $(window).height();
		$(".header").css('height', wheight);
	}


	setsHeaderHeight();
	$(window).scroll(function(){		
		$(".main-nav").toggleClass('fixed-top', $(window).scrollTop()>$('.header').outerHeight());		
	})
});