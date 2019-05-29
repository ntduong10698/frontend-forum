$(function () {
    submit_disable();
    viewInfroUser();
    $("#sub_btn").click(clickUpdate);
    findAllBigCategory();
    clickCreatePost();
})

function submit_disable() {
    $("#sub_btn").prop("disabled", true);
    $("#name,#email,#phoneNumber,#address,#job,#infor").change(function () {
        $("#sub_btn").prop("disabled", false);
    });
}

function clickUpdate() {
    let name = $("#name").val();
    let email = $("#email").val();
    let phoneNumber = $("#phoneNumber").val();
    let address = $("#address").val();
    let job= $("#job").val();
    let present = $("#infor").val();
    let user = JSON.parse(sessionStorage.getItem("user"));
    let tokenLogin1 = sessionStorage.getItem("tokenLogin");
    if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        if (user != null && tokenLogin1 != null) {
            // let userUpdate = {
            //     id: user.id,
            //     name: name,
            //     email: email,
            //     password: user.password,
            //     gender: user.gender,
            //     birthDay: user.birthDay,
            //     phoneNumber: phoneNumber.substr(1),
            //     address: address,
            //     job: job,
            //     present: present,
            //     avatarURL: user.avatarURL,
            //     joinDate: user.joinDate,
            //     postCount: user.postCount,
            //     likeCount: user.likeCount,
            //     status: user.status,
            //     appRoles: user.appRoles,
            // };
            user.phoneNumber = phoneNumber.substr(1);
            user.name = name;
            user.email = email;
            user.address = address;
            user.job = job;
            user.present = present
            $.ajax({
                type: 'PUT',
                dataType: "json",
                contentType: "application/json",
                headers: {
                    'Authorization': tokenLogin1
                },
                data: JSON.stringify(user),
                url: URL_API + "/v1/user/change-profile",
                timeout: 30000,
                success: function (result) {
                    if (result != 'change profile error') {
                        alert("Update thành công!");
                        console.log(result);
                        sessionStorage.setItem("user",JSON.stringify(result));
                    } else {
                        alert("Update thất bại!");
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            })
        }
    } else {
        alert("Vui lòng nhập đúng định dạng email!");
    }
    return false;
}

function viewInfroUser() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user != null) {
        $(".info-tk .image-user").html(`<img src=${user.avatarURL == null ? 'http://jscoderetreat.com/img/why-js.png'  : user.avatarURL} alt=${user.name}>`)
        $(".info-tk .name-user").text(user.name);
        $("#name").val(user.name);
        $("#email").val(user.email);
        $("#phoneNumber").val('0'+user.phoneNumber);
        $("#address").val(user.address);
        $("#job").val(user.job);
        $("#infor").val(user.present);
    }
}

function findAllBigCategory() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/big-category",
        timeout: 30000,
        success: function (result) {
            let rs = '';
            result.map(data => {
                rs += `<option value=${data.id}>${data.name}</option>`
            })
            $('#listBig').append(rs);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function clickCreatePost() {
    $("#create-post").click(function () {
        let title= $("#title-new-post").val();
        let tag = $("#tag-new-post").val();
        let category = $("#listBig").val();
        let content = $(".nicEdit-main").html();
        let image = $(".nicEdit-main > img");
        console.log(image.length);
        if(image !=null && image.length != 0) {
            image = image.attr("src");
            let newPost = {
                title: title,
                content: content,
                image: image
            };
            console.log(newPost);
            let user = JSON.parse(sessionStorage.getItem('user'));
            let tokenLogin = sessionStorage.getItem('token');
            if (title.match(/.{0,50}/) && tag.match(/(@{1}\w{0,10})+/) && category != 0 && content.length >= 200) {
                setTag(tag).then(rs => {
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        headers: {
                            'Authorization': tokenLogin
                        },
                        data: JSON.stringify(newPost),
                        contentType: "application/json",
                        url: URL_API + `/v1/user/news?user-id=${user.id}&small-id=${category}&tagString=${rs}`,
                        timeout: 30000,
                        success: function (result) {
                            console.log(result);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                        }
                    })
                }).catch(err => {
                    console.log(err);
                });
            } else {
                alert("Vui lòng nhập tiêu đề không quá 50 ký tự. \n Hoặc các tag phải bắt đầu bằng @. \n Nội dung phải lớn hơn 200 ký tự.");
            }
        } else {
            alert("Bài viết cần thêm ảnh!");
        }
        return false;
    })
}

async function setTag(textTag) {
    let rs = '';
    await $.ajax({
        type: 'POST',
        dataType: "json",
        url: URL_API + "/v1/user/tag?content="+textTag,
        timeout: 30000,
        success: function (result) {
            let rt = '';
            result.map((data,index) => {
                if(index < result.length -1) {
                    rt += data+"-";
                } else {
                    rt += data;
                }
            })
            rs = rt;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}