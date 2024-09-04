package com.JustDoIt.Mecca.KJH.controller;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/general")
public class GeneralController {

    private GeneralService service;

    public GeneralController() {
    }

    @Autowired
    public GeneralController(GeneralService service) {
        this.service = service;
    }

    @GetMapping("/insert")
    public String viewInsertForm() {
        return "general/insert";
    }

    @PostMapping("/insert")
    public String insertGeneral(General general) {
        general.setGNickname("Test"); // 테스트용 닉네임 삽입
        System.out.println(general);
        int result = service.insertGeneral(general);
        return "";
    }

    @GetMapping("/detail/{generalNo}")
    public String selectGeneralOne(@PathVariable("generalNo") Integer generalNo) {
        General general = service.selectGeneralOne(generalNo);
        if (general != null) {
            System.out.println("");
            return "";
        } else {
            System.out.println("");
            return "";
        }
    }

    @GetMapping("/list")
    public String selectGeneralList() {
        List<General> general = service.selectGeneralList();
        if (general != null) {
            System.out.println("");
            return "";
        } else {
            System.out.println("");
            return "";
        }
    }

    @PostMapping("/update")
    public String updateGeneral (@ModelAttribute General general){
        int result = service.updateGeneral(general);
        if (result > 0) {
            System.out.println("수정 성공 ");
            return "";
        } else {
            System.out.println("수정 실패 ");;
            return "";
        }
    }

    @PostMapping("/delete/{id}")
    public String deleteGeneral ( @PathVariable("id") int id){
        int result = service.deleteGeneral(id);
        if (result > 0) {
            System.out.println("삭제 성공 ");
        } else {
            System.out.println("삭제 실패");
        }
        return "";
    }
}

