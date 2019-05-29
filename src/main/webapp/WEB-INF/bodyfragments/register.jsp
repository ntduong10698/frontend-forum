<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/register.css">
<script src="resources/js/ajax/ajax_register.js"></script>
<div class="content" id="content">
    <div class="container">
        <div class="block-signin">
            <div class="signin container">

                <!-- end nav -->
                <div class="titlebar">
                    <div class="title-sign">
                        <h3>Đăng kí</h3>

                    </div>

                </div>
                <form action="" class="form">
                    <div class="input-selection">
                        <dt>
                            <label for="">Tên: </label>
                            <p>bắt buộc</p>

                        </dt>
                        <dl class="name">
                            <input id="name" style="margin-bottom:5px;" pattern="(.{3,15})" required
                                   title="tên phải lớn hơn 3 kí tự và nhỏ hơn 15 kí tự" class="input-1" type="text"
                                   placeholder="" autofocus="autofocus">
                            <p>Đây là tên sẽ xuất hiện trong các bài viết của bạn. Bạn có thể sử dụng tên thật hoặc nick.
                                Bạn không thể thay đổi tên này về sau</p>
                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for="">Email: </label>
                            <p>bắt buộc</p>

                        </dt>
                        <dl>
                            <input id="email" class="input-1" required
                                   pattern="(/[A-Za-z0-9._%+-]{1,20}+@[A-Za-z0-9-]+.+.[A-Z]{2,4}/igm)"
                                   title="Email không tồn tại vui lòng nhập lại email" type="text" placeholder=""
                                   autofocus="autofocus">

                        </dl>
                    </div>
                    <hr>
                    <div class="input-selection">
                        <dt>
                            <label for="">Mật khẩu: </label>
                            <p>bắt buộc</p>

                        </dt>
                        <dl>
                            <input value="" id="password" class="input-1" required pattern="(.{6,100})"
                                   title="Mật khẩu phải lớn hơn 6 kí tự" required type="password" placeholder=""
                                   autofocus="autofocus">

                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for="">Xác nhận mật khẩu: </label>
                            <p>bắt buộc</p>

                        </dt>
                        <dl>
                            <input class="input-1" id="password-v2" required title="Mật khẩu không khớp " type="password"
                                   placeholder="" value="" autofocus="autofocus">
                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for="">Giới tính: </label>
                        </dt>
                        <dl id="gender">
                            <input class="input-check-male" name="nam" type="radio" value="1"> Nam <br>
                            <input class="input-check-male" name="nam" type="radio" autofocus="autofocus" value="0"> Nữ <br>
                        </dl>
                    </div>
                    <div class="input-selection input-birthday">
                        <dt>
                            <label for="">Ngày sinh: </label>
                            <p>bắt buộc</p>

                        </dt>
                        <dl>
                            <input id="date" type="date" required name="" id="">
                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for="">Số điện thoại: </label>
                            <p>bắt buộc </p>

                        </dt>
                        <dl>
                            <input class="input-1" required id="phoneNumber"
                                   pattern="(^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$)"
                                   title="Số điện thoại này không tồn tại vui lòng nhập lại" type="text" placeholder=""
                                   autofocus="autofocus">

                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for=""> Địa chỉ:</label>


                        </dt>
                        <dl>
                            <input id="address" class="input-1" type="text" placeholder="" autofocus="autofocus">

                        </dl>
                    </div>
                    <div class="input-selection">
                        <dt>
                            <label for="">Công việc: </label>
                        </dt>
                        <dl>
                            <input id="job" class="input-1" type="text" placeholder="" autofocus="autofocus">
                        </dl>
                    </div>

                    <hr>
                    <div class="input-selection robot">
                        <dt>
                            <label for="">Xác Thực: </label>
                        </dt>
                        <dl>
                            <input id="agree" class="input-check-male" type="checkbox" name="agree" value="agree"> Tôi đồng
                            ý
                            với <a href="">điều khoản dịch vụ</a> và <a href="">chính sách quyền riêng tư.</a> <br>
                            <button id="signUp" type="submit" class="btn btn-primary btn-signUp">
                                Đăng kí
                            </button>
                        </dl>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>