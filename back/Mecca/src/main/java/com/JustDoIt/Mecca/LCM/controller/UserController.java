package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Map;


//@Controller // 테스트용 껄껄
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService service;

    public UserController() {}
    @Autowired
    public UserController(UserService service) { this.service = service; }

    @PostMapping("/signup")
    public ResponseEntity<User> signUpUser(@RequestBody Map<String, String> requestBody) {
        String uNickname = requestBody.get("uNickname");
        String uEmail = requestBody.get("uEmail");
        String uPassword = requestBody.get("uPassword");

        User getUser = service.getUser(uEmail, uNickname);
        if (getUser != null) {
            if (getUser.getUEmail() != null || getUser.getUNickname() != null) {
                return ResponseEntity.ok(getUser);
            }
        }

        User user = new User();
        user.setUNickname(uNickname);
        user.setUEmail(uEmail);
        user.setUPassword(uPassword);
        service.signUpUser(user);
        return null;
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
            User user = service.getUser(uEmail, null);
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
            User user = service.getUser(uEmail, null);
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

    @GetMapping("/signout")
    public String signOutUser(HttpSession session) {
        String uEmail = (String) session.getAttribute("uEmail");
        session.invalidate();
        return "redirect:http://localhost:3000/";
    }

    @PostMapping("/changePw")
    public ResponseEntity<String> changePassword(HttpSession session, @RequestBody Map<String, String> requestBody) {
        // 세션에서 이메일을 가져옴
        String uEmail = (String) session.getAttribute("uEmail");
        String currentPassword = requestBody.get("currentPassword");
        String newPassword = requestBody.get("newPassword");
        String newPasswordConfirm = requestBody.get("newPasswordConfirm");
        if (uEmail == null) {
            return ResponseEntity.badRequest().body("세션에 이메일이 없습니다.");
        }
        // 현재 비밀번호와 새 비밀번호 확인
        User user = service.getUser(uEmail, null);
        if (user == null || !user.getUPassword().equals(currentPassword)) {
            return ResponseEntity.badRequest().body("현재 비밀번호가 일치하지 않습니다."); // 이거 필요 없죠져져죠져죠?? ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ ㅋ 
        }
        if (!newPassword.equals(newPasswordConfirm)) {
            return ResponseEntity.badRequest().body("새 비밀번호 확인이 일치하지 않습니다."); // 어차피 지워질 얘들 
        }
        // 비밀번호 업데이트
        user.setUPassword(newPassword);
        int result = service.updatePassword(user);
        if (result > 0) {
            return ResponseEntity.ok("비밀번호가 성공적으로 변경되었습니다."); // 가여워라 ㅋ ㅋ ㅋ ㅋ  사실은
        } else {
            return ResponseEntity.status(500).body("비밀번호 변경에 실패했습니다."); // 하나도 안 가여움 ㅋ ㅋ ㅋ ㅋㅋ  내가 제일 가여움 ㅋ  ㅋ ㅋㅋ  ㅋㅋ
        }
    }
}






























