$(document).ready(function() {

    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 110});
    
    /* ======= ScrollTo ======= */
    $('.header .navbar-nav .nav-item .nav-link').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 600, {offset: -100, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    /* ======= Mobile Navigation ======= */
    $('.header .navbar .navbar-toggler').on('click', function(){
        
        if ($('#header').hasClass('mobile')) {
            $('#header').removeClass('mobile');
        }
        else {
            $('#header').addClass('mobile');
        }

    });

    $('.header .navbar-nav .nav-item .nav-link').on('click', function(){
        
        $('#my-nav').removeClass('show');
        $('#header').removeClass('mobile');
        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

    });

    /* ======= Copy Email ======= */
    $('.contacts-section .container .content .contacts .email a').on('click', function(){

        if ($('.contacts-section .container .content .contacts .email span').hasClass('false')) {
            $('.contacts-section .container .content .contacts .email span').text('Скопировано!');
            $('.contacts-section .container .content .contacts .email span').css({ "top": "-20px"});
            $('.contacts-section .container .content .contacts .email span').removeClass('false');
            $('.contacts-section .container .content .contacts .email span').addClass('true');
        }
        else {
            $('.contacts-section .container .content .contacts .email span').text('Нажмите, чтобы скопировать мой адрес электронной почты в буфер обмена 😀');
            $('.contacts-section .container .content .contacts .email span').css({ "top": "-70px"});
            $('.contacts-section .container .content .contacts .email span').removeClass('true');
            $('.contacts-section .container .content .contacts .email span').addClass('false');
        }

    });

});