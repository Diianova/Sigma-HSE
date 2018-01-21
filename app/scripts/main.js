$(function(){
    var mn = $(".js-fixed-top-menu");
    var mns = "fixed-top-menu";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.js-fixed-top-menu').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            mn.removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                mn.removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    //Humburger menu
    var menuBtn = $('.js-menu-bnt');
    var menuBtnIcon = $('.js-menu-btn-icon');
    var menuList = $('.js-main-nav-list');
    var menu = $('.js-mob-menu');

    menuBtn.on('click', function(){
        menuList.toggleClass('main-nav_show');
        menuBtnIcon.toggleClass('menu-btn__icon_show');
        menu.toggleClass('header__mob_bg');
    });

    //Change language button
    var langBtn = $('.js-change-lang');

    langBtn.on('click', function(){
        $('.js-lang-list').toggleClass('lang_show');
    });

    //Slider
    var translateWidth = 0;
    var slideAmount = $('.js-slides').children().length;
    var slide = $('.js-slide');
    var btnPrev = $('.js-prev-btn');
    var btnNext = $('.js-next-btn');

    btnNext.click(function() {
        nextSlide();
    });
    btnPrev.click(function() {
        prevSlide();
    });

    function nextSlide() {
        translateWidth -= 300;
        slide.css({
            'transform': 'translate(' + translateWidth  + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth  + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth  + 'px, 0)',
        });
        if(translateWidth == -600){
            translateWidth = -300;
            slide.css({
                'transform': 'translate(-300px, 0)',
                '-webkit-transform': 'translate(-300px, 0)',
                '-ms-transform': 'translate(-300px, 0)',
            });
        }
    }

    function prevSlide() {
        translateWidth += 300;
        slide.css({
            'transform': 'translate(' + translateWidth  + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth  + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth  + 'px, 0)',
        });
        if(translateWidth == 600){
            translateWidth = 300;
            slide.css({
                'transform': 'translate(300px, 0)',
                '-webkit-transform': 'translate(300px, 0)',
                '-ms-transform': 'translate(300px, 0)',
            });
        }
    }

    // Scroll user down to the first section
    var btn = $('.js-banner-btn');
    var pageHead = ($('header').height());
    btn.on('click',function(e){
        $('html,body').animate({scrollTop: pageHead }, 1500);
    });

    //Ttriangle button animation
    function bannerBtnAnim(){
        btn.animate({opacity: 0.1}, 2000, function(){
            $(this).animate({opacity: 1}, 1000, function(){
                setTimeout(bannerBtnAnim);
            });
        });

    }
    setTimeout(bannerBtnAnim);

    //Popup
    var showPopupBtn = $('.js-search');
    var popup = $('.js-popup');
    var closePopupBtn = $('.js-close-popup');
    var inputPopup = $('.js-popup-input');

    showPopupBtn.on('click',function(){
        popup.toggleClass('popup_show');
        inputPopup.focus();
    });

    closePopupBtn.on('click',function(){
        popup.toggleClass('popup_show');
    });


});
