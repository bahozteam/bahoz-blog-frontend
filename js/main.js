for (let i = 0; i < 5; i++) {
    let element = `

    <div class="content">

    <div class="image-content">
        <img src="assets/images/content.jpg" alt="">
    </div>

    <div class="mini-title-cont">
        <p class="mini-title">برنامه نویسی </p>
    </div>


    <div class="normal-title-cont">
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h4>
    </div>

    <div class="normal-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    </div>

    <div class="profile-cont">

        <div class="image-profile-cont">
            <img src="assets/images/profile 1.png" alt="profile">
        </div>

        <div class="left-profile-cont">
            <p class="name-user">صالح وفایی</p>
            <p class="normal-text">2 مرداد 1401</p>

        </div>


    </div>

</div>

`;
    document.querySelector(".content-cont").innerHTML += element

}




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
        right: "-410px",
        displey: "none"
    });
}
//!----------------------  scroll left & right short menu ----------//
let short_menu = document.querySelector(".short-menu")
$('.scroll-right').click(function(e) {
    short_menu.scrollBy(80, 0)

});
$('.scroll-left').click(function(e) {
    short_menu.scrollBy(-80, 0)

});