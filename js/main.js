/**
 * Created by KELT on 10.05.2015.
 */
var slider_4, slider_5, slider_6, slider_7, slider_8;
function sectionAnimation(element){

    var reveal_mas = [];
    var count_anim = 20;
    for (var i = 0; i < count_anim; i++){
        reveal_mas[i] = $(element).find('.reveal-' + i);

    }
    function revealAnimaton(i, elem, interval) {
        setTimeout(function(){
            if (elem.length > 0){
                elem.removeAttr('style');
                elem.addClass('animated');
            }
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
function clearAnimation(section){
    if ($('.main.onepage-wrapper').css('display') != "none"){
        section.find('.content').addClass('fadeOut animated');
        if (section.hasClass('page3')){
            $('.cabinet').removeClass('fadeInLeft').addClass('fadeOutLeft animated');
            $('.sofa').removeClass('fadeInLeft').addClass('fadeOutRight   animated');
            $('.back-ground-floor').removeClass('fadeInUp').addClass('fadeOutDown   animated');
        }
        setTimeout(
            function() {
                section.find('.content').removeClass('fadeOut animated');
                $('.animated:not(.header-menu):not(.icon-add):not(.icon-heart-girl):not(.logo-header):not(.logo):not(.back):not(.back-ground-2):not(.back-ground-shine)').each(function(){$(this).removeClass('animated')});
                section.find('.reveal:not(.header-menu):not(.footer-control):not(.logo-header):not(.back):not(.back-ground-2):not(.back-ground-shine), .animation-section').each(function(){
                    $(this).css('visibility', 'hidden');
                    $(this).css('-webkit-animation-name', 'none');
                })
                if (section.hasClass('page3')){
                    $('.cabinet').removeClass('fadeOutLeft animated').addClass('fadeInLeft').css('visibility', 'hidden').css('-webkit-animation-name', 'none');
                    $('.sofa').removeClass('fadeOutRight animated').addClass('fadeInLeft').css('visibility', 'hidden').css('-webkit-animation-name', 'none');;
                    $('.back-ground-floor').removeClass('fadeOutDown   animated').addClass('fadeInUp').css('visibility', 'hidden').css('-webkit-animation-name', 'none');;
                }

            }, 500
        );


        $('.onepage-pagination li a').each(function(){
            $(this).removeClass('fadeInLeftAfter');
        })
    }
}
function footerContent(section, footer){
    var footer_cont = $(section).find('.footer-menu');
    if (footer_cont.length > 0 && $(section).hasClass('page10') == false){
        $(footer).css('opacity', 0);
        $(footer).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            $(footer).html(footer_cont.html());
            $(footer).css('opacity', 1);
            $('.trigger-overlay-slider').click(function(){
                var slider_elem = $('.main').find('section.active .overlay-slider');

                var slider;
                if ($('.main').find('section.active').hasClass('page4')){
                    slider = slider_4;
                }
                if ($('.main').find('section.active').hasClass('page5')){
                    slider = slider_5;
                }
                if ($('.main').find('section.active').hasClass('page6')){
                    slider = slider_6;
                }
                if ($('.main').find('section.active').hasClass('page7')){
                    slider = slider_7;
                }
                if ($('.main').find('section.active').hasClass('page8')){
                    slider = slider_8;
                }
                slider.reloadSlider();
                slider.goToSlide(parseInt($(this).attr('href').substring(1))-1);
                $('.header-menu').css('visibility', 'hidden');
                $('.logo-header').css('visibility', 'hidden');
                $('.footer-control').css('visibility', 'hidden');
                $('.onepage-pagination').hide();
                setTimeout(function(){
                    slider_elem.removeClass('close');
                    slider_elem.addClass('open');
                }, 500)

            })
        });
        $(footer).parent().removeClass('footer-last');
        $('.header-menu').removeClass('fadeOutUp');
        $('.header-menu').addClass('fadeInDown');
        $('.logo-header').removeClass('zoomOut');
        $('.logo-header').addClass('zoomIn');

    }else if ($(section).hasClass('page10') == false){
        $(footer).css('opacity', 0);
        $(footer).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            $(footer).html('<img class="control-down" src="img/control.png" alt=""/>');
            $(footer).css('opacity', 1);
            $('.control-down').click(function() {
                $(".main").moveDown();
            });
        });
        $(footer).parent().removeClass('footer-last');
        $('.header-menu').removeClass('fadeOutUp');
        $('.header-menu').addClass('fadeInDown');
        $('.logo-header').removeClass('zoomOut');
        $('.logo-header').addClass('zoomIn');

    }else{
        $(footer).css('opacity', 0);
        $(footer).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
            $(footer).css('opacity', 1);
            $(footer).html('' +
                '<img class="control-up" src="img/control-up.png" alt=""/>' +
                footer_cont.html() +
                '<img class="logo" src="img/footer-header-img.png" alt=""/>'
            );

            $('.control-up').click(function() {
                $(".main").moveTo(1);
            });
        });

        $(footer).parent().addClass('footer-last');
        $('.header-menu').removeClass('fadeInDown');
        $('.header-menu').addClass('fadeOutUp');
        $('.logo-header').removeClass('zoomIn');
        $('.logo-header').addClass('zoomOut');

    }
}
$(window).load(function(){
    $('.onepage-pagination').addClass('animation-section');

    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });
    slider_4 = $('#slider-4').bxSlider();
    slider_5 = $('#slider-5').bxSlider();
    slider_6 = $('#slider-6').bxSlider();
    slider_7 = $('#slider-7').bxSlider();
    slider_8 = $('#slider-8').bxSlider();

    $('.overlay-close').click(function(){
        if ($(this).hasClass('close-main')){
        }else{
            $('.header-menu').css('visibility', 'visible');
            $('.logo-header').css('visibility', 'visible');
            $('.footer-control').css('visibility', 'visible');
            $('.onepage-pagination').show();
        }
        $(this).parent().removeClass('open');
        $(this).parent().addClass('close');
    })


    sectionAnimation('.page1');
    function enterSite(){
        $('.background').show();
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
            $('.footer-control').removeAttr('style');
            $('.footer-control').addClass('animated');
        }, 2000)
        setTimeout(function(){
            $('.onepage-pagination li:first-child a').addClass('fadeInLeftAfter');
        }, 3500)
        setTimeout(function(){
            setInterval(function(){ $('.icon-heart-girl').toggleClass('tada animated');}, 2000)
        }, 2000);
        $('.main').addClass('display-on');
        $('.enter-site').addClass('display-off');
        sectionAnimation('.page3.active');
    }
    $('.enter-s').click(function() {
        if($('#morethan21').is(':checked')) {
            localStorage['enterSite'] = 'true';
            enterSite();
        }
        $(".main").moveTo(1);
    });
    setInterval(function(){
        $('.page8 .icon-container-sup i').each(function(){
            $(this).toggleClass('tada animated');
        })
    }, 2000)

    if (localStorage['enterSite'] == "true"){
        enterSite();
        $(".main").moveTo(1);
        sectionAnimation('#main-bg');
    }

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
    $('.reveal').removeClass('pre-title');
    $('.reveal, .animation-section, .onepage-pagination li a:after').each(function(){
        $(this).css('visibility', 'hidden');
        $(this).css('-webkit-animation-name', 'none');
    })

    $('#trigger-overlay').click(function(){
        $('#slider-1').removeClass('close');
        $('#slider-1').addClass('open');
    })
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

});