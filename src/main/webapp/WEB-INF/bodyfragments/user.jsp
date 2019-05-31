<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/user.css">
<script src="resources/js/ajax/ajax_user.js"></script>
<div class="content" id="content">
    <div class="container">
        <div class="block-signin">
            <div class="signin container">

                <!-- end nav -->
                <div class="block-content-user">
                    <div class="body-content-user">
                        <div class="container">
                            <div class="row">


                                <div class="content-user-left col-lg-4 col-xs-12 col-md-4">
                                    <div class="info-tk">
                                        <div class="image-user">
                                            <img src="https://photo2.tinhte.vn/data/avatars/l/2579/2579145.jpg?1558660366"
                                                 alt="">
                                        </div>
                                        <div class="name-user">
                                            hieu hieu
                                        </div>
                                    </div>
                                    <!-- end -->

                                    <form action="#" class="info-personal">
                                        <div class="input-infor">
                                            <dt><label for="">Tên</label></dt>
                                            <dl>
                                                <input pattern="(.{3,15})" required
                                                       title="tên phải lớn hơn 3 kí tự và nhỏ hơn 15 kí tự" value=""
                                                       class="input-1" type="text" placeholder="" autofocus="autofocus"
                                                       id="name">
                                            </dl>
                                        </div>
                                        <div class="input-infor">
                                            <dt>
                                                <label for="">
                                                    Email:
                                                </label>

                                            </dt>
                                            <dl>
                                                <input required
                                                       title="Email không tồn tại vui lòng nhập lại email" value=""
                                                       class="input-1" type="text" placeholder="" autofocus="autofocus"
                                                       id="email">
                                            </dl>
                                        </div>
                                        <div class="input-infor">
                                            <dt>
                                                <label for="">Số điện thoại:</label>

                                            </dt>
                                            <dl>
                                                <input required
                                                       pattern="(^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$)"
                                                       title="Số điện thoại này không tồn tại vui lòng nhập lại" value=""
                                                       class="input-1" type="text" placeholder="" autofocus="autofocus"
                                                       id="phoneNumber">
                                            </dl>
                                        </div>
                                        <div class="input-infor">
                                            <dt>
                                                <label for="">Địa chỉ:</label>
                                            </dt>
                                            <dl>
                                                <input value="" class="input-1" type="text" placeholder=""
                                                       autofocus="autofocus" id="address">
                                            </dl>
                                        </div>
                                        <div class="input-infor">
                                            <dt><label for="">Công việc:</label></dt>
                                            <dl>
                                                <input value="" class="input-1" type="text" placeholder=""
                                                       autofocus="autofocus" id="job">
                                            </dl>
                                        </div>
                                        <div class="input-infor">
                                            <dt><label for="">Mô tả:</label></dt>
                                            <dl>
                                                <input value="" class="input-1" type="text" placeholder=""
                                                       autofocus="autofocus" id="infor">
                                            </dl>
                                        </div>

                                        <div class="submit">
                                            <button id="sub_btn" class=" btn-submit btn btn-primary">Submit</button>
                                        </div>
                                        <!-- end info personal -->
                                    </form>


                                </div>
                                <!-- end user left -->
                                <div class="content-user-right col-lg-8 col-xs-12 col-md-8">
                                    <form action="" class="block-status">
                                        <h3>Bài viết</h3>
                                        <button class="btn btn-success" id="create-post"><i class="fa fa-indent" aria-hidden="true"></i> Thêm
                                            bài viết</button>
                                        <dl>
                                            <label for="" style="font-weight: bold; margin-right: 2px">Mã Bài Viết:</label>
                                            <select id="listPostUser" style="width: 45px">
                                                <option value="0">ID</option>
                                            </select>
                                        </dl>
                                        <div class="status-input-infor">
                                            <dt><label for="">Tiêu đề:</label></dt>
                                            <dl>
                                                <input value="" pattern=".{0,500}" title="Tiêu đề không được quá 500 kí tự"
                                                       required class="input-1" type="text" placeholder="" value="" id="title-new-post">
                                            </dl>
                                        </div>
                                        <div class="status-input-infor">
                                            <dt><label for="">Tag:</label></dt>
                                            <dl>
                                                <input value="" title="Tag không được quá 20 kí tự bắt đầu bằng dấu #"
                                                       required class="input-1" type="text" placeholder="" value="" id="tag-new-post">
                                            </dl>
                                        </div>
                                        <div class="status-input-infor">
                                            <dt><label for="">Chủ đề</label></dt>
                                            <dl>

                                                <select name="" id="listBig">
                                                    <option value="0">Chủ đề</option>
                                                </select>
                                            </dl>
                                        </div>

                                        <div id="sample">
                                            <script type="text/javascript"
                                                    src="http://js.nicedit.com/nicEdit-latest.js"></script>
                                            <script type="text/javascript">
                                                //<![CDATA[
                                                bkLib.onDomLoaded(function () {
                                                    new nicEditor({ fullPanel: true }).panelInstance('area2');
                                                    // new nicEditor({ maxHeight: 100 }).panelInstance('area5');
                                                });
                                                //]]>
                                            </script>
                                            <textarea cols="60"  id="area2">
												Some Initial Content was in this textarea
											</textarea>
                                        </div>
                                        <button class="btn btn-danger" id="delete-post" style="float:right"><i class="fas fa-trash-alt"></i> Xóa
                                            bài viết</button>
                                        <button class="btn btn-primary" id="update-post" style="float:left"><i class="fas fa-edit"></i> Sửa
                                            bài viết</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <!-- end user right -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>