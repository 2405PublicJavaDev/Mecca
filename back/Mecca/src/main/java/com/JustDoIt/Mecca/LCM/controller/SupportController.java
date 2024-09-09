package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.MailService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SupportController {
    private final MailService mailService;

    public SupportController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/respondToInquiry")
    public String respondToInquiry(@RequestBody Map<String, String> requestBody) {
        String recipientEmail = requestBody.get("recipientEmail");
        String subject = requestBody.get("subject");
        String content = requestBody.get("content");

        if (recipientEmail != null && subject != null && content != null) {
            mailService.sendResponseEmail(recipientEmail, subject, content);
            return "응답이 전송되었습니다.";
        } else {
            return "필수 정보가 누락되었습니다.";
        }
    }
}

