$('#critical').ready(function() {

  setTimeout( function preloader() {

    $('.preloader .back-2 .loader').animate({opacity: "0", visibility: "hidden"}, 500);
    $('.preloader .back-1 .title').animate({opacity: "0", visibility: "hidden"}, 500);
    $('.preloader .back-1').delay(500).animate({top: "-60%"}, 500);
    $('.preloader .back-2').delay(500).animate({top: "110%"}, 500);
    $('body').delay(2000).css({"overflowY": "auto"});
    setTimeout(function() {
      $('.preloader').css({"display": "none"});
    }, 1000);
    
  }, 1000);

});