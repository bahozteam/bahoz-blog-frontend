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
}

function remove_error(eleman) {
    $(eleman.previousElementSibling).css("color", "#159F91");
    $(eleman.parentElement).css("borderBottom", "2px solid #159F91");
}