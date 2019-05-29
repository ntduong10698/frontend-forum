$(function () {
    $("#btn-login").click(function () {
        let username = $("#login-email").val();
        let password = $("#login-pass").val();
        let matchUser = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let matchPass = /.{6,100}/;
        if (username.match(matchUser) && password.match(matchPass)) {
            login(username, password);
        } else {
            alert("Vui lòng nhập đúng định dạng");
        }
    })
    let matchUser = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let matchPass = /.{6,100}/;
    let username = $("#login-email").val();
    let password = $("#login-pass").val();
    $("#login-email").keypress(function(event) {
        if (event.keyCode == 13 || event.which == 13) {
            event.preventDefault();
            username = $("#login-email").val();
            password = $("#login-pass").val();
            if (username.match(matchUser) && password.match(matchPass)) {
                login(username, password);
            } else {
                alert("Vui lòng nhập đúng định dạng");
            }
        }
    });
    $("#login-pass").keypress(function(event) {
        if (event.keyCode == 13 || event.which == 13) {
            event.preventDefault();
            username = $("#login-email").val();
            password = $("#login-pass").val();
            if (username.match(matchUser) && password.match(matchPass)) {
                login(username, password);
            } else {
                alert("Vui lòng nhập đúng định dạng");
            }
        }
    });
})

function login(username, password) {
    var data = {
        username: username,
        password: password
    };
    var tooken = '';
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: URL_API + "/v1/public/login",
        data: JSON.stringify(data),
        cache: false,
        timeout: 300000,
        success: function (data) {
            if (data == 'username or password is not correct') {
                alert("Tài khoản hoặc mật khẩu không đúng");
            } else {
                tokenLogin = data;
                sessionStorage.setItem("tokenLogin", tokenLogin);
                console.log(tokenLogin);
                $.ajax({
                    type: 'GET',
                    dataType: "json",
                    headers: {
                        'Authorization': tokenLogin
                    },
                    url: URL_API + "/v1/user/my-profile",
                    timeout: 30000,
                    success: function (result) {
                        result.avatarURL = result.avatarURL == null ? 'http://jscoderetreat.com/img/why-js.png' : result.avatarURL;
                        sessionStorage.setItem("user", JSON.stringify(result));
                        setLoginHeader();
                        window.location= "home";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                })
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            errMess(jqXHR, textStatus, errorThrown);
            // alert("error");
        }
    });
    return tooken;
}
