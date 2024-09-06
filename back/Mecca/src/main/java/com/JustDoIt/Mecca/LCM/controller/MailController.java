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
}