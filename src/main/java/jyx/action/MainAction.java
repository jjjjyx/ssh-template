package jyx.action;


import jyx.common.Code;
import jyx.common.ResultUtils;

//import jyx.model.user.UserBean;
import jyx.model.UserBean;
import jyx.server.UserServer;
import org.apache.struts2.convention.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Date;
import java.util.HashMap;

@Controller
@ParentPackage("default-package")
@Namespace("/")
@Results({
        @Result(name = "login", location = "./login.jsp"),
        @Result(name = "index", location = "./index.jsp"),
        @Result(name = "error", location = "./error.jsp")
})
public class MainAction extends BaseAction {
    private Exception exception;
    protected Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private UserServer userServer;
    @Override
    @Action(value = "index")
    public String execute() throws Exception {
        logger.info("欢迎访问 xx 系统 v{}", 1.0);

        UserBean user = (UserBean) session.getAttribute("user");

        return "index";
    }




    public String errorJson() {
//        exception.printStackTrace();
        UserBean user = (UserBean) session.getAttribute("user");

        if (logger.isErrorEnabled()) {
            String action = request.getRequestURI();
            if (user == null) {
                logger.error("execution action [{}] => {} error: {}", action, request.getQueryString(), exception.getMessage(), exception);
            } else {
                logger.error("user [{}] execution action [{}] => {} error: {}", user.getUsername(), action, request.getQueryString(), exception.getMessage(), exception);
            }
        }
        data = new HashMap<String, Object>();
        // isSendErrorDetails() ? exception.getMessage() :
        ResultUtils.set(data, Code.ERROR);
        return JSON;
    }

    public String error403() {
        data = new HashMap<String, Object>();
        response.setStatus(403);
        ResultUtils.set(data, Code.LIMITER_ERROR);
        return JSON;
    }

    public Exception getException() {
        return exception;
    }

    public void setException(Exception exception) {
        this.exception = exception;
    }


}
