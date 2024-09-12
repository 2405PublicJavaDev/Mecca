package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.SupportService;
import com.JustDoIt.Mecca.YHJ.vo.Support;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/support")
public class SupportController {

    private SupportService supportService;

    public SupportController() {}
    @Autowired
    public SupportController(SupportService supportService) { this.supportService = supportService; }

    @PostMapping("/write")
    public void insertSupport(@RequestBody Map<String, String> requestBody, HttpSession session) {
        Support support = new Support();
        support.setSWriterEmail((String) session.getAttribute("uEmail"));
        support.setSTitle(requestBody.get("uTitle"));
        support.setSContent(requestBody.get("uContent"));

        supportService.insertSupport(support);
    }

    @GetMapping("/list")
    public List<Map<String, Object>> getSupportList() {
        List<Map<String, Object>> supportList = supportService.getSupportList();
        return supportList;
    }
}
