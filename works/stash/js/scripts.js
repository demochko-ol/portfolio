(function($){
	"use strict";
	$.fn.autoGrowInput = function(o) {
		
		o = $.extend({
			maxWidth: 800,
			minWidth: 0,
			comfortZone: 20
		}, o);
		
		this.filter('.input').each(function(){
			
			var minWidth = o.minWidth || $(this).width(),
				val = '',
				input = $(this),
				testSubject = $('<tester/>').css({
					position: 'absolute',
					top: -9999,
					left: -9999,
					width: 'auto',
					fontSize: input.css('fontSize'),
					fontFamily: input.css('fontFamily'),
					fontWeight: input.css('fontWeight'),
					letterSpacing: input.css('letterSpacing'),
					whiteSpace: 'nowrap'
				}),
				check = function() {
					
					if (val === (val = input.val())) {return;}
					
					// Enter new content into testSubject
					var escaped = val.replace(/&/g, '&amp;').replace(/\s/g,'&nbsp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
					testSubject.html(escaped);
					
					// Calculate new width + whether to change
					var testerWidth = testSubject.width(),
						newWidth = (testerWidth + o.comfortZone) >= minWidth ? testerWidth + o.comfortZone : minWidth,
						currentWidth = input.width(),
						isValidWidthChange = (newWidth < currentWidth && newWidth >= minWidth)
											 || (newWidth > minWidth && newWidth < o.maxWidth);
					
					// Animate width
					if (isValidWidthChange) {
						input.width(newWidth);
					}
					
				};
				
			testSubject.insertAfter(input);
			
			$(this).bind('keyup keydown blur update', check);
			
		});
		
		return this;
	
	};
	
})(jQuery);
	
$(function() {
	$('.input').autoGrowInput();


    $('.anim').click(function(){
		var current = $(this),
			close=current.find('.close');
			
		if (!current.hasClass( "start" )){
			current.addClass("start");
			setTimeout(function(){current.addClass("in"); current.parent().addClass("height");}, 500);
		};
		close.click(function(){
			current.removeClass("in");
			setTimeout(function(){current.removeClass("start");}, 500);
			current.parent().removeClass("height");
		});
	});


	$('.search .icon').click(
		function(){
			$(this).parent().addClass("open");
			$('.close_btn').click(
				function(){
					$(this).parent().parent().removeClass("open");
				}
			)
		}
	);
	/*$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            $('.search').removeClass("open");
    });*/


	$('.menu li a').click(function () {
		$('.submenu').hide();
		$(this).next().show();
		return false;
	});
	$('body, .dropdown a').click(function () {
		$('.submenu').hide();
	});


	$('.open_hidden').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).addClass('visible');
	})

	$('.hidden .close').click(function() {
		$('.hidden').removeClass('visible');
	})


	$('.step1 #create').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).addClass('visible');
		$(this).parent().removeClass('visible');
	})

  
	var myFocus = $('code');
	 
	myFocus.focus(function(){
	    $(this).parents('tr').addClass('white');
	});
	 
	myFocus.blur(function(){
	   
	 	$(this).parents('tr').removeClass('white');
	});

});

		