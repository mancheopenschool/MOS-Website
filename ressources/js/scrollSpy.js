/**
 * Created by valentin on 20/10/15.
 */

$(document).ready(function () {

    /* activate scrollspy menu */
    $('body').scrollspy({
        target: '#mos-navbar',
        offset: 50
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1200);
                return false;
            }
        }
    });

    $('#gohead').hide().click(function(){
        $('html,body').animate({
                scrollTop: $('#header').offset().top
            },'slow'
        );
    });



    $(document).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 75)
            $('#gohead').fadeIn( "slow");
        else{
            $('#gohead').fadeOut( "slow");
        }
    });

    $('#events-slider').carousel(); //Enable events slider.

});

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

