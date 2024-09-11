package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.MailService;
import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/email")
public class MailController {

    private MailService mailService;
    private UserService userService;

    public MailController() {};
    @Autowired
    public MailController(MailService mailService, UserService userService) { this.mailService = mailService; this.userService = userService; };

    @PostMapping("/verify/findaccount")
    public String sendFindAccountVerifyCode(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        User user = userService.getUser(uEmail, null);
        if (user != null) {
            if (user.getUPassword() != null) {
                String verifyCode = mailService.createString();
                mailService.sendVerifyCode(uEmail, verifyCode);
                return verifyCode;
            } else {
                return "kakao";
            }
        } else {
            return "notUser";
        }
    }

    @PostMapping("/verify/signup")
    public String sendSignUpVerifyCode(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        String verifyCode = mailService.createString();
        mailService.sendVerifyCode(uEmail, verifyCode);
        return verifyCode;
    }

    // 임시 비밀번호 발급
    @PostMapping("/temp")
    public String sendTemporaryPassword(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        String tempPassword = mailService.createString() + "1@";

        // DB에 임시 비밀번호 저장
        User user = new User();
        user.setUEmail(uEmail);
        user.setUPassword(tempPassword);
        userService.updatePassword(user);

        mailService.sendTemporaryPassword(uEmail, tempPassword);
        return uEmail;
    }
}