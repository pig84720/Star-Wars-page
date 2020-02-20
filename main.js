$(document).ready(function() {
    /*固定nav在上方*/
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

    /*menu展開、收起來*/
    $("#menu_img").on("click", function() {
        if ($("nav").hasClass("open")) {
            $("nav").removeClass("open");
        } else {
            $("nav").addClass("open");
        }
    });

    /*監看行動裝置橫放或直放 */
    window.addEventListener("orientationchange", onOrientationchange, false);
    function onOrientationchange() {
        if (window.orientation === 180 || window.orientation === 0) {
            /*orientation: portrait   直式*/
            $("#orientation").hide();
        }
        if (window.orientation === 90 || window.orientation === -90) {
            /*orientation: landscape  橫式*/
            $("#orientation").show();
        }
    }

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

那天去你家前本來預想的畫面是
進你家碰到你媽的時候, 問她還記不記得我, 以前國中常來你們家打擾哈哈
想說你媽會不會忘了我是誰, 太久沒見面了
然後進你房間,跟以前一樣坐在你床上,聊這幾年發生了啥事、打哈哈,可能再打個電動之類的
結果蠻衝擊的,跟想像中完全不一樣
只能說誰能知道未來會發生甚麼事?我們都太渺小
突然蹦出一個男友還住在你家,也不能說突然啦真的太久沒聯絡
但本來以為你喜歡女生,不過喜歡男生也算是件好事
然後聽你說你媽不在了
一開始沒反應過來,記得上次去你家你媽好像不在家
很久沒見面,但以後都見不到了