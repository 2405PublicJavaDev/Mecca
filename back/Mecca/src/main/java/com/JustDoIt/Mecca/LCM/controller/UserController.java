package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;
    private AdminService adminService;

    public UserController() {}
    @Autowired
    public UserController(UserService userService, AdminService adminService) { this.userService = userService; this.adminService = adminService; }

    @PostMapping("/signup")
    public User signUpUser(@RequestBody Map<String, String> requestBody) {
        String uNickname = requestBody.get("uNickname");
        String uEmail = requestBody.get("uEmail");
        String uPassword = requestBody.get("uPassword");

        User getUser = userService.getUser(uEmail, uNickname);
        if (getUser != null) {
            if (getUser.getUEmail() != null || getUser.getUNickname() != null) {
                return getUser;
            }
        }

        User user = new User();
        user.setUNickname(uNickname);
        user.setUEmail(uEmail);
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
    public String showUpdateForm(HttpSession session) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        if(uEmail != null) {
            // 이메일로 사용자 정보 조회
            User user = userService.getUser(uEmail, null);
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
    public String updateUser(HttpSession session, @RequestBody Map<String, String> requestBody) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        String uNickname= requestBody.get("uNickname");
        String uIntroduce = requestBody.get("uIntroduce");
        if(uEmail != null) {
            // 사용자 정보 조회
            User user = userService.getUser(uEmail, null);
            if(user != null) {
                // 업데이트 할 정보 설정
                user.setUNickname(uNickname);
                user.setUIntroduce(uIntroduce);
                // 사용자 정보 업데이트
                int result = userService.updateUser(user);
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
        userService.deleteUser(uEmail);
        session.invalidate();
        return "redirect:http://localhost:3000/";
    }

    @GetMapping("/signout")
    public String signOutUser(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        session.invalidate();
        return "redirect:http://localhost:3000/";
    }

    @PostMapping("/changePw")
    public String changePassword(HttpSession session, @RequestBody Map<String, String> requestBody) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        String currentPassword = requestBody.get("currentPassword");
        String newPassword = requestBody.get("newPassword");
        // 현재 비밀번호와 새 비밀번호 확인
        User user = userService.getUser(uEmail, null);
        if (!user.getUPassword().equals(currentPassword)) {
            return "현재 비밀번호가 일치하지 않습니다.";
        }
        // 비밀번호 업데이트
        user.setUPassword(newPassword);
        int result = userService.updatePassword(user);
        if (result > 0) {
            return "비밀번호가 성공적으로 변경되었습니다.";
        } else {
            return "비밀번호 변경에 실패했습니다.";
        }
    }
}