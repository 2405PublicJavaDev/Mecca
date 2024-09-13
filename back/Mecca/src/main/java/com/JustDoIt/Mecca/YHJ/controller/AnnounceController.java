package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.AnnounceService;
import com.JustDoIt.Mecca.YHJ.service.SupportService;
import com.JustDoIt.Mecca.YHJ.vo.Announce;
import com.JustDoIt.Mecca.YHJ.vo.Support;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/announce")
public class AnnounceController {

    private AnnounceService announceService;

    public AnnounceController() {}
    @Autowired
    public AnnounceController(AnnounceService announceService) { this.announceService = announceService; }

    @PostMapping("/write")
    public void insertAnnounce(@RequestBody Map<String, String> requestBody, HttpSession session) {
        Announce announce = new Announce();
        announce.setAWriterEmail((String) session.getAttribute("uEmail"));
        announce.setATitle(requestBody.get("aTitle"));
        announce.setAContent(requestBody.get("aContent"));

        announceService.insertAnnounce(announce);
    }

    @GetMapping("/list")
    public List<Map<String, Object>> getSupportList() {
        List<Map<String, Object>> supportList = announceService.getAnnounceList();
        return supportList;
    }
}
