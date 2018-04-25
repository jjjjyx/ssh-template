<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@include file="../assets/base/base.jsp" %>
<c:set var="moduleName" value="admin"></c:set>
<c:set var="cssPath" value="admin-index"></c:set>
<c:set var="defaultjs" value="admin/index"></c:set>
<%--<c:set var="loading" value="false"></c:set>--%>
<html>
<head>
    <%@include file="../assets/base/header.jsp" %>
</head>
<body class="theme-white">
<div class="am-g tpl-g" id="app">
    <!-- 头部 -->
    <header>
        <!-- logo -->
        <div class="am-fl tpl-header-logo">
            <a href="javascript:;">
                xx 系统-后台管理
            </a>
        </div>
        <!-- 右侧内容 -->
        <div class="tpl-header-fluid">
            <!-- 其它功能-->
            <div class="am-fr tpl-header-navbar">
                <ul>
                    <!-- 欢迎语 -->
                    <li class="am-text-sm tpl-header-navbar-welcome">
                        <a href="javascript:;">欢迎你, <span> ${user.username}</span> </a>
                    </li>
                    <!-- 退出 -->
                    <li class="am-text-sm">
                        <a href="../sign!out">
                            <span class="am-icon-sign-out"></span> 退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </header>

    <!-- 侧边导航栏 -->
    <div class="left-sidebar">
        <!-- 用户信息 -->
        <div class="tpl-sidebar-user-panel">
            <div class="tpl-user-panel-slide-toggleable">
                <div class="tpl-user-panel-profile-picture">
                    <img src="${path}/assets/img/user (${user.uid%28}).png" alt="">
                </div>
                <span class="user-panel-logged-in-text">
              <i class="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>
              ${user.username}
          </span>
                <%--<a href="javascript:;" class="tpl-user-panel-action-link"> <span class="am-icon-pencil"></span> 账号设置</a>--%>
            </div>
        </div>

        <!-- 菜单 -->
        <ul class="sidebar-nav">
            <li class="sidebar-nav-heading">Function <span class="sidebar-nav-heading-info"> 功能</span></li>
            <li class="sidebar-nav-link">
                <router-link to="/" tag="a"> <i class="am-icon-home sidebar-nav-link-logo"></i> 菜单一</router-link>
            </li>

        </ul>
    </div>


    <!-- 内容区域 -->
    <div class="tpl-content-wrapper">
        <div class="container-fluid am-cf">
            <div class="row">
                <div class="am-u-sm-12 am-u-md-12 am-u-lg-9">
                    <div class="page-header-heading"><span class="am-icon-home page-header-heading-icon"></span> xxx 系统-管理 </div>
                    <p class="page-header-description">描述</p>
                </div>
                <div class="am-u-lg-3 tpl-index-settings-button">
                    <%--<button type="button" class="page-header-button"><span class="am-icon-paint-brush"></span> 设置</button>--%>
                </div>
            </div>
        </div>
        <router-view class="main row-content am-cf"></router-view>
    </div>
</div>
</div>
    <%@include file="../assets/base/footer.jsp" %>
<%
    Object c = request.getAttribute("admin.data");
    out.print("<script>"+c+"</script>");
%>
</body>
</html>

