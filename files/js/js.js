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

		if($(window).width()>767){
			$(".nav").removeAttr("style");
		}
	});
	
	$(".toggle-nav").on("click", function(event){		
		event.preventDefault();

		$(".nav").slideToggle(500, function(){
			$(this).toggleClass("open", $(this).is(":visible"));
		});

	});

	/*$('.main-nav ul').on("click", 'a', function(event){
        event.preventDefault();

        var link = $(this),
        	id = $(this).attr('href'),
            top = $(id).offset().top -39;

            link.addClass("active").parent().siblings().find('a').removeClass("active");
            $('body,html').animate({scrollTop: top}, 1000);         
    });*/



	// Cache selectors
var lastId,
  topMenu = $(".main-nav ul"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1300);
  e.preventDefault();
});

	
// Bind to scroll
$(window).scroll(function() {

	$(".main-nav").toggleClass('fixed-top', $(window).scrollTop()>=$('.header').outerHeight()-15);	



  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});



});