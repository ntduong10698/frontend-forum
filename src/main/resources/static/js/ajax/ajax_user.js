var listPostUser = [];
var listSmallCategory = [];
$(function () {
    submit_disable();
    viewInfroUser();
    $("#sub_btn").click(clickUpdate);
    findAllBigCategory();
    clickCreatePost();
    changeAvata();
    getAllPostUser();
    deletePost();
    updatePostId();
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
        $(".info-tk .image-user").html(`<img src=${user.avatarURL == null ? 'http://jscoderetreat.com/img/why-js.png'  : user.avatarURL} alt=${user.name}>
                                            <form method="POST" action="" enctype="multipart/form-data" id="btn-img-request">
                                                <div>
                                                    <label for="change-avata" class="changeAvata">Change</label>
                                                    <input type="file" class="form-control-file" name="image" multiple="multiple" id="change-avata">
                                                </div>
                                            </form>
                                            `)
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
        url: URL_API + "/v1/public/small-category",
        timeout: 30000,
        success: function (result) {
            let rs = '';
            listSmallCategory = result;
            result.map(data => {
                rs += `<option value=${data.id}>${data.bigCategory.name}</option>`
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
            let tokenLogin = sessionStorage.getItem('tokenLogin');
            if (title.match(/.{0,50}/) && tag.match(/(@{1}\w{0,10})+/) && category != 0 && content.length >= 200) {
                setTag(tag).then(rs => {
                    $.ajax({
                        type: 'POST',
                        // dataType: "json",
                        headers: {
                            'Authorization': tokenLogin
                        },
                        data: JSON.stringify(newPost),
                        contentType: "application/json",
                        url: URL_API + `/v1/user/news?user-id=${user.id}&small-id=${category}&tagString=${rs}`,
                        timeout: 30000,
                        success: function (result) {
                            console.log(result);
                            alert("Đăng bài thành công")
                            getAllPostUser();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert("Đăng bài thất bại!")
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
    let tokenLogin = sessionStorage.getItem("tokenLogin");
    await $.ajax({
        type: 'POST',
        dataType: "json",
        contentType: "application/json",
        headers: {
            'Authorization': tokenLogin
        },
        url: URL_API + "/v1/user/tag?content="+textTag,
        timeout: 30000,
        success: function (result) {
            let rt = '';
            result.map((data,index) => {
                if(index < result.length -1) {
                    rt += data+",";
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

function changeAvata() {
    $("#change-avata").change(function () {
        var formImages = $("#btn-img-request")[0];
        var formNewsData = new FormData(formImages);
        uploadFile(formNewsData).then(data => {
            let user = JSON.parse(sessionStorage.getItem("user"));
            let tokenLogin = sessionStorage.getItem("tokenLogin");
            user.avatarURL = data.data.display_url;
            console.log(user);
            $.ajax({
                type: 'PUT',
                dataType: "json",
                contentType: "application/json",
                headers: {
                    'Authorization': tokenLogin
                },
                data: JSON.stringify(user),
                url: URL_API + "/v1/user/change-profile",
                timeout: 30000,
                success: function (result) {
                    if (result != 'change profile error') {
                        alert("Update thành công!");
                        sessionStorage.setItem("user",JSON.stringify(result));
                        viewInfroUser();
                        setLoginHeader();
                    } else {
                        alert("Update thất bại!");
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            })
        })
    })
}

var uploadFile = async (file) => {
    let data;
    await $.ajax({
        type: "POST",
        url: "https://api.imgbb.com/1/upload?key=de298703d3747242af0c357c04365c5",
        enctype: 'multipart/form-data',
        data: file,
        cache: false,
        processData: false,
        contentType: false,
        success: function (result) {
            data = result
        },
        error: function (jqXHR, textStatus, errorThrown) {
            errMess(jqXHR, textStatus, errorThrown);
        }
    });
    return data;
};

function getAllPostUser() {
    let tokenLogin = sessionStorage.getItem("tokenLogin");
    let user = JSON.parse(sessionStorage.getItem("user"));
    let id = user.id;
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/user?user-id="+id,
        timeout: 30000,
        success: function (result) {
            listPostUser = result;
            setSelectPost(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function setSelectPost(list) {
    let rs = "<option value=0>ID</option>";
    list.map( data => {
        rs += `<option value=${data.id}>${data.id}</option>`
    })
    $("#listPostUser").html(rs);
    loadPost();
}

function loadPost() {
    $("#listPostUser").change(function () {
        var idPost = $("#listPostUser").val();
        if(idPost != 0) {
            let n = listPostUser.length;
            for (let i = 0 ; i < n; i++) {
                if(idPost == listPostUser[i].id) {
                    $("#title-new-post").val(listPostUser[i].title);
                    $("#tag-new-post").val(setListTag(listPostUser[i].tags));
                    $("#listBig").val(listPostUser[i].smallCategory.id);
                    $(".nicEdit-main").html(listPostUser[i].content);
                    break;
                }
            }
        }else {
            $("#title-new-post").val('');
            $("#tag-new-post").val('');
            $("#listBig").val(0);
            $(".nicEdit-main").html('');
        }
    })
}

function setListTag(list) {
    let rs = '@';
    list.map((data, index) => {
        if(index == list.length-1) {
            rs += data.name;
        }else {
            rs += data.name +"@";
        }
    })
    return rs;
}

function deletePost() {
    let tokenLogin = sessionStorage.getItem("tokenLogin");
    $("#delete-post").click(function () {
        let idPost = $("#listPostUser").val();
        if (idPost != 0) {
            $.ajax({
                type: 'PUT',
                // dataType: "json",
                contentType: "application/json",
                headers: {
                    'Authorization': tokenLogin
                },
                dataType: "json",
                url: URL_API + "/v1/user/news/delete?id="+idPost,
                timeout: 30000,
                success: function (result) {
                    alert("Xóa Thành Công");
                    getAllPostUser();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Xóa Thành Công")
                    console.log(errorThrown);
                    getAllPostUser();
                }
            })
        } else {
            alert("Vui lòng chọn bài viết để xóa!");
        }
        return false;
    })
}

function updatePostId() {
    $("#update-post").click(function () {
        let idPost = $("#listPostUser").val();
        let tokenLogin = sessionStorage.getItem("tokenLogin");
        let title= $("#title-new-post").val();
        let tag = $("#tag-new-post").val();
        let category = findCategory($("#listBig").val());
        let content = $(".nicEdit-main").html();
        let image = $(".nicEdit-main > img");
        if (idPost != 0) {
            if(image !=null && image.length != 0) {
                image = image.attr("src");
                let newPost = {};
                let n = listPostUser.length;
                for (let i = 0 ; i < n; i++) {
                    if(idPost == listPostUser[i].id) {
                        newPost = listPostUser[i];
                        newPost.title = title;
                        newPost.content= content;
                        newPost.image= image;
                        newPost.smallCategory = category;
                        break;
                    }
                }
                if (title.match(/.{0,500}/) && tag.match(/(@{1}\w{0,10})+/) && category != 0 && content.length >= 200) {
                    setTag(tag).then(rs => {
                        console.log(newPost);
                        $.ajax({
                            type: 'PUT',
                            // dataType: "json",
                            contentType: "application/json",
                            headers: {
                                'Authorization': tokenLogin
                            },
                            data: JSON.stringify(newPost),
                            url: URL_API + `/v1/user/news?tagString=`+rs,
                            timeout: 30000,
                            success: function (result) {
                                alert(result);
                                getAllPostUser();
                                return false;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert("Cập nhật thất bại");
                                return false;
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
        } else {
            alert("Vui lòng chọn bài viết để cập nhập!");
        }
        return false;
    })
}

function findCategory(id) {
    let n = listSmallCategory.length;
    for (let i = 0; i < n ; i++) {
        if(id == listSmallCategory[i].id) {
            return listSmallCategory[i]
        }
    }
    return listSmallCategory[0];
}