package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/api/user")
public class UserController {

    private UserService service;

    public UserController() {}
    @Autowired
    public UserController(UserService service) { this.service = service; }

    @PostMapping("/signup")
    public String signUpUser(@RequestParam("uNickname") String uNickname, @RequestParam("uEmail") String uEmail, @RequestParam("uPassword") String uPassword) {
        User user = new User();
        user.setUNickname(uNickname);
        user.setUEmail(uEmail);
        user.setUPassword(uPassword);
        service.signUpUser(user);
        return "redirect:http://localhost:3000/user/signin";
    }

    @PostMapping("/signin")
    public ResponseEntity<User> signInUser(@RequestBody Map<String, String> requestBody, HttpSession session) {
        User user = new User();
        user.setUEmail(requestBody.get("uEmail"));
        user.setUPassword(requestBody.get("uPassword"));
        user = service.signInUser(user);
        if (user != null) {
            session.setAttribute("uEmail", user.getUEmail());
            session.setAttribute("uNickname", user.getUNickname());
            session.setAttribute("uPassword", user.getUPassword());
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/update")
    public String showUpdateForm(HttpSession session) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        if(uEmail != null) {
            // 이메일로 사용자 정보 조회
            User user = service.selectUserByEmail(uEmail);
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
        String uEmail = (String) session.getAttribute("uEmail");
        if(uEmail != null) {
            // 사용자 정보 조회
            User user = service.selectUserByEmail(uEmail);
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

    @GetMapping("/delete")
    public String deleteUser(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        service.deleteUser(uEmail);
        session.invalidate();
        return "redirect:http://localhost:3000/";
    }
}