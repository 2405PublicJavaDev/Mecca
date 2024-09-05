package com.JustDoIt.Mecca.KJH.controller;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
        return "insert";
    }

    @PostMapping("/insert")
    public String insertGeneral(General general) {
        general.setGNickname("Test"); // 테스트용 닉네임 삽입
        System.out.println(general);
        int result = service.insertGeneral(general);
        return "redirect:/general/list"; // 입력 후 목록으로 리다이렉트
    }

    @GetMapping("/detail/{generalNo}")
    public String selectGeneralOne(@PathVariable("generalNo") Integer generalNo, Model model) {
        General general = service.selectGeneralOne(generalNo);
        if (general != null) {
            model.addAttribute("general", general);
            return "detail"; // 상세보기 페이지
        } else {
            return "redirect:/general/list"; // 상세정보를 찾을 수 없는 경우 목록으로 리다이렉트
        }
    }


    @GetMapping("/list")
    public String selectGeneralList(Model model) {
        List<General> general = service.selectGeneralList();
        model.addAttribute("generalList", general);
        return "list"; // 게시글 목로 페이지
    }

    @GetMapping("/update/{generalNo}")
    public String updateGeneral (@PathVariable("generalNo") Integer generalNo, Model model){
        General general = service.selectGeneralOne(generalNo);
        model.addAttribute("general", general);
        return "update";
    }

    @PostMapping("/update")
    public String updateGeneral (@ModelAttribute General general){
        int result = service.updateGeneral(general);
        if (result > 0) {
            System.out.println("수정 성공 ");
        } else {
            System.out.println("수정 실패 ");;
        }
        return "redirect:/general/detail/" + general.getGNo(); // 수정 후 상세페이지로 리다이렉트
    }

    @PostMapping("/delete/{id}")
    public String deleteGeneral ( @PathVariable("id") int id){
        int result = service.deleteGeneral(id);
        if (result > 0) {
            System.out.println("삭제 성공 ");
        } else {
            System.out.println("삭제 실패");
        }
        return "redirect:/general/list";
    }
}

