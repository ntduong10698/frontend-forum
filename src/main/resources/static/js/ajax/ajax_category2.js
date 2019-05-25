$(function () {
    var pathName = window.location.href.split('?id=');
    var typeCategory = pathName[0].split("/")[3]; //http://.../.. get type Category
    var id = pathName[pathName.length - 1]; //get id category
    findBigCategoryById(id);
})

function findBigCategoryById(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/big-category/find-by-id?id="+id,
        timeout: 30000,
        success: function (result) {
            setTitleBar(result);
            findAllPostByBigCategory(result.id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function findAllPostByBigCategory(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/news/big-category?big-id="+id,
        timeout: 30000,
        success: function (result) {
            console.log(result);
            pageAbleSize();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function pageAbleSize() {
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
                        console.log(pagination.pageNumber);
                    }
                })
            })();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}