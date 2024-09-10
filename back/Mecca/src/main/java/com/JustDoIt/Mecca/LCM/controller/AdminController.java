package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.MailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private AdminService adminService;
    private MailService mailService;

    public AdminController() {}
    @Autowired
    public AdminController(AdminService adminService, MailService mailService) {
        this.adminService = adminService;
        this.mailService = mailService;
    }

    @GetMapping("/report")
    public String showreport() {

//        Timestamp currentTimestamp1 = new Timestamp(System.currentTimeMillis());
//        Timestamp currentTimestamp2 = Timestamp.valueOf("2024-09-20 12:00:00");
//        int comparisonResult = currentTimestamp2.compareTo(currentTimestamp1);
//        System.out.println("comparisonResult: " + comparisonResult);
        return "LCM/report";
    }
//    @RequestParam("uEmail") String uEmail, @RequestParam("punishmentPeriod")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME
    @PostMapping("/punishment")
    public String updateUserStatus(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        String punishmentPeriod = requestBody.get("punishmentPeriod");
        adminService.updateUserStatus(uEmail, Timestamp.valueOf(punishmentPeriod));
        mailService.sendPunishmentEmail(uEmail, punishmentPeriod);
        return "LCM/report";
    }

    @PostMapping("/support")
    public String respondToSupport(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        String subject = requestBody.get("subject");
        String content = requestBody.get("content");

        if (uEmail != null && subject != null && content != null) {
            mailService.sendResponseEmail(uEmail, subject, content);
            return "응답이 전송되었습니다.";
        } else {
            return "필수 정보가 누락되었습니다.";
        }
    }
}