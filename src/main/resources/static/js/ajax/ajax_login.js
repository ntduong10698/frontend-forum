const loginForm = {
    username: "admin",
    password: 123456
};

// $.ajax({
//     type: "POST",
//     contentType: "application/json",
//     url: URL_API + "/v1/public/login",
//     data: JSON.stringify(loginForm),
//     cache: false,
//     timeout: 300000,
//     success: function (data) {
//         tokenLogin = data;
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//         errMess(jqXHR, textStatus, errorThrown);
//         alert("error");
//     }
// });

async function login() {
    var tooken = '';
    await $.ajax({
        type: "POST",
        contentType: "application/json",
        url: URL_API + "/v1/public/login",
        data: JSON.stringify(loginForm),
        cache: false,
        timeout: 300000,
        success: function (data) {
            tokenLogin = data;
            tooken = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            errMess(jqXHR, textStatus, errorThrown);
            alert("error");
        }
    });
    console.log(tooken);
    return tooken;
}


