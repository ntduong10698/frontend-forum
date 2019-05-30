<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<footer>
    <div class="infor">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <span class="footer-title">Address</span>
                    <ul class="footer-list">
                        <li class="footer-element">Address: Hà Nội, Việt nam</li>
                        <li class="footer-element">
                            <a href="">Phone: +8499 999 999</a>
                        </li>
                        <li class="footer-element">
                            <a href="">Email: tinhtuong@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <span class="footer-title">Quick Links</span>
                    <ul class="footer-list">
                        <li class="footer-element">
                            <a href="home">Home</a>
                        </li>
                        <li class="footer-element">
                            <a href="#search">Search</a>
                        </li>
                        <li class="footer-element">
                            <a href="#content">Content</a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <span class="footer-title">Connect With Social</span>
                    <ul class="footer-list social">
                        <li class="footer-element e-social">
                            <a href="https://www.facebook.com/" target="_brach">
                                <img src="https://img.icons8.com/color/48/000000/facebook.png">
                            </a>
                        </li>
                        <li class="footer-element e-social">
                            <a href="https://www.youtube.com/" target="_brach">
                                <img src="https://img.icons8.com/color/48/000000/youtube-squared.png"
                                     target="_brach">
                            </a>
                        </li>
                        <li class="footer-element e-social">
                            <a href="https://mail.google.com/mail/u/0/" target="_brach">
                                <img src="https://img.icons8.com/color/48/000000/gmail.png">
                            </a>
                        </li>
                        <li class="footer-element e-social">
                            <a href="https://twitter.com/?lang=vi" target="_brach">
                                <img src="https://img.icons8.com/color/48/000000/twitter-squared.png">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="copy-right">
        <span class="text-copyright">© 2019 Tinh Tuong Home. All rights reserved | Design by Tinh Tuong.</span>
    </div>
</footer>
<!-- END_FOOTER -->

<div class="jump-top">
    <a href="#header">
        <i class="fas fa-arrow-up"></i>
    </a>
</div>

<%--//Plugin Comment Facebook--%>


<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '465026337578420',
            xfbml      : true,
            version    : 'v3.3'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>