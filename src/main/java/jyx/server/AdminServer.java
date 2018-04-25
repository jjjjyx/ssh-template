package jyx.server;

import jyx.common.Code;
import jyx.dao.*;
import jyx.model.*;
import org.apache.commons.lang.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.*;

/**
 * 后台管理服务
 */
@Service
@Transactional(rollbackFor = {RuntimeException.class, IOException.class}, propagation = Propagation.REQUIRED)
public class AdminServer {
//    protected Logger logger = LoggerFactory.getLogger("jyx.task.file");
    @Autowired
    private UserDao userDao;


    private DataDao dataDao = DataDao.getInstance();

    private final String DEFAULT_PASS = "123456";




    public List<UserBean> getAllUser(){
        return this.userDao.loadAll();
    }
    public Code add(UserBean userBean) {
//        userBean.setReleaseTime(new Date());
        userBean.setRegTime(new Date());
        this.userDao.save(userBean);
        return Code.SUCCESS;
    }
    public Code delUser(int id){
        UserBean userBean = this.userDao.get(id);
        if(userBean==null)
            return Code.PARAMETER_FAIL;
        this.userDao.delete(userBean);
        return Code.SUCCESS;
    }

    public Code update(UserBean g){
        UserBean userBean = this.userDao.get(g.getUid());
        if(userBean==null)
            return Code.PARAMETER_FAIL;
        userBean.update(g);
        this.userDao.update(userBean);
        return Code.SUCCESS;
    }

    /**
     * 重置密码
     * @param uids
     * @return
     */
    public Code resetPass(int[] uids){
        for (int uid : uids) {
            UserBean userBean = userDao.get(uid);
            if(userBean==null)
                continue;
            userBean.setPassword(this.DEFAULT_PASS);
            userDao.update(userBean);
        }
        return Code.SUCCESS;
    }

    public Map<String,Object> getData() {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("user_data",this.getAllUser());

//        ServletContext rel= ServletActionContext.getServletContext();
//        File uploadFile = new File(rel.getRealPath( "upload"));
        map.put("data_data",dataDao.loadDataAll());
        map.put("img_data",dataDao.loadImgAll());

        return map;
    }


    public static void main(String[] args) {
//        Calendar calendar=Calendar.getInstance(Locale.CHINA);
//        calendar.setFirstDayOfWeek(Calendar.MONDAY);
//        calendar.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);
//        Date start = calendar.getTime();
//        calendar.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
//        Date end = calendar.getTime();
//        System.out.println(start);
//        System.out.println(end);
        Calendar calendar=Calendar.getInstance(Locale.CHINA);
        System.out.println(calendar.get(Calendar.WEEK_OF_YEAR));
    }


}
