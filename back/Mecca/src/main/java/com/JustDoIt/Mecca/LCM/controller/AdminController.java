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

        return "LCM/report";
    }
    @PostMapping("/report")
    public String reportID(@RequestParam("reportid") String reportid
                           ,@RequestParam("reportdate")@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    LocalDateTime reportdate
    ){
        System.out.println(reportid);
        System.out.println(reportdate);
        int result = aService.reportid(reportid, Timestamp.valueOf(reportdate));
        return "LCM/report";
    }
}
