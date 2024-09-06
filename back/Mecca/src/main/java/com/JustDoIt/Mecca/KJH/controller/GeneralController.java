package com.JustDoIt.Mecca.KJH.controller;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Pagination;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/general")
public class GeneralController {

    private PagingService pService;
    private GeneralService service;

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
        general.setGNickname("test");
        service.insertGeneral(general);
        return "redirect:/general/list";
    }

    @GetMapping("/detail/{generalNo}")
    public String selectGeneralOne(@PathVariable("generalNo") Integer generalNo, Model model) {
        General general = service.selectGeneralOne(generalNo);
        if (general != null) {
            model.addAttribute("general", general);
            return "detail";
        } else {
            return "redirect:/general/list";
        }
    }

    @GetMapping("/list")
    public String selectGeneralList(Model model) {
        List<General> generalList = service.selectGeneralList();
        model.addAttribute("generalList", generalList);
        int totalCount=pService.getTotalCount();
        Pagination pn = new Pagination(totalCount,currentPage);
        int limit=pn.getBoardLimit();
        int offset=(currentPage-1)*limit;
        RowBounds rowBounds=new RowBounds(offset,limit);
        List<Matching> mList=pService.selectList(currentPage, rowBounds);



        model.addAttribute("mList",mList);
        model.addAttribute("pn",pn);
        return "list";
    }

    @GetMapping("/update/{generalNo}")
    public String viewUpdateForm(@PathVariable("generalNo") Integer generalNo, Model model) {
        General general = service.selectGeneralOne(generalNo);
        if (general != null) {
            model.addAttribute("general", general);
            return "update";
        } else {
            return "redirect:/general/list";
        }
    }

    @PostMapping("/update")
    public String updateGeneral(@ModelAttribute General general) {
        general.setGNickname("test");
        int result = service.updateGeneral(general);
        // 수정이 성공하면 목록 페이지로 리디렉션
        return result > 0 ? "redirect:/general/list" : "redirect:/general/detail/" + general.getGNo();
    }

    @PostMapping("/delete/{id}")
    public String deleteGeneral(@PathVariable("id") int id) {
        int result = service.deleteGeneral(id);
        return result > 0 ? "redirect:/general/list" : "redirect:/general/list";
    }
}
