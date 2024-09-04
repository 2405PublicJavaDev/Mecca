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
    public String insertUser(@RequestParam("uNickname") String uNickname, @RequestParam("uMail") String uMail, @RequestParam("uPassword") String uPassword) {
        User user = new User();
        user.setUNickname(uNickname);
        user.setUMail(uMail);
        user.setUPassword(uPassword);
        int result = service.insertUser(user);
        if(result > 0) {
            return "forward:/index.html";
        } else {
            return "";
        }
    }

    @GetMapping("/select")
    public String selectUser(@RequestParam("uMail") String uMail, @RequestParam("uPassword") String uPassword, HttpSession session) {
        User user = new User();
        user.setUMail(uMail);
        user.setUPassword(uPassword);
        int result = service.selectUser(user);
        if (user != null) {
            session.setAttribute("uMail", user.getUMail());
            session.setAttribute("uNickname", user.getUNickname());
            session.setAttribute("uPassword", user.getUPassword());
            return "";
        } else {
            return "";
        }
    }

    @GetMapping("/update")
    public String showUpdateForm(HttpSession session) {
        // 세션에서 이메일을 가져옴
        String uMail = (String) session.getAttribute("uMail");
        if(uMail != null) {
            // 이메일로 사용자 정보 조회
            User user = service.selectUserByEmail(uMail);
            if(user != null) {
                return "/update";
            }else {
                return ""; // 사용자 정보 없을 경우 에러
            }
        }else {
            return ""; // 세션에 이메일 없을 경우 에러
        }
    }

    @PostMapping("/update")
    public String updateUser(HttpSession session, @RequestParam("uNickname") String uNickname,
                            @RequestParam("uIntroduce") String uIntroduce) {
        // 세션에서 이메일을 가져옴
        String uMail = (String) session.getAttribute("uMail");
        if(uMail != null) {
            // 사용자 정보 조회
            User user = service.selectUserByEmail(uMail);
            if(user != null) {
                // 업데이트 할 정보 설정
                user.setUNickname(uNickname);
                user.setUIntroduce(uIntroduce);
                // 사용자 정보 업데이트
                int result = service.updateUser(user);
                if(result > 0) {
                    return ""; //업데이트 성공 시 마이페이지 리다렉
                }else {
                    return ""; // 실패 시 에러
                }
            }else {
                return ""; // 사용자 정보 없을 경우 에러
            }
        }else {
            return ""; // 세션에 이메일 없으면 에러
        }
    }

    @PostMapping("/delete")
    public String deleteUser(HttpSession session) {
        String uMail = (String) session.getAttribute("uMail");
        if(uMail != null) {
            // 이메일 사용자 조회
            User user = service.selectUserByEmail(uMail);
            if (user != null) {
                // 사용자 존재하면 삭제
                int result = service.deleteUser(uMail);
                if (result > 0) {
                    // 삭제 성공 시 세션 무효화
                    session.invalidate();
                    return ""; // 성공 시
                }else {
                    return ""; // 삭제 실패 시 에러 페이지
                }
            } else {
                return ""; // 사용자 존재하지 않을 경우 에러페이지
            }
        } else {
            return ""; // 이메일이 없을 경우 에러페이지
        }
    }
}