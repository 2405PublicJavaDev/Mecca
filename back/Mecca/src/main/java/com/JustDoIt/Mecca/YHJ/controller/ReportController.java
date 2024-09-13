package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.ReportService;
import com.JustDoIt.Mecca.YHJ.vo.Report;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/report")
public class ReportController {

    private ReportService reportService;

    public ReportController() {}
    @Autowired
    public ReportController(ReportService reportService) { this.reportService = reportService; }

    @PostMapping("/write")
    public void insertReport(@RequestBody Map<String, String> requestBody, HttpSession session) {
        Report report = new Report();
        report.setRWriterEmail((String) session.getAttribute("uEmail"));
        report.setRObjectNo(requestBody.get("rObjectNo"));
        report.setROption(requestBody.get("rOption"));

        reportService.insertReport(report);
    }

    @GetMapping("/list")
    public List<Map<String, Object>> getReportList() {
        List<Map<String, Object>> reportList = reportService.getReportList();
        return reportList;
    }
}
