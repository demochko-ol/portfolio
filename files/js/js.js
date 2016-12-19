$(function(){
	"use strict";
	
	function setsHeaderHeight() {
		var wheight = $(window).height();
		if(wheight>320){
			$(".header").css('height', wheight);
		}else{
			$(".header").css('height', 320);
		}
		
	}
	setsHeaderHeight();
	/*$(".nav").toggleClass('hidden', $(window).width()<768);*/
	$(window).resize(function(){
		setsHeaderHeight();

		// $(".nav").css("display", $(window).width()>=768 ? "inline-block" : "none");
		/*$(".nav").toggleClass('hidden', $(window).width()<768);*/
		if($(window).width()>767){
			$(".nav").css("height", "auto");
		}else{
			var nav_height = $(".nav ul").height();

			$('.nav').css("height", $(".nav").hasClass('open') ? nav_height : 0);
		}
				
	});
	
	$(".toggle-nav").on("click", function(event){		
		event.preventDefault();

		var nav_height = $(".nav ul").height();
		
		$(".nav").toggleClass('open');

		if($(".nav").hasClass('open')){
			$(".nav").animate({
				height: nav_height/*,
				specialEasing: {
					height: 'linear'
				}*/
			}, 500);
		}else{
			$(".nav").animate({
				height: 0/*,
				specialEasing: {
					height: 'linear'
				}*/
			}, 500);
		}


		/*$(".hidden").slideToggle(400);*/


		/*if($(window).width()=<767){
			$(".nav ul").toggleClass('open');
		}*/

		/*if($(".nav ul").css("display")=="none"){
			
			$(".nav ul").animate({
				height: 'show',
				specialEasing: {
					height: 'linear'
				}
			}, 500);
		}else{
			$(".nav ul").animate({
				height: 'hide',
				specialEasing: {
					height: 'linear'
				}
			}, 500);
		}*/

/*
		$(".main-nav ul").animate({
			height: "toggle"
		},{duration:500,
			specialEasing: {
				height: 'linear'
			}
		});*/

	/*	if($(".main-nav ul").css("display")=="none"){
			
		}else{
			$(".main-nav ul").animate({
				height: 'hide',
				specialEasing: {
					height: 'linear'
				}
			}, 500);
		}
*/
		
	});

	$('.main-nav ul').on("click", 'a', function(event){
        event.preventDefault();

        var link = $(this),
        	id = $(this).attr('href'),
            top = $(id).offset().top -39;

            link.addClass("active").parent().siblings().find('a').removeClass("active");
            $('body,html').animate({scrollTop: top}, 1000);         
    });

	$(window).scroll(function(){		
		$(".main-nav").toggleClass('fixed-top', $(window).scrollTop()>=$('.header').outerHeight());		

		

	});


});