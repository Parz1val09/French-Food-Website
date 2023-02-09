$("#flip").click(function () {
    $('html, body').animate({
        scrollTop: $("#pg2").offset().top
    },
        'slow');
});