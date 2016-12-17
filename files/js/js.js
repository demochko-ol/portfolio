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

	$(window).resize(function(){
		setsHeaderHeight();
	});

	$('.main-nav ul').on("click", 'a', function(event){
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top -39;
            $('body,html').animate({scrollTop: top}, 1000);    
        
    });

	$(window).scroll(function(){		
		$(".main-nav").toggleClass('fixed-top', $(window).scrollTop()>=$('.header').outerHeight());		
	});


});