package jyx.model;

import com.google.gson.annotations.Expose;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

//@Entity
//@Table(name = "fc_user")
public class UserBean implements Bean<UserBean>,Serializable{

    private static final long serialVersionUID = -6285084452897058581L;
    @Id
    @GenericGenerator(name = "idGenerator", strategy = "increment")
    @GeneratedValue(generator = "idGenerator")
    @Expose private int uid;
    /**
     * 基本信息
     */

    @Expose private String username; //z账号
    @Expose private String password;
    @Expose private String nickname;
    @Expose private String sex;
    @Expose private String love;
    @Expose private String email;
    @Expose private String city;
    @Expose private String avatar;
    @Expose private Date regTime; // 注册时间
    @Expose private int integral; // 积分
//    角色
    @Expose private int role;
//    // 角色
//    @ManyToOne(cascade= CascadeType.ALL,fetch= FetchType.EAGER)
//    @JoinColumn(name="role")
//    private Role role;
    /**
     *
      */
//    // 用户参与的活动
//    @ManyToMany(targetEntity=jyx.model.ActivityBean.class,fetch = FetchType.EAGER)
//    //@Cascade(value = {org.hibernate.annotations.CascadeType.ALL})
//    @Cascade(value = {org.hibernate.annotations.CascadeType.DELETE})
//    @JoinTable(name="fc_user_activity" ,joinColumns={@JoinColumn(name= "u_id")},inverseJoinColumns={@JoinColumn (name="a_id")})
//    private Set<ActivityBean> activitys;

    @Override
    public void update(UserBean a) {
        if(a==null) return;
//        this.password = a.getPassword();
        this.nickname = a.getNickname();
        this.sex = a.getSex();
        this.love = a.getLove();
        this.email = a.getEmail();
        this.city = a.getCity();
        this.avatar = a.getAvatar();
//        角色不允许直接修改
//        this.role = a.getRole();
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getLove() {
        return love;
    }

    public void setLove(String love) {
        this.love = love;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Date getRegTime() {
        return regTime;
    }

    public void setRegTime(Date regTime) {
        this.regTime = regTime;
    }

    public int getIntegral() {
        return integral;
    }

    public void setIntegral(int integral) {
        this.integral = integral;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserBean userBean = (UserBean) o;

        return uid == userBean.uid;
    }

    @Override
    public int hashCode() {
        return uid;
    }
}
