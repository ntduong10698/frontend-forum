<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/category2.css">
<script src="resources/js/ajax/ajax_category2.js"></script>
<div class="content" id="content">
    <div class="container">
        <div class="row">
            <div class="content-main col-lg-8">
                <div class="tree-url row">
                    <a class="url" href="home">
                        <i class="fas fa-home"></i>
                        <span class="arrow">
                                <span></span>
                            </span>
                    </a>
<%--                    <a class="url" href="">--%>
<%--                        Thông tin - Sự kiện--%>
<%--                        <span class="arrow">--%>
<%--                                <span></span>--%>
<%--                            </span>--%>
<%--                    </a>--%>
                </div>
                <!-- END_TREE_URL -->

                <div class="title-bar">
                    <h1>Thông tin công nghệ</h1>
                    <span class="description-category">Tin tức, sự kiện khắp nơi về thế giới công nghệ. Bấm vào đây
                            để xem các bài viết mới nhất.</span>
                </div>
                <!-- END_TITLE_BAR -->

                <div class="page-able">
                    <div id="pagination"></div>
                </div>

                <div class="all-post">
                    <table class="table-post">
                        <thead>
                        <tr>
                            <th scope="col" id="click-reset"></th>
                            <th scope="col" class="w60">Tiêu Đề</th>
                            <th scope="col" class="text-right">Người Đăng</th>
                            <th scope="col" class="text-right" id="click-like">Số lượt thích <i
                                    class="fas fa-arrows-alt-v"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row"><img
                                    src="https://photo2.tinhte.vn/data/avatars/s/252/252123.jpg?1549870004"
                                    alt="MinhTriND"></td>
                            <td class="w60"><a href="post">Mỹ cân nhắc đưa công ty làm camera giám sát lớn nhất
                                của
                                Trung Quốc vào "danh sách nghỉ chơi</a></td>
                            <td class="text-right">MinhTriND</td>
                            <td class="text-right">5000</td>
                        </tr>
                        <tr>
                            <td scope="row"><img
                                    src="https://photo2.tinhte.vn/data/avatars/s/252/252123.jpg?1549870004"
                                    alt="MinhTriND"></td>
                            <td class="w60"><a href="">Mỹ cân nhắc đưa công ty làm camera giám sát lớn nhất của
                                Trung Quốc vào "danh sách nghỉ chơi</a></td>
                            <td class="text-right">MinhTriND</td>
                            <td class="text-right">5000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            <!-- END_CONTENT_MAIN -->

            <aside class="col-lg-4">
                <div class="hot">
                    <h3 class="title-aside">Sôi động trong tháng</h3>
                    <div class="list-hot">
                        <a href="">
                            <img src="https://imgproxy3.cdnforo.com/AV41hub6UXMV0R0_lUeQ4KSHUb8d31ae-suY4jSIGeM/rs:fill:144:144:0/plain/http://data.tinhte.vn/data/attachment-files/2019/05/4661345_cover-anh-may-bay.jpg"
                                 alt="image" class="rounded">
                            <span class="title-hot">Mời chia sẻ ảnh chụp qua ô cửa máy bay, tặng Bao da Passport +
                                    Ví sen to + dán da điện thoại</span>
                        </a>
                    </div>
                    <div class="list-hot">
                        <a href="">
                            <img src="https://imgproxy3.cdnforo.com/AV41hub6UXMV0R0_lUeQ4KSHUb8d31ae-suY4jSIGeM/rs:fill:144:144:0/plain/http://data.tinhte.vn/data/attachment-files/2019/05/4661345_cover-anh-may-bay.jpg"
                                 alt="image" class="rounded">
                            <span class="title-hot">Mời chia sẻ ảnh chụp qua ô cửa máy bay, tặng Bao da Passport +
                                    Ví sen to + dán da điện thoại</span>
                        </a>
                    </div>
                    <div class="list-hot">
                        <a href="">
                            <img src="https://imgproxy3.cdnforo.com/AV41hub6UXMV0R0_lUeQ4KSHUb8d31ae-suY4jSIGeM/rs:fill:144:144:0/plain/http://data.tinhte.vn/data/attachment-files/2019/05/4661345_cover-anh-may-bay.jpg"
                                 alt="image" class="rounded">
                            <span class="title-hot">Mời chia sẻ ảnh chụp qua ô cửa máy bay, tặng Bao da Passport +
                                    Ví sen to + dán da điện thoại</span>
                        </a>
                    </div>
                </div>
            </aside>
            <!-- END_ASIDE -->

        </div>
    </div>
</div>
<!-- END_CONTENT -->

<script src="resources/js/category2.js"></script>