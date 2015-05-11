/**
 * Created by KELT on 10.05.2015.
 */
function sectionAnimation(element){
    var reveal_mas = [];
    var count_anim = 15;
    for (var i = 0; i < count_anim; i++){
        reveal_mas[i] = $(element).find('.reveal-' + i);
    }
    function revealAnimaton(i, elem, interval) {
        setTimeout(function(){
            elem.removeAttr('style');
            elem.addClass('animated');
        }, i* interval)

    }

    var reveal_count = 0;
    var reveal_delay = 200;

    function revealLoop () {
        setTimeout(function () {
            if (reveal_mas[reveal_count].length != 0){
                var str = reveal_mas[reveal_count].attr('class');
                var index_delay = str.indexOf('reveal_delay');
                if ( index_delay != -1){
                    reveal_delay = parseInt(str.substring(index_delay + 13));


                }else{

                    reveal_delay = 200;
                }
                revealAnimaton(reveal_count, reveal_mas[reveal_count], 0);
            }
            reveal_count++;
            if (reveal_count < count_anim) {
                revealLoop();
            }
        }, reveal_delay)
    }

    revealLoop();
}
$(document).ready(function(){
    $('.onepage-pagination').addClass('animation-section');

    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });
    var slider_4 = $('#slider-4').bxSlider();
    var slider_5 = $('#slider-5').bxSlider();
    var slider_6 = $('#slider-6').bxSlider();
    var slider_7 = $('#slider-7').bxSlider();
    var slider_8 = $('#slider-8').bxSlider();
    $('.trigger-overlay-slider').click(function(){
        var slider_elem = $(this).parents('section').find('.overlay-slider');
        slider_elem.removeClass('close');
        slider_elem.addClass('open');
        if ($(this).parents('section').hasClass('page4')){
            slider = slider_4;
        }
        if ($(this).parents('section').hasClass('page5')){
            slider = slider_5;
        }
        if ($(this).parents('section').hasClass('page6')){
            slider = slider_6;
        }
        if ($(this).parents('section').hasClass('page7')){
            slider = slider_7;
        }
        if ($(this).parents('section').hasClass('page8')){
            slider = slider_8;
        }
        slider.reloadSlider();
        slider.goToSlide(parseInt($(this).attr('href').substring(1))-1);
        $('.header-menu').css('visibility', 'hidden');
        $('.logo-header').css('visibility', 'hidden');
        $('.onepage-pagination').hide();
    })
    $('.overlay-close').click(function(){
        if ($(this).hasClass('close-main')){
        }else{
            $('.header-menu').css('visibility', 'visible');
            $('.logo-header').css('visibility', 'visible');
            $('.onepage-pagination').show();
        }
        $(this).parent().removeClass('open');
        $(this).parent().addClass('close');
    })





    sectionAnimation('.page1');

    $('.enter-s').click(function() {
        if($('#morethan21').is(':checked')) {
            setTimeout(function(){
                $('.logo-header, .header-menu').removeAttr('style');
                $('.logo-header').css('visibility', 'visible');
                $('.logo-header').addClass('animated zoomIn');

                $('.header-menu').addClass('display-on animated fadeInDown');
            }, 2000)
            setTimeout(function(){
                $('.onepage-pagination').addClass('fadeIn animated display-on');
            }, 3000)
            setTimeout(function(){
                $('.onepage-pagination li:first-child a').addClass('fadeInLeftAfter');
            }, 3500)
            setTimeout(function(){
                $('.icon-heart-girl').addClass('tada animated');
            }, 4000)
            $('.main').addClass('display-on');
            $('.enter-site').addClass('display-off');
            sectionAnimation('.page3.active');
        }

    });



    $('.control-up').click(function() {
        $(".main").moveTo(1);
    });
    $('.control-down').click(function() {
        $(".main").moveDown();
    });
    setInterval(function(){
    var $opens = $(".open-sup-1");
    if($opens.is(":hover")) {
        $('.icon-add-1').addClass('icon-closes');
    }
    else {
        $('.icon-add-1').removeClass('icon-closes');
    }}, 200);


    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    $('.label-radio').click(function() {
        $('.label-active').each(function(){$(this).removeClass('label-active')})
        if($(this).find('input').is(':checked')) {
            $(this).addClass('label-active');
        }
        else {
            $(this).removeClass('label-active');
        }
    });
    $('#trigger-overlay').click(function() {

        $('.blur').removeClass('blur-off');
        $('.blur').addClass('blur-active');
    });
    $('.close-main').click(function() {
        $('.blur').addClass('blur-off');
    });

    $('.reveal, .animation-section, .onepage-pagination li a:after').each(function(){
        $(this).css('visibility', 'hidden');
        $(this).css('-webkit-animation-name', 'none');
    })

    $('#trigger-overlay').click(function(){
        $('#slider-1').removeClass('close');
        $('#slider-1').addClass('open');
    })
});