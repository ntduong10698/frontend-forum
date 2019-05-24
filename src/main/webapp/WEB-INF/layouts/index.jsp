<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="vn">
<head>
    <%@include file="../library/library_css.jsp" %>
    <title>Title</title>
    <link rel="stylesheet" href="resources/css/pagination.css">
</head>
<body>
    <tiles:insertAttribute name="header"/>
    <tiles:insertAttribute name="body"/>
    <tiles:insertAttribute name="footer"/>
    <%@include file="../library/library_js.jsp"%>
    <script src="resources/js/pagination.js"></script>
</body>
</html>
