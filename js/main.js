/* search bar codes */
const searchDiv = document.querySelector(".search-menu");
const mobileSearchInput = document.querySelector("#mobileSearchInput");


function direction(element) {
    let char = new RegExp("/[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ\s]+$/");
    let firstChar = new RegExp("/^[\u0600-\u06FF\s]+$/");
    let secondChar = new RegExp("^/[a-zA-Z]/");
    if (firstChar.test(element.value) === true) {
        searchDiv.classList.add("persian-direction");
        searchDiv.classList.remove("english-direction");
        console.log("persian");
    } else if (secondChar.test(element.value) === true) {
        searchDiv.classList.add("english-direction");
        searchDiv.classList.remove("persian-direction");
        console.log("english");

    }
}

mobileSearchInput.addEventListener("keyup", (e) => {
    direction(e);
});

for (let i = 0; i < 5; i++) {
    let element = `

    <div class="box">

    <div class="image-box">
        <img src="assets/images/content.jpg" alt="">
    </div>
    <div class="content-box">

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

</div>

`;
    document.querySelector(".box-cont").innerHTML += element

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
        right: "-100%",
        displey: "none"
    });
}
// grouping 

$("div.grouping>i").click(function() {
    $(".down-menu>ul").toggleClass("show-ul");

    if ($(".down-menu>ul").hasClass("show-ul")) {
        $(this).css("transform", "rotate(-90deg)");
    } else {
        $(this).css("transform", "rotate(0deg)");

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