   $(document).ready(function () {
       $(function () {
           $(".owl-carousel").owlCarousel({
               items: 1,
               loop: true,
               nav: true
           });

           $(".owl-prev").empty();
           $(".owl-next").empty();
       })

       $(function () {

           $("[data-toggle=scroll]").on('click', function () {
               var elementClick = $(this).attr("href")
               var destination = $(elementClick).offset().top;
               jQuery("html:not(:animated),body:not(:animated)").animate({
                   scrollTop: destination
               }, 2000);
               return false;
           });

       })


   });
