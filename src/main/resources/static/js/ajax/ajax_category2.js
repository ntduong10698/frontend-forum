$(function () {
    var pathName = window.location.href.split('?id=');
    var arr = pathName[0].split("/");
    var typeCategory = arr[arr.length - 1]; //http://.../.. get type Category
    var id = pathName[pathName.length - 1]; //get id category
    console.log(arr);
    console.log(typeCategory);
    if ('search' === typeCategory.toLowerCase()) {
        callSearch(id);
    } else if('tag' === typeCategory.toLowerCase()){
        findTag(id);
    } else if ('category2' == typeCategory.toLowerCase()) {
        findBigCategoryById(id);
    } else {
        $(".title-bar .description-category").text("Tìm kiếm các bài viết.");
        $('.all-post').html("Tìm kiếm không trùng khớp.");
    }
})

function callSearch(name) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/search?name="+name,
        timeout: 30000,
        success: function (result) {
            $(".title-bar h1").text("Tìm kiếm");
            $(".title-bar .description-category").text("Tìm kiếm các bài viết.");
            pageAbleSearch(name);
            if (result == 0) {
                $('.all-post').html("Tìm kiếm không trùng khớp.");
            } else {
                setAllPostByBigCategory(result);
                clickSortLike(result);
                clickResetList(result);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function callSearchPage(name, page) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/search?name="+name+"&page="+page,
        timeout: 30000,
        success: function (result) {
            setAllPostByBigCategory(result);
            clickSortLike(result);
            clickResetList(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function findTag(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/tag?tag-id="+id,
        timeout: 30000,
        success: function (result) {
            $(".title-bar h1").text("Tìm kiếm");
            $(".title-bar .description-category").text("Tag các bài viết.");
            pageAblePage(id);
            console.log(result);
            if (result == 0) {
                $('.all-post').html("Tìm kiếm không trùng khớp.");
            } else {
                setAllPostByBigCategory(result);
                clickSortLike(result);
                clickResetList(result);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function findTagPage(id, page) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/tag?tag-id="+id+"&page="+page,
        timeout: 30000,
        success: function (result) {
            setAllPostByBigCategory(result);
            clickSortLike(result);
            clickResetList(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function findBigCategoryById(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/big-category/find-by-id?id="+id,
        timeout: 30000,
        success: function (result) {
            setTreeUrl(result.menu);
            setTitleBar(result);
            findAllPostByBigCategory(result.id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function setTreeUrl(menu){
    $('.content-main .tree-url').append(`<a class="url" href="category1?id=${menu.id}">
                        ${menu.name}
                        <span class="arrow">
                                <span></span>
                            </span>
                    </a>`);
}

function findAllPostByBigCategory(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/big-category?big-id="+id,
        timeout: 30000,
        success: function (result) {
            if (result == 0) {
                $('.all-post').html("<strong style='color: red;font-size: 15px;'>Chưa có bài viết</strong>");
            }else {
                setAllPostByBigCategory(result);
                clickSortLike(result);
                clickResetList(result);
                pageAbleSize(id);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function findAllPostByBigCategoryPage(id,page) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/big-category?big-id="+id+"&page="+page,
        timeout: 30000,
        success: function (result) {
            setAllPostByBigCategory(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function clickResetList(result) {
    $("#click-reset").click(function () {
        setAllPostByBigCategory(result);
    })
}

function clickSortLike(listPost) {
    let list = listPost.map(data => data);
    $("#click-like").click(function () {
        list.sort(function (a, b) {
            return b.like - a.like;
        })
        setAllPostByBigCategory(list);
    })
}

function setAllPostByBigCategory(listPost) {
    let rs = '';
    listPost.map(data => {
        rs += `<tr>
                    <td scope="row"><img src=${data.appUser.avatarURL == null?'http://jscoderetreat.com/img/why-js.png':data.appUser.avatarURL } alt="${data.appUser.name}"></td>
                    <td class="w60"><a href="post?id=${data.id}">${data.title}</a></td>
                    <td class="text-right">${data.appUser.name}</td>
                    <td class="text-right">${data.like}</td>
                </tr>`
    })
    $('.all-post .table-post tbody').html(rs);
}

function pageAbleSize(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/big-category/size",
        timeout: 30000,
        success: function (result) {
            (function () {
                var container = $('#pagination');
                container.pagination({
                    dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
                    locator: 'items',
                    totalNumber: result,
                    pageSize: 1,
                    showPageNumbers: true,
                    showPrevious: true,
                    showNext: true,
                    showNavigator: true,
                    showFirstOnEllipsisShow: true,
                    showLastOnEllipsisShow: true,
                    callback: function (response, pagination) {
                        //console.log(pagination.pageNumber); // khi click sẽ đọc ra số trang click
                        findAllPostByBigCategoryPage(id, pagination.pageNumber);
                    }
                })
            })();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function pageAbleSearch(name) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/search/size",
        timeout: 30000,
        success: function (result) {
            (function () {
                var container = $('#pagination');
                container.pagination({
                    dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
                    locator: 'items',
                    totalNumber: result,
                    pageSize: 1,
                    showPageNumbers: true,
                    showPrevious: true,
                    showNext: true,
                    showNavigator: true,
                    showFirstOnEllipsisShow: true,
                    showLastOnEllipsisShow: true,
                    callback: function (response, pagination) {
                        console.log(pagination.pageNumber); // khi click sẽ đọc ra số trang click
                        callSearchPage(name,pagination.pageNumber);
                    }
                })
            })();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function pageAblePage(name) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/tag/size",
        timeout: 30000,
        success: function (result) {
            (function () {
                var container = $('#pagination');
                container.pagination({
                    dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
                    locator: 'items',
                    totalNumber: result,
                    pageSize: 1,
                    showPageNumbers: true,
                    showPrevious: true,
                    showNext: true,
                    showNavigator: true,
                    showFirstOnEllipsisShow: true,
                    showLastOnEllipsisShow: true,
                    callback: function (response, pagination) {
                        console.log(pagination.pageNumber); // khi click sẽ đọc ra số trang click
                        findTagPage(name,pagination.pageNumber);
                    }
                })
            })();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}