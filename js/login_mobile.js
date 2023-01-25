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