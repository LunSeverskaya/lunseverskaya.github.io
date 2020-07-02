$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    if (document.documentElement.clientWidth < 768) {
        $('.footer-lists__head').click(function(event) {
            $(this).siblings('.footer-list').toggleClass('active');
            $(this).find('.bottom').toggleClass('top')
        });
    }

    $("button.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'zero',
        dots:true,
        responsive : {
            0 : {
                items:1.1,
                margin: 8,
                dotsEach: true
              
            },
    
            768 : {
                items: 2.3,
                dotsEach: true,
                nav:true,
                margin: 16,
                dots:true
            },

                
            890 : {
                items: 3,
                dotsEach: true,
                nav:true,
                margin: 16,
                dots:true
            },
            980 : {
                items: 3.3,
                dotsEach: true,
                nav:true,
                margin: 16,
                dots:true
            },

            1024 : {
                items: 3.2,
                dotsEach: true,
                nav:true,
                margin: 32,
                dots:true
            },

            1170 : {
                items: 3.4,
                dotsEach: true,
                margin: 25,
                nav:true,
                dots:true
            },

            1300 : {
                items: 4,
                dotsEach: true,
                margin: 32,
                nav:true,
                dots:true
            }
        }
    });
});

