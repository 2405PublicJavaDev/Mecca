package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.PasswordResetService;
import jakarta.mail.MessagingException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/password")
public class PasswordResetController {

    private final PasswordResetService passwordResetService;

    public PasswordResetController(PasswordResetService passwordResetService) {
        this.passwordResetService = passwordResetService;
    }

    // 1. 비밀번호 재설정 요청 (이메일 입력받음)
    @PostMapping("/forgot")
    public String forgotPassword(@RequestParam String email) throws MessagingException {
        passwordResetService.sendPasswordResetLink(email);
        return "비밀번호 재설정 링크가 이메일로 전송되었습니다.";
    }

    // 2. 비밀번호 재설정 페이지 접근
    @PostMapping("/reset")
    public String resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        if (passwordResetService.resetPassword(token, newPassword)) {
            return "비밀번호가 성공적으로 재설정되었습니다.";
        }
        return "잘못된 링크 또는 만료된 토큰입니다.";
    }
}
