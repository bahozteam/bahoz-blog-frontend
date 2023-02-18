// ? selectors
let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let loginSection = document.querySelector(".login-section");
let registerSection = document.querySelector(".register-section");
let allButtons = document.querySelectorAll(".submit");

// ! functions

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function() {
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    // switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    // bContainer.classList.toggle("is-txl");
    // bContainer.classList.toggle("is-z200");
    loginSection.classList.toggle("is-hidden");
    registerSection.classList.toggle("is-hidden");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

//* event listeners 

window.addEventListener("load", mainF);

//! script for Login in mobile size

let login_register = document.querySelectorAll(".login-register-cont>div");

login_register.forEach(
    (item) => {
        item.addEventListener('click', () => {

            if ($(item).hasClass("register")) {
                // register
                $("#register-title").css("display", "block");
                $("#login-title").css("display", "none");
                //end title
                $(item).addClass("selected");
                $(".login").removeClass("selected");
            } else if ($(item).hasClass("login")) {
                //login
                $("#register-title").css("display", "none");
                $("#login-title").css("display", "block");
                //end title
                $(item).addClass("selected");
                $(".register").removeClass("selected");
            }
        })
    }
);
// ! check inputs 

// _1_  check password
let submit_register = document.getElementById("submit-register");
let submit_login = document.getElementById("submit-login");

$(submit_register).click(check_register);
$(submit_login).click(check_login);

function check_register(e) {
    let name = $("#name-register")[0];
    let email = $("#email-register")[0];
    let pass = $("#pass-register")[0];
    let re_pass = $("#re-pass-register")[0];

    //name
    if (name.value.length < 3) {
        set_error(name)
    } else {
        remove_error(name)
    }
    //email
    let length_tex = email.value.length - 10;
    let Gmail = email.value.substring(length_tex, email.value.length);
    if (Gmail != "@gmail.com" || Gmail != "@yahoo.com" && email.value.length < 13) {
        set_error(email)
    } else {
        remove_error(email)
    }
    // maching pass
    if (!pass.value) {
        set_error(pass)
    } else {
        remove_error(pass)
    }

    if (re_pass.value != pass.value) {
        set_error(re_pass)
    } else {
        remove_error(re_pass)
    }

}

function check_login(e) {
    let email = $("#email-login")[0];
    let pass = $("#pass-login")[0];

    //email
    let length_tex = email.value.length - 10;
    let Gmail = email.value.substring(length_tex, email.value.length);
    if (Gmail != "@gmail.com" || Gmail != "@yahoo.com" && email.value.length < 13) {
        set_error(email)
    } else {
        remove_error(email)
    }

    if (!pass.value) {
        set_error(pass)
    } else {
        remove_error(pass)
    }
}



function set_error(eleman) {
    $(eleman.previousElementSibling).css("color", "#f34747");
    $(eleman.parentElement).css("borderBottom", "2px solid #f34747");
    //animation
    $(eleman.parentElement).addClass("error");
    setTimeout(() => {
        $(eleman.parentElement).removeClass("error");
    }, 500);


}

function remove_error(eleman) {
    $(eleman.previousElementSibling).css("color", "#159F91");
    $(eleman.parentElement).css("borderBottom", "2px solid #159F91");
}