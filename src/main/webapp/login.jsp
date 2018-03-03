<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@include file="./assets/base.jsp" %>
<c:set var="moduleName" value="sign"></c:set>
<html>
<head>
    <%@ page contentType="text/html;charset=UTF-8" %>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>登录 - 蓝鲨数据</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" rel="shortcut icon"/>
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link href="${path}/assets/lib/amazeui.min.css" rel="stylesheet">
    <link href="${path}/assets/lib/animate.min.css" rel="stylesheet">
    <link href="${path}/assets/scss/sign.css" rel="stylesheet">

</head>
<body>
<app id="app">
    <div class="form-wrapper">
        <div class="logo">
            <img src="assets/img/1.png" alt="">
            <p class="text">
                抵制不良数据，拒绝盗版数据<br>
                注意保护数据，谨防数据泄露<br>
                适度处理益脑，沉迷处理伤身<br>
                合理安排时间，享受健康生活<br>
                    <span class="advice">
                        ---管理员的忠告<br>
                        by: <a>捞鱼王</a>
                    </span>
            </p>
            <%-- 想成为捞鱼王吗？先要的话就给你好了，去找吧。我吧全部的鱼都放在那里了
             富とみ 名声めいせい 力ちから,この世(よ)の 全(すべ)てを 手(て)に 入(い)れた 男(おとこ),(海贼王)かいぞくおうくおう,GOL D ROJAR(ご-るどろじゃ-)
彼(かれ)の 死际(しにぎわ)に 放(はな)った 一言(ひとこと)は,人人(ひとびと)を 海(うみ)へ 驱(か)り立(た)てた
俺(おれ)の 财宝(ざいほう)か? 欲(ほ)しけりゃ くれてやる.探(さが)せ!この世(よ)の 全(すべ)てを そこに 置(お)いてきた--%>
        </div>
        <div class="form-panel">
            <ol class="am-breadcrumb am-breadcrumb-slash am-text-default">
                <li @click="form = 'in-form'" :class="{'am-active':form=='in-form'}">sign in</li>
                <li @click="form = 'up-form'" :class="{'am-active':form=='up-form' || form == 'info-form'}">sign up</li>
            </ol>
            <component :is="form" <c:if test="${sessionScope.errorCount>=3}">:show-code="true"</c:if>>
                <c:if test="${user!=null}">${user.email}</c:if>
                <%--<c:if test="${sessionScope.errorCount>=3}">--%>
                <%--</c:if>--%>
            </component>
            <%--<in-form></in-form>--%>
        </div>
    </div>
    <div class="account">
        <ul>
            <li><p>Don't have an <a href="#">account?</a></p></li>
            <span>/</span>
            <li><p>Forgot <a href="#">password?</a></p></li>
            <div class="clear"></div>
        </ul>
    </div>
    <%--<div class="copyright"></div>--%>
</app>
<%@include file="./assets/footer.jsp" %>
</body>
</html>
