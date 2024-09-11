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

    @ResponseBody
    @PostMapping("/verify")
    public String sendVerifyCode(@RequestBody Map<String, String> requestBody) throws MessagingException {
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
        return "임시 비밀번호가 성공적으로 발급되었습니다.";
    }
}