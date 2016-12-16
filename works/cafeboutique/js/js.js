
$(function(){
    "use strict";

    $('.carousel').carousel();
    
    $(window).scroll(function(){
        scrollHeader();       
    });

    scrollHeader(); 

    function scrollHeader(){
         $('.navbar').removeClass('scroll-header');

         if($(document).scrollTop() >0){
            $('.navbar').toggleClass('scroll-header');            
        }
    }

    //Main nav

    $(".navbar-nav").on("click", 'a', function(event){
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top - 60;
            $('body,html').animate({scrollTop: top}, 1000);    
        
    });
   

});