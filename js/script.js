$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll) {
    	   //Direction: Down
    	   $(".navbar").fadeOut();
       } else {
    	   //Direction: Up
    	   $(".navbar").fadeIn();
       }
       
       previousScroll = currentScroll;
       
       if (currentScroll == 0) {
    	   $(".navbar").css("position", "relative");
       } else {
    	   $(".navbar").css("position", "fixed");
       }
    });
});
AOS.init({
	duration: 1200,
  })		