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
        console.log("name is so less");
    }
    //email
    let length_tex = email.value.length - 10;
    let Gmail = email.value.substring(length_tex, email.value.length);
    if (Gmail == "@gmail.com" || Gmail == "@yahoo.com" && email.value.length > 13) {
        console.log("email ok");
    } else {
        console.log('email not true');
    }
    // maching pass
    if (re_pass.value == pass.value) {
        console.log("pass ok");
    } else {
        console.log("pass not maching");
    }

}

function check_login(e) {
    let email = $("#email-login")[0];

    //email
    let length_tex = email.value.length - 10;
    let Gmail = email.value.substring(length_tex, email.value.length);
    if (Gmail == "@gmail.com" || Gmail == "@yahoo.com" && email.value.length > 13) {
        console.log("email ok");
    } else {
        console.log('email not true');
    }
}