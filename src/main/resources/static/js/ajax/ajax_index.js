$(function () {
    startSearch();
})

//CALL API MENU HEADER
callAllMenu().then(result => {
    setMenuHeader(result);
})
//call menu
async function callAllMenu() {
    let rs = [];
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/menu",
        timeout: 30000,
        success: function (result) {
            rs = result;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}

//set menu header

function setMenuHeader(menuList) {
    let rs = "";
    menuList.map(menu => {
        rs += `<li class="header-category">
        <a href="category1?id=${menu.id}">
            ${menu.name}
        </a>
    </li>`
    });
    // rs += `<li class="menu">
    //                     <a href="">
    //                         Menu
    //                         <i class="fas fa-bars"></i>
    //                     </a>
    //                 </li>`;
    $(".header-left ul.header-list-category").html(rs);
}

//set all note-category

function setAllNoteCategory(menuList) {
    let rs = "";
    menuList.map(menu => {
        rs += `<div class="node-category" id="nc${menu.id}">
            <div class="node-title">
                <h3 class="title-node-category">
                 <a href="category1?id=${menu.id}">
                    ${menu.name}
                 </a>
                </h3>
                <span class="description-category">${menu.description}</span>
            </div>
        </div>`
        setListCategoryLv2(menu.id);
    })
    $('.group-category').html(rs);
}

//setListCategoryLv2
function setListCategoryLv2(idNodeCategory) {
    let rs = "";
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/big-category/menu?menu-id="+idNodeCategory,
        timeout: 30000,
        success: function (result) {
            let rt = "<ul class=\"list-category-lv2\">";
            result.map(categoryLv2 => {
                rt += `<li class="category-lv2">
                                <div class="category-lv2-right">
                                    <i class="fas fa-comments fa-2x"></i>
                                    <div class="text-category-lv2" id="ct2lv${categoryLv2.id}">
                                        <h3>
                                            <a href="category2?id=${categoryLv2.id}" title="${categoryLv2.description}">
                                                ${categoryLv2.name}
                                            </a>
                                        </h3>
                                        <span class="tag-category-lv2">Tag: <strong>39,154</strong></span>
                                        <span class="post-category-lv2">Bài viết: <strong>1,371,369</strong></span>
                                    </div>
                                </div>
                            </li>`
                setTagNewCategoryLv2(categoryLv2.id);
            })
            rt += "</ul>";
            $("#nc"+idNodeCategory).append(rt);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

//Set tag new categoryLv2
function setTagNewCategoryLv2(idLv2) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/big-category/news-tag/size?id="+idLv2,
        timeout: 30000,
        success: function (result) {
            $(`#ct2lv${idLv2} .tag-category-lv2`).html(`Tag: <strong>${result.tagNumber}</strong>`);
            $(`#ct2lv${idLv2} .post-category-lv2`).html(`Bài viết: <strong>${result.newsNumber}</strong>`);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

setPostHotMonth();
//Set hot post month
function setPostHotMonth() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/hot-by-month",
        timeout: 30000,
        success: function (result) {
            let rs = '<h3 class="title-aside">Sôi động trong tháng</h3>';
            result.map(data => {
                rs += `<div class="list-hot">
                        <a href="post?id=${data.id}">
                            <div class="img-hot">
                                <img src=${data.image} alt=${data.title} class="rounded">
                            </div>
                            <span class="title-hot">${data.title}</span>
                        </a>
                    </div>`
            })
            $('aside .hot').html(rs);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

//END CALL API MENU HEADER

//set title-bar
function setTitleBar(category) {
    $(".title-bar h1").text(category.name);
    $(".title-bar .description-category").text(category.description);
}

function startSearch() {
    $("#icon-search").click(function () {
        window.location = `search?id=${$("#search").val()}`;
    })
    $("#search").keypress(function(event) {
        if (event.keyCode == 13 || event.which == 13) {
            window.location = `search?id=${$("#search").val()}`;
        }
    });
}