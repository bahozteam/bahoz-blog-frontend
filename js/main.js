//! ------------- read more ---------------------------//

$(".btn-read-more").click(function(e) {
    $(".more").toggleClass("reading-text");
    $(".read-more-cont").toggleClass("reading-btn");
    if ($(".read-more-cont").hasClass("reading-btn")) {
        this.innerHTML = "کاهش مطلب";
        $(".more-cont").css("flex-direction", "column");
    } else {
        this.innerHTML = "ادامه مطلب";
        $(".more-cont").css("flex-direction", "row");

    }

});

//!--------------------- comming menu for mobile ----------------------//
$("span.bars-menu>i").click(function() {
    $("body").css("overflow", "hidden");

    $("section.blurry").css("display", "block");
    $(".menu-mobile").css({
        right: "0",
        displey: "flex"
    });

});

//!------------------------- close menu for mobile -------------------------//
// close with click on icon & blurry 
$("section.blurry , span.close-menu>i").click(close_menu);

function close_menu() {

    $("body").css("overflow", "visible");

    $("section.blurry").css("display", "none");

    $(".menu-mobile").css({
        right: "-100%",
        displey: "none"
    });
}
//! grouping 

$("div.grouping").click(function() {
    $(".down-menu>ul").toggleClass("show-ul");

    if ($(".down-menu>ul").hasClass("show-ul")) {
        $("div.grouping>i").css("transform", "rotate(-90deg)");
    } else {
        $("div.grouping>i").css("transform", "rotate(0deg)");

    }

});


//!----------------------  scroll left & right short menu ----------//
let short_menu = document.querySelector(".short-menu")
$('.scroll-right').click(function(e) {
    short_menu.scrollBy(80, 0)

});
$('.scroll-left').click(function(e) {
    short_menu.scrollBy(-80, 0)

});
//!---------------------- control search direction -------------------//

$("input").keyup(function(e) {
    console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let char = new RegExp("[\u0600-\u06FF]");
        if (char.test(this.value) === true) {
            console.log("persian");
            $(this).removeClass("ltr");
            $(this).addClass("rtl");
            $(this).attr("placeholder", "دنبال چی میگردی رفیق :)");
        } else {
            console.log("english");

            $(this).removeClass("rtl");
            $(this).addClass("ltr");
            $(this).attr("placeholder", "What are you looking for, friend :) ");

        }
    }
});