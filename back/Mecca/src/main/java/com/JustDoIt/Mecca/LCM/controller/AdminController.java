package com.JustDoIt.Mecca.LCM.controller;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.MailService;
import com.JustDoIt.Mecca.LCM.service.ReportService;
import com.JustDoIt.Mecca.LCM.vo.Report;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
//@Controller
@RequestMapping("/api/admin")
public class AdminController {

    private AdminService adminService;
    private MailService mailService;
    private ReportService supportService;
    private ReportService reportService;
    private GeneralService generalService;

    public AdminController() {}
    @Autowired
    public AdminController(AdminService adminService, MailService mailService, ReportService supportService, ReportService reportService,GeneralService generalService) {
        this.adminService = adminService;
        this.mailService = mailService;
        this.supportService = supportService;
        this.reportService = reportService;
        this.generalService = generalService;
    }

    @GetMapping("/report")
    public String showreport() {

//        Timestamp currentTimestamp1 = new Timestamp(System.currentTimeMillis());
//        Timestamp currentTimestamp2 = Timestamp.valueOf("2024-09-20 12:00:00");
//        int comparisonResult = currentTimestamp2.compareTo(currentTimestamp1);
//        System.out.println("comparisonResult: " + comparisonResult);
        return "LCM/report";
    }
    @PostMapping("/report")
    public String reportdate(@RequestParam("report") String report
                            ,@RequestParam("reporttext") String reporttext,
                             HttpSession session) {

        if(report.equals("기타")){
            report=reporttext;
        }
        String noticeimpo="자유:123";
        Report redate =new Report();
        redate.setROption(report);
        redate.setRObjectNo(noticeimpo);
        redate.setRWriterEmail((String) session.getAttribute("uEmail"));
        int result=adminService.insertreport(redate);
        return "LCM/report";
    }


//    @RequestParam("uEmail") String uEmail, @RequestParam("punishmentPeriod")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME
    @PostMapping("/punishment")
    public String updateUserStatus(@RequestBody Map<String, String> requestBody) throws MessagingException {
        String uEmail = requestBody.get("uEmail");
        String punishmentPeriod = requestBody.get("punishmentPeriod");
        adminService.updateUserStatus(uEmail, Date.valueOf(punishmentPeriod));
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
    @PostMapping("/report/delete")
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
        report.setRObjectNo((reportData.get("rObjectNo").toString()));
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

    @GetMapping("/report/delete")
    public String showdelete(Model model){


        List<Report> rList=adminService.selectlist();

        model.addAttribute("rList", rList);

        return "LCM/delete";
    }
    @GetMapping("/report/detail/{reportno}")
    public String showdetail(Model model,@PathVariable("reportno") int reportno){
        Report rdate=adminService.selectOne(reportno);
        String noticeim[]=rdate.getRObjectNo().split(":");

        int noticeNo= Integer.parseInt(noticeim[1]);
        String notice = "";
        String writer ="";
        //게시판 조회
        if(noticeim[0].equals("자유")){
            General general=adminService.selectnotice(noticeNo);
            if(general==null){
                notice="";
                writer="";
            }else {
                notice = general.getGContent();
                writer = general.getGWriterEmail();
            }
        }else if(noticeim[0].equals("매칭")){
            Matching matching=adminService.selectmatching(noticeNo);
            if(matching==null){
                notice="";
                writer="";
            }else {
                notice=matching.getMContent();
                writer=matching.getMWriterEmail();
            }

        }else if(noticeim[0]=="댓글"){
            GeneralComment comment=adminService.selectcomment(noticeNo);
            if(comment==null){
                notice="";
                writer="";
            }else {
                notice=comment.getGcContent();
                writer=comment.getGcWriterEmail();
            }

        }

        model.addAttribute("rdate", rdate);
        model.addAttribute("notice", notice);
        model.addAttribute("writer", writer);
        return "LCM/detail";
    }
    @GetMapping("/punishment/{email}/{datetime}/{status}/{reportno}")
    public String punishmentuser(@PathVariable("datetime") LocalDate datetime,
                                   @PathVariable("email") String email,
                                 @PathVariable("status") int status,
                                 @PathVariable("reportno")int reportno) throws MessagingException {
        String uEmail = email;
        Date punishmentPeriod = Date.valueOf(datetime);
        adminService.updateUserStatus(uEmail, punishmentPeriod);

        if(status==1) {
            Report rdate = adminService.selectOne(reportno);
            String noticeim[] = rdate.getRObjectNo().split(":");
            int noticeNo = Integer.parseInt(noticeim[1]);
            //삭제
            if (noticeim[0].equals("자유")) {
                generalService.deleteGeneral(noticeNo);
            } else if (noticeim[0].equals("매칭")) {
                adminService.deleteMatching(noticeNo);
            }else if(noticeim[0]=="댓글"){
                generalService.deleteComment(noticeNo);
            }
        }
        adminService.updatereportstatus(reportno);
        return "redirect:/api/admin/report/delete";
    }
}