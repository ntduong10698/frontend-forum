<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<link rel="stylesheet" href="resources/css/login.css">
<script src="resources/js/ajax/ajax_login.js"></script>
<div class="content" id="content">
    <div class="container">
        <h3>Đăng Nhập</h3>
        <div class="login">
            <div class="form-group">
                <label>Email address:</label>
                <input class="form-control" type="text" placeholder="Tên đăng nhập" id="login-email">
            </div>
            <div class="form-group">
                <label>Password:</label>
                <input class="form-control" type="password" placeholder="Mật khẩu" id="login-pass">
            </div>
            <div class="end-login">
                <div class="btn btn-primary" id="btn-login">Đăng Nhập</div>
                <a href="register">Đăng ký?</a>
            </div>
        </div>
    </div>
</div>
<!-- END_CONTENT -->
