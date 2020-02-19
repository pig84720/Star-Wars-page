$(document).ready(function() {
    var screen_height = document.body.clientHeight;
    $(window).scroll(function() {
        if ($(window).scrollTop() > screen_height) {
            $(".navbg").addClass("navbar-fixed");
            $(".about-us").addClass("about-us_area");
        } else if ($(window).scrollTop() < screen_height + 1) {
            $(".navbg").removeClass("navbar-fixed");
            $(".about-us").removeClass("about-us_area");
        }
    });

    $("#menu_img").on("click", function() {
        if ($("nav").hasClass("open")) {
            $("nav").removeClass("open");
        } else {
            $("nav").addClass("open");
        }
    });

    /*點擊超連結滑動*/
    $("#logo").click(function() {
        $("html, body").animate({ scrollTop: $("#home").offset().top }, 500);
    });

    $("#btn").click(function() {
        $("html, body").animate({ scrollTop: $("#about-us").offset().top }, 500);
    });

    $("#nav-about").click(function() {
        $("html, body").animate({ scrollTop: $("#about-me").offset().top }, 500);
    });

    $("#process").click(function() {
        $("html, body").animate({ scrollTop: $("#relation").offset().top }, 500);
    });

    $("#pic").click(function() {
        $("html, body").animate({ scrollTop: $("#photo").offset().top }, 500);
    });

    $("#contact-us").click(function() {
        $("html, body").animate({ scrollTop: $("#contact").offset().top }, 500);
    });

    $("#position").click(function() {
        $("html, body").animate({ scrollTop: $("#contact").offset().top }, 500);
    });
});
