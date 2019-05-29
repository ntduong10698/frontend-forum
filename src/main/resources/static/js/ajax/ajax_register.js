$(function () {
    clickSignUp();
    testPassword();
})

function clickSignUp() {
    $("#signUp").prop("disabled", true);
    let click_check = $("#agree").prop("checked");

    if (click_check == false) {
        let click_agree = "click_0";
        $("#agree").click(function () {
            if (click_agree == "click_0") {
                $("#signUp").prop("disabled", false);
                click_agree = "click_1";
            } else {
                $("#signUp").prop("disabled", true);
                click_agree = "click_0";
            }
        });
    }
}

function testPassword() {
    $("#signUp").click(function (event) {
        if ($("#password").val() == $("#password-v2").val()) {
            checkNewUser();
        } else {
            alert("xác nhận lại mật khẩu");
        }
        event.preventDefault();
    });

}


function postDataUser() {

    let postData = {
        name: $("#name").val(),
        username: $("#email").val(),
        password: $("#password").val(),
        gender: $("#gender >input[name = 'nam']:checked").val(),
        birthday: $("#date").val(),
        phoneNumber: $("#phoneNumber").val().slice(1),
        address: $("#address").val(),
        job: $("#job").val()
    };
    $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(postData),
        url: URL_API + "/v1/public/register",
        timeout: 30000,
        success: function (result) {
            alert("Đăng kí tài khoản thành công.");
            window.location="login";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert("Email đã tồn tại!");
        }
    })
}

// test data of user
function checkNewUser() {
    if ($("#name").val().match("(.{3,11})") && $("#email").val().match("(^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$)") && $("#phoneNumber").val().match("(^(09|03|07|08|05)+([0-9]{8}))")) {
        postDataUser();
    } else {
        alert("kiểm tra lại sđt, tên hoặc email");
    }

}