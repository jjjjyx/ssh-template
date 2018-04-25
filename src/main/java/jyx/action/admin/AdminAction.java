package jyx.action.admin;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jyx.action.BaseAction;

import jyx.common.Code;
import jyx.common.ResultUtils;
import jyx.dao.DataDao;
import jyx.model.*;
import jyx.server.AdminServer;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.servlet.ServletContext;
import javax.xml.crypto.Data;
import java.io.File;
import java.util.Date;
import java.util.Map;

/**
 * 管理员 相关操作
 */
@Controller
@ParentPackage("default-package")
@Namespace("/admin")
@Action(value = "",
        results = {@Result(name = "index", location = "/admin/index.jsp")
        }, interceptorRefs = {@InterceptorRef("adminStack")
})
public class AdminAction extends BaseAction {
    @Autowired
    private AdminServer adminServer;

    @Override
    public String execute() throws Exception {
        System.out.println("访问管理员界面");
        return "index";
    }

}
