$(function(){
	"use strict";
	
	function setsHeaderHeight() {
		var wheight = $(window).height();
		$(".header").css('height', wheight);
	}


	setsHeaderHeight();
});