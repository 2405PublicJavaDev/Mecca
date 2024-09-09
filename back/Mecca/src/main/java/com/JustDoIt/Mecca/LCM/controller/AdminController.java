package com.JustDoIt.Mecca.LCM.controller;


import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.service.RatingService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
}
