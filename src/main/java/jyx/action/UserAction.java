package jyx.action;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jyx.common.Code;
import jyx.common.ResultUtils;
import jyx.model.*;
import jyx.server.UserServer;
import org.apache.struts2.convention.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.servlet.ServletOutputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Map;

@Controller
@ParentPackage("default-package")
@Namespace("/")
@InterceptorRefs(@InterceptorRef(value = "userStack"))
@Results({
        @Result(name = "hello", location = "./hello.jsp"),
        @Result(name = "noUser", location = "./",type = "redirectAction"),

})
public class UserAction extends BaseAction {
    protected Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private UserServer userServer;


    @Action(value = "hello")
    public String execute() throws Exception {
        ServletOutputStream out = response.getOutputStream();
        out.print("用户相关功能");
        return "index";
    }
}
