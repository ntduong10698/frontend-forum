const URL_API = 'http://localhost:8877/api';
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
        })
    })
}

setLoginHeader();
function setLoginHeader() {
    $(function () {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user !== null) {
            $(".exit").removeClass('not-view');
            $("#click-login").attr("href",`user?id=${user.id}`);
            $("#click-login").html(`<img src=${user.avatarURL == null ? 'https://tinhte.vn/styles/uiflex/dimota/logo_small.png' : user.avatarURL} alt=${user.name}>
                <span>${user.name}</span>`)
        }
    })
}