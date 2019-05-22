$(function () {
    // countdownStart
    var storageCountdownReset = "countdownResetLoroksil",
        storageCountdownTime = "countdownTimeLoroksil",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
        localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
        if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
            var countdownTime = (new Date).getTime() + 24e5;
            localStorage.setItem(storageCountdownTime, countdownTime);
            localStorage.setItem(storageCountdownReset, nowDateTime);
        }
    }

    if (localStorage.getItem(storageCountdownTime)) {
        var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
        countdownTime = (new Date).getTime() + 24e5;
    }

    $(".countdown").countdown(countdownTime, function (s) {
        $(this).html(s.strftime('' +
            '<div class="countdown__item hour">%H</div>' +
            '<div class="countdown__item minute">%M</div>' +
            '<div class="countdown__item second">%S</div>'
        ));
    }).on('update.countdown', function (e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
        $('.countdown').countdown('stop');
    });
    // countdownEnd

    $(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            items: 1


        });

        $(".owl-prev").empty();
        $(".owl-next").empty();
    })

})