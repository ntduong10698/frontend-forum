$(function () {
    var pathName = window.location.href.split('?id=');
    var typeCategory = pathName[0].split("/")[3]; //http://.../.. get type Category
    var id = pathName[pathName.length - 1]; //get id category
    findMenuById(id);
})

//call findBigCategory By Id
function findMenuById(id) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API + "/v1/public/menu/find-by-id?id="+id,
        timeout: 30000,
        success: function (result) {
            setTitleBar(result);
            $('.node-category').attr("id",`nc${id}`);
            setListCategoryLv2(id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}



