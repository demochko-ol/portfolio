$(function () {
	"use strict";
	var h = $(window).height();
	if(h>610){
		$('.header,.ps-container').css("height", h-50);
	}else{
		$('.header, .ps-container').css("height", "570px");
	}
	
	Slider.init();
	$(window).scroll(function(){
		$('.header-content').removeClass('scroll-header'); 
		if($(document).scrollTop()>0){
			$('.header-content').toggleClass('scroll-header'); 
		}
	});

    //Main nav

    $(".navbar-nav").on("click", 'a', function(event){
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top -40;
            $('body,html').animate({scrollTop: top}, 1000);    
        
    });
    

	



   
});