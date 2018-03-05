
<%@ page contentType="text/html;charset=UTF-8" %>
<%--<script src="//cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>--%>
<%--<script type="text/javascript" src="${path}/static/${moduleName}.js"></script>--%>
<c:if test="${loading}">
    <div id="preloader">
        <div id="preloader-inner" class="battery"></div>
    </div>
</c:if>
<script >
    const config = {
        remote:{
            API_SERVER:'',
            root:'${path}',
        }
    }
    window.config = config
</script>
<script src="${path}/js/lib/require.min.js" data-main="${moduleName}.js"></script>