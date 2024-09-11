package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private AdminService adminService;

    public UserController() {}
    @Autowired
    public UserController(UserService userService, AdminService adminService) { this.userService = userService; this.adminService = adminService; }

    @PostMapping("/signup/check")
    public User signUpUserCheck(@RequestBody Map<String, String> requestBody) {
        String uEmail = requestBody.get("uEmail");
        String uNickname = requestBody.get("uNickname");

        User getUser = userService.getUser(uEmail, uNickname);
        if (getUser != null) {
            if (getUser.getUEmail() != null || getUser.getUNickname() != null) {
                return getUser;
            }
        }
        return null;
    }

    @PostMapping("/signup/confirm")
    public User signUpUserConfirm(@RequestBody Map<String, String> requestBody) {
        String uEmail = requestBody.get("uEmail");
        String uNickname = requestBody.get("uNickname");
        String uPassword = requestBody.get("uPassword");

        User user = new User();
        user.setUEmail(uEmail);
        user.setUNickname(uNickname);
        user.setUPassword(uPassword);
        userService.signUpUser(user);
        return null;
    }

    @PostMapping("/signin")
    public User signInUser(@RequestBody Map<String, String> requestBody, HttpSession session) {
        User user = new User();
        user.setUEmail(requestBody.get("uEmail"));
        user.setUPassword(requestBody.get("uPassword"));
        user = userService.signInUser(user);
        if (user != null) {
            if (user.getUStatus() == null) {
                session.setAttribute("uEmail", user.getUEmail());
                session.setAttribute("uNickname", user.getUNickname());
                session.setAttribute("uPassword", user.getUPassword());
                return user;
            } else {
                Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());
                int comparisonResult = user.getUStatus().compareTo(currentTimestamp);
                if (comparisonResult <= 0) {
                    adminService.updateUserStatus(user.getUEmail(), null);
                    user = userService.signInUser(user);
                    session.setAttribute("uEmail", user.getUEmail());
                    session.setAttribute("uNickname", user.getUNickname());
                    return user;
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    }

    @GetMapping("/update")
    public User showUpdateForm(HttpSession session) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        User user = userService.getUser(uEmail, null);
        return user;
    }

    @PostMapping("/update")
    public User updateUser(HttpSession session, @RequestBody Map<String, String> requestBody) {
        String uEmail = (String) session.getAttribute("uEmail");
        String uNickname= requestBody.get("uNickname");
        String uIntroduce = requestBody.get("uIntroduce");

        User getUser = userService.getUser(null, uNickname);
        if (getUser != null && !getUser.getUEmail().equals(uEmail)) {
            return getUser;
        }

        User user = new User();
        user.setUEmail(uEmail);
        user.setUNickname(uNickname);
        user.setUIntroduce(uIntroduce);
        userService.updateUser(user);
        return null;
    }

    @GetMapping("/delete")
    public void deleteUser(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        userService.deleteUser(uEmail);
        session.invalidate();
    }

    @GetMapping("/signout")
    public void signOutUser(HttpSession session) {
        session.invalidate();
    }

    @PostMapping("/changepassword")
    public void changePassword(HttpSession session, @RequestBody Map<String, String> requestBody) {
        String uEmail = (String) session.getAttribute("uEmail");
        String uPassword = requestBody.get("uPassword");

        User user = new User();
        user.setUEmail(uEmail);
        user.setUPassword(uPassword);
        userService.updatePassword(user);
    }
}