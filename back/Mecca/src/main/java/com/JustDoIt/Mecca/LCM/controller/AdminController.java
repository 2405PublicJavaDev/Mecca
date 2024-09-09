package com.JustDoIt.Mecca.LCM.controller;


import com.JustDoIt.Mecca.LCM.service.AdminService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Controller
@RequestMapping("/api/admin")
public class AdminController {

    private AdminService aService;

    public AdminController(AdminService aService){

        this.aService = aService;
    }

    @GetMapping("/report")
    public String showreport(){

//        Timestamp currentTimestamp1 = new Timestamp(System.currentTimeMillis());
//        Timestamp currentTimestamp2 = Timestamp.valueOf("2024-09-20 12:00:00");
//        int comparisonResult = currentTimestamp2.compareTo(currentTimestamp1);
//        System.out.println("comparisonResult: " + comparisonResult);
        return "LCM/report";
    }
    @PostMapping("/report")
    public String updateUserStatus(@RequestParam("uEmail") String uEmail, @RequestParam("reportdate")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime reportdate) {
        int result = aService.updateUserStatus(uEmail, Timestamp.valueOf(reportdate));
        return "LCM/report";
    }
}
