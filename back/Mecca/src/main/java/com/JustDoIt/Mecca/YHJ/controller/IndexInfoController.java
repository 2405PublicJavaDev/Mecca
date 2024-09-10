package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.IndexInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/index")
public class IndexInfoController {

    private IndexInfoService indexInfoService;

    public IndexInfoController() {}
    @Autowired
    public IndexInfoController(IndexInfoService indexInfoService) { this.indexInfoService = indexInfoService; }

    @GetMapping("/general")
    public List<Map<String, Object>> getGeneralInfo() {
        List<Map<String, Object>> generalList = indexInfoService.selectGeneralList();
//        generalList.
        System.out.println(generalList);
        return generalList;
    }
}
