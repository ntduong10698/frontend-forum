$(function () {
    var pathName = window.location.href.split('?id=');
    var typeCategory = pathName[0].split("/")[3]; //http://.../.. get type Category
    var id = pathName[pathName.length - 1]; //get id category
    $(".fb-comments").attr("data-href",window.location.href);
    findPostById(id);
    checkLike(id);
})

function checkLike(id) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user !== null) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: URL_API + "/v1/public/like?id-user="+user.id+"&id-news="+id,
            timeout: 30000,
            success: function (result) {
                console.log(result);
                if (result == 0) {
                    $(function () {
                        $(".infor-post .like-post").addClass('color-red');
                    })
                } else {
                    $(function () {
                        clickLike(id);
                    })
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }
}

function findPostById(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/find-by-id?id="+id,
        timeout: 30000,
        success: function (result) {
            setPost(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function setPost(post) {
    $(".post .title-post").text(post.title);
    $(".post .image-post").html(`<img src=${post.image} alt=${post.title}>
                            <div class="infor-post">
                            <div class="user-post">
                                <img src=${post.appUser.avatarURL == null ? 'https://photo2.tinhte.vn/data/avatars/l/843/843587.jpg?1441363761' :post.appUser.avatarURL} alt=${post.appUser.name}>
                                <span class="name-user-post">${post.appUser.name} <i class="fas fa-check-circle"></i></span>
                            </div>
                            <div class="like-post"><i class="fas fa-heart"></i></div>
                        </div>`);
    $("article.content-post").html(post.content);
    setTag(post.tags);
}

function setTag(listTag) {
    let rs = '';
    listTag.map(data => {
        rs += `<li><a href="tag?id=${data.id}" class="tag"><span class="arrow"></span>${data.name}</a></li>`;
    })
    $('.tagBlock ul.tagList').html(rs);
}

function clickLike(id) {
    $(".like-post").click(function () {
        console.log("click");
        let user = JSON.parse(sessionStorage.getItem('user'));
        $(".infor-post .like-post").addClass('color-red'); //set trước tránh delay sau đó kiểm tra lại set lại sau
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: URL_API + "/v1/public/like?id-user="+user.id+"&id-news="+id,
            timeout: 30000,
            success: function (result) {
                if (result == 1) {
                    $(function () {
                        $(".infor-post .like-post").addClass('color-red');
                    })
                } else {
                    $(function () {
                        $(".infor-post .like-post").removeClass('color-red');
                    })
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    })
}