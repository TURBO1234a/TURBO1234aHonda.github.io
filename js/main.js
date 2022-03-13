var count = "";
$("#navbar > a").click(function () {
    if (count === "") {
        count = $(this).attr("id");
        $(this).addClass("active");
        if (count === "vehicles-link") {
            $("#vehicles").removeClass("hide-vehicles");
            $(".vehicles-nav").addClass("animate__fadeInDown");
            $("#vehicles-list").addClass("animate__fadeInUp");
            $(".vehicles-nav").removeClass("animate__fadeOutUp");
        }

    }
    else {
        if (count === $(this).attr("id")) {
            $(this).removeClass("active");
            count = "";
            $(".vehicles-nav").addClass("animate__fadeOutUp");
            $("#vehicles-list").addClass("animate__fadeOutDown");
            setTimeout(() => {
                $("#vehicles").addClass("hide-vehicles");
                $(".vehicles-nav").removeClass("animate__fadeInDown");
                $("#vehicles-list").removeClass("animate__fadeOutDown");
            }, 300);
        }
        else {
            $("#navbar > a").removeClass("active");
            $(this).addClass("active");
            count = $(this).attr("id");
            if (count != "vehicles-link") {
                $(".vehicles-nav").addClass("animate__fadeOutUp");
                $("#vehicles-list").addClass("animate__fadeOutDown");


                setTimeout(function () {
                    $(".vehicles-nav").removeClass("animate__fadeInDown");
                    $("#vehicles-list").removeClass("animate__fadeOutDown");
                    $("#vehicles").addClass("hide-vehicles");
                }, 300);

            } else {

                $(".vehicles-nav").addClass("animate__animated animate__fadeInDown");
                $("#vehicles").removeClass("hide-vehicles");
                $("#vehicles-list").addClass("animate__fadeInUp");
                $(".vehicles-nav").removeClass("animate__fadeOutUp");

            }

        }
    }
})
var show = "";
var result = "";
$(".navbar-nav .nav-item >a").click(function () {
    $("#header #search-area").removeClass("show");
    if (show === "") {
        $(this).addClass("active");
        show = $(this).data("id");
    } else {
        result = $(this).data("id");
        if (result == show) {
            $(this).removeClass("active");
            show = "";
        } else {
            show = $(this).data("id");
            $(".navbar-nav .nav-item >a").removeClass("active");
            $(this).addClass("active");
          

        }

    }
})
$("#vehicles-close").click(function () {
    $(".vehicles-nav").addClass("animate__fadeOutUp");
    $("#vehicles-list").addClass("animate__fadeOutDown");
    $("#navbar > a").removeClass("active");

    setTimeout(function () {
        $(".vehicles-nav").removeClass("animate__fadeInDown");
        $("#vehicles-list").removeClass("animate__fadeOutDown");
        $("#vehicles").addClass("hide-vehicles");
    }, 300);
    count = "";
})
$(".vehicles-product").addClass("animate__animated animate__fadeInUp");
$(".carousel-indicators-config li").click(function () {
    $(".carousel-indicators-config li").removeClass("active");
    $(this).addClass("active");
})
var num = 1;
$(".carousel-indicators-xs i").click(function () {
    if (num % 2 == 0) {
        $(".carousel-indicators-xs ol").css({ height: "0px" });
        $(".carousel-indicators-xs i").css({ transform: "rotate(0)" });
    } else {
        $(".carousel-indicators-xs ol").css({ height: "280px" });
        $(".carousel-indicators-xs i").css({ transform: "rotate(180deg)" });
    }

    num++;
})
// $(".indicators-xs-header").click(function () {
//     $(".carousel-indicators-xs ol").slideToggle();
// })
$(".carousel-indicators-xs ol li").click(function () {
    $(".indicators-title span").html($(this).html());
    $(".carousel-indicators-xs i").css({ transform: "rotate(0)" });
    $(".carousel-indicators-xs ol").css({ height: "0px" });
    num++;
})
var position = 0;
$(".carousel-control-prev").click(function () {
    $(".carousel-indicators-config li").removeClass("active");
    if (position == 0) {
        position = 4;
    } else {
        position--;
    }
    $(".carousel-indicators-config li").each(function (i) {
        if (i == position) {
            $(this).addClass("active");
            $(".indicators-title span").html($(this).html());
        }
    })
})
$(".carousel-control-next").click(function () {
    $(".carousel-indicators-config li").removeClass("active");
    if (position == 4) {
        position = 0;
    } else {
        position++;
    }
    $(".carousel-indicators-config li").each(function (i) {
        if (i == position) {
            $(this).addClass("active");
            $(".indicators-title span").html($(this).html());

        }
    })
})


