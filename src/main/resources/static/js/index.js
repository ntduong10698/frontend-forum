// const URL_API = 'http://localhost:8877/api';
const URL_API = 'http://123.31.45.240:9999/admin_tinh_tuong_forum/api';
const tokenHeader_value = "thangNaoDungTromApiLamCho";
var tokenLogin = '';
function errMess(jqXHR, textStatus, errorThrown) {
    console.log('jqXHR:');
    console.log(jqXHR);
    console.log('textStatus:');
    console.log(textStatus);
    console.log('errorThrown:');
    console.log(errorThrown);
}

clickExit()
function clickExit() {
    $(function () {
        $(".exit").click(function () {
            $("#click-login").attr("href","login");
            $("#click-login").text("Đăng nhập");
            $(".exit").addClass("not-view");
            sessionStorage.clear();
            window.location = "home";
        })
    })
}

setLoginHeader();
function setLoginHeader() {
    $(function () {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user !== null) {
            $(".exit").removeClass('not-view');
            $("#click-login").attr("href",`user`);
            $("#click-login").html(`<img src=${user.avatarURL == null ? 'http://jscoderetreat.com/img/why-js.png' : user.avatarURL} alt=${user.name}>
                <span>${user.name}</span>`)
        }
    })
}