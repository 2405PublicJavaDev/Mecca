package com.JustDoIt.Mecca.KJH.controller;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/general")
public class GeneralController {

    private GeneralService service;

    public GeneralController() {}
    @Autowired
    public GeneralController(GeneralService service) { this.service = service; }

    @PostMapping("/insert")
    public String insertGeneral() {
        int result = service.insertGeneral();
        return "";
    }

    @PostMapping("/select")
    public String selectGeneral() {
        int result = service.selectGeneral();
        return "";
    }

    @PostMapping("/update")
    public String updateGeneral() {
        int result = service.updateGeneral();
        return "";
    }

    @PostMapping("/delete")
    public String deleteGeneral() {
        int result = service.deleteGeneral();
        return "";
    }
}
