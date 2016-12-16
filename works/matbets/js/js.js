$(function(){
	function scrollTop(el) {
		$(el).toggleClass('scroll-header', $(document).scrollTop()>0);
    };
    scrollTop('.navbar');
    
	$(window).scroll(function(){
		scrollTop('.navbar');
	});

	//For info block
	function changeInfoBlock(el, parent) {
        var infoHeight = $(el).children('.container-fluid').innerHeight();        
	    	$(el).css("height", infoHeight);
        	$(parent).css("padding-top", infoHeight);	
    };
	function closeInfoBlock(el, parent) {
        $(parent).removeClass("open-info");
    	$(parent).css("padding-top", 0);
    	$(el).css("height", 0);
    };	

	$('.how-btn').click(function() {
		var infoHeight = $('.info-hide .container-fluid').innerHeight();
	    if(!$('.wrapper').hasClass("open-info")){			
	    	$('.wrapper').addClass("open-info");
	    	changeInfoBlock('.info-hide', '.wrapper');

	    }else{
	    	closeInfoBlock('.info-hide', '.wrapper');
	    } 
	});
	$(window).resize(function(){
	    if($('.wrapper').hasClass("open-info")){
	    	changeInfoBlock('.info-hide', '.wrapper');    	
	    }
	});
	$('.close').click(function(){
		closeInfoBlock('.info-hide', '.wrapper');
	});	   


	//Height of video container
	$(function(){
		var wHeight = $(window).height(),
			pad = 75,
			minHeadHeight = 650,
			headHeight = wHeight - pad;
			if(wHeight > 650 ){
				$('.header-content').css("height", headHeight);
			}else{
				$('.header-content').css("height", minHeadHeight);
			}
	});

	

	
});