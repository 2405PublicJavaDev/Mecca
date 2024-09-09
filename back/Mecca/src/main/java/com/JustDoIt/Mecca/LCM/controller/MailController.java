package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.MailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MailController {

    private final MailService mailService;

    @ResponseBody
    @PostMapping("/email")
    public String emailCheck(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String mail = requestBody.get("uEmail");
        String authCode = mailService.sendSimpleMessage(mail);
        return authCode;
    }

    // 임시 비밀번호 발급
    @PostMapping("/temp-password")
    public String sendTemporaryPassword(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String mail = requestBody.get("uEmail");
        String tempPassword = mailService.generateTemporaryPassword();

        // DB에 임시 비밀번호 저장
        mailService.tempPassword(mail, tempPassword);

        String sentPassword = mailService.sendTemporaryPassword(mail, tempPassword);
        return sentPassword;
    }
}