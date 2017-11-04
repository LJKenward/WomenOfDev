// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* --------- Wow Init ------ */

  new WOW().init();

/*----- Preloader ----- */

    $(window).load(function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });


/*----- Subscription Form ----- */

$('.subscribe-form').submit(function(e) {
    e.preventDefault();
    var postdata = $('.subscribe-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'assets/php/subscribe.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
        if(json.valid == 0) {
            $('.success-message').hide();
            $('.error-message').hide();
            $('.error-message').html(json.message);
            $('.error-message').fadeIn('fast', function(){
                $('.subscribe-form').addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass('animated flash');
                });
            });
        }
        else {
            $('.error-message').hide();
            $('.success-message').hide();
            $('.subscribe-form').hide();
            $('.success-message').html(json.message);
            $('.success-message').fadeIn('fast', function(){
                $('.top-content').backstretch("resize");
            });
          }
        }
    });
});


});
