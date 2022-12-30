let login_register = document.querySelectorAll(".login-register-cont>div");

login_register.forEach(
    (item) => {
        item.addEventListener('click', () => {

            if ($(item).hasClass("register")) {
                $(item).addClass("selected");
                $(".login").removeClass("selected");
            } else if ($(item).hasClass("login")) {
                $(item).addClass("selected");
                $(".register").removeClass("selected");
            }
        })
    }
);