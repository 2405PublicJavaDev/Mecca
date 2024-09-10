package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.MailService;
import com.JustDoIt.Mecca.LCM.service.ReportService;
import com.JustDoIt.Mecca.LCM.vo.Report;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private AdminService adminService;
    private MailService mailService;
    private ReportService supportService;
    private ReportService reportService;

    public AdminController() {}
    @Autowired
    public AdminController(AdminService adminService, MailService mailService, ReportService supportService, ReportService reportService) {
        this.adminService = adminService;
        this.mailService = mailService;
        this.supportService = supportService;
        this.reportService = reportService;
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

    // 뇌 빠진 코드 진자 멍 열받는다 신고글 삭제 만들엇ㅅ넹
    @GetMapping("/report/delete")
    public String deleteReport(HttpSession session) {
        String rWriterEmail = (String) session.getAttribute("rWriterEmail");
        supportService.deleteReport(rWriterEmail);
        return "신고된 게시물이 삭제되었습니다.";
    }

    @PostMapping("/report/submit")
    public String submitReport(@RequestBody Map<String, Object> reportData) {
        System.out.println("Report Data: " + reportData);

        Report report = new Report();
        report.setRWriterEmail((String) reportData.get("rWriterEmail"));
        report.setRObjectNo(Integer.parseInt(reportData.get("rObjectNo").toString()));
        report.setROption((String) reportData.get("rOption"));

        // 이메일이 null인 경우에 대한 체크
        System.out.println("작성자 이메일: " + report.getRWriterEmail());

        report.setRCreatedDate(new Timestamp(System.currentTimeMillis()));
        int result = reportService.addReport(report);

        if (result > 0) {
            return "신고가 성공적으로 등록되었습니다.";
        } else {
            return "신고 등록에 실패했습니다.";
        }
    }
}