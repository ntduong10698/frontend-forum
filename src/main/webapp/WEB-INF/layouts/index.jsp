<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="vn" style="overflow-x: hidden">
<%--<html lang="vn">--%>
<head>
    <%@include file="../library/library_css.jsp" %>
    <title>Title</title>
    <link rel="stylesheet" href="resources/css/pagination.css">
    <script src="resources/js/ajax/ajax_index.js"></script>
</head>
<body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.3&appId=2232193916845997&autoLogAppEvents=1"></script>
    <tiles:insertAttribute name="header"/>
    <tiles:insertAttribute name="body"/>
    <tiles:insertAttribute name="footer"/>
    <%@include file="../library/library_js.jsp"%>
    <script src="resources/js/pagination.js"></script>
</body>
</html>
