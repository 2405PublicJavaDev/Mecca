package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api/user")
public class UserController {

    private UserService service;

    public UserController() {}
    @Autowired
    public UserController(UserService service) { this.service = service; }

    @PostMapping("/insert")
    public String insertUser(@RequestParam("uNickname") String uNickname, @RequestParam("uEmail") String uEmail, @RequestParam("uPassword") String uPassword) {
        User user = new User();
        user.setUNickname(uNickname);
        user.setUEmail(uEmail);
        user.setUPassword(uPassword);
        int result = service.insertUser(user);
        if(result > 0) {
            return "";
        }else {
            return "";
        }
    }

    @GetMapping("/select")
    public String selectUser(@RequestParam("uEmail") String uEmail, @RequestParam("uPassword") String uPassword, HttpSession session) {
        User user = new User();
        user.setUEmail(uEmail);
        user.setUPassword(uPassword);
        int result = service.selectUser(user);
        if (user != null) {
            session.setAttribute("uEmail", user.getUEmail());
            session.setAttribute("uPassword", user.getUPassword());
            return "";
        } else {
            return "";
        }
    }

    @PostMapping("/update")
    public String updateMember() {
        int result = service.updateUser();
        return "";
    }

    @PostMapping("/delete")
    public String deleteUser(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        if(uEmail != null) {
            int result = service.deleteUser(uEmail);
            if(result > 0) {
                session.invalidate();
                return "";
            } else {
                return "";
            }
        } else {
            return "";
        }
    }
}