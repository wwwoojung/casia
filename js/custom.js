$(function () {
    feather.replace();

    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.MainVisual .arrows .left').on('click', () => {
        $('.main_visual_slide').slick('slickPrev');
    });

    $('.MainVisual .arrows .right').on('click', () => {
        $('.main_visual_slide').slick('slickNext');
    });

    $(window).on('scroll', () => {
        let SCT = $(window).scrollTop();

        SCT > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on');
    })

    $('.m_btn').on('click', () => {
        $('.Header').toggleClass('active');
    })
})