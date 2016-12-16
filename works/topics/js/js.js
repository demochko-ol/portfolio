$(function() {
	"use strict";
	$('.comments .add-comments').each(
		function(){
			var parent = $(this).parent(), 
				slide = parent.children(".clear");
			$(this).click(function(){
					if(!parent.hasClass("open")){
						parent.addClass("open").next('.share').removeClass('move-top');
						slide.slideDown(400);
					}else{
						parent.removeClass( "open" ).next('.share').addClass('move-top');
						slide.slideUp(400);
					}
				}
			)

		}
	);
	$('.search-toggle').click(function(){
		$('.form-control-wrap').toggleClass('open-search');
	});
	
});