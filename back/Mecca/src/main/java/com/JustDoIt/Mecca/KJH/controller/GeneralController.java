package com.JustDoIt.Mecca.KJH.controller;

import java.sql.Timestamp;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.common.Pagination;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/general")
public class GeneralController {

    private final GeneralService generalService;

    @Autowired
    public GeneralController(GeneralService generalService) {
        this.generalService = generalService;
    }

    @GetMapping("/list")
    public String list(@RequestParam(defaultValue = "1") int currentPage,
                       @RequestParam(required = false) String searchQuery,
                       @RequestParam(defaultValue = "latest") String sortBy,
                       Model model) {

        int totalCount;
        List<General> generalList;

        // 검색어가 있는지 여부에 따라 갯수 계산
        if (searchQuery != null && !searchQuery.isEmpty()) {
            totalCount = generalService.getSearchTotalCount(searchQuery);
        } else {
            totalCount = generalService.getTotalCount();
        }

        // 페이지네이션 설정
        Pagination pagination = new Pagination(totalCount, currentPage);
        int limit = pagination.getBoardLimit();
        int offset = (currentPage - 1) * limit;
        RowBounds rowBounds = new RowBounds(offset, limit);

        // 검색어에 따라 다른 메서드 호출
        if (searchQuery != null && !searchQuery.isEmpty()) {
            generalList = generalService.searchGeneralList(currentPage, sortBy, searchQuery, rowBounds);
        } else {
            generalList = generalService.selectGeneralList(currentPage, sortBy, rowBounds);
        }

        // 모델에 데이터 추가
        model.addAttribute("generalList", generalList);
        model.addAttribute("pagination", pagination);
        model.addAttribute("searchQuery", searchQuery); // 검색 쿼리 유지
        model.addAttribute("sortBy", sortBy); // 정렬 방식 유지

        return "list"; // list.html 템플릿으로 이동
    }

    @GetMapping("/view/{generalNo}")
    public String view(@PathVariable("generalNo") int generalNo, Model model) {

        generalService.incrementViewCount(generalNo);

        General general = generalService.selectGeneralOne(generalNo);
        if (general == null) {
            // 적절한 오류 처리를 할 수 있도록 설정
            return "error"; // 예를 들어, 에러 페이지로 리다이렉션
        }
        List<GeneralComment> comments = generalService.getCommentsByGeneralNo(generalNo); // 댓글 조회 추가

        model.addAttribute("general", general);
        model.addAttribute("comments", comments); // 댓글 목록 모델에 추가

        return "detail";
    }

    @GetMapping("/insert")
    public String insertPage() {
        return "insert";
    }

    @PostMapping("/insert")
    public String insert(General general) {
        generalService.insertGeneral(general);
        return "redirect:/general/list";
    }

    @GetMapping("/update/{generalNo}")
    public String updatePage(@PathVariable("generalNo") int generalNo, Model model) {
        General general = generalService.selectGeneralOne(generalNo);
        model.addAttribute("general", general);
        return "update";
    }

    @PostMapping("/update")
    public String update(General general) {
        generalService.updateGeneral(general);
        return "redirect:/general/view/" + general.getGNo();
    }

    @PostMapping("/delete/{generalNo}")
    public String delete(@PathVariable("generalNo") int generalNo) {
        generalService.deleteGeneral(generalNo);
        return "redirect:/general/list";
    }

    @PostMapping("/comment/insert")
    public String insertComment(GeneralComment comment) {
        comment.setGcWriterEmail("KHuser01@gmail.com");
        //  입력시간이 defalt SYSDATE로 되어 있는데 작동안함
        comment.setGcCreatedDate(new Timestamp(System.currentTimeMillis()));
        generalService.addComment(comment);
        return "redirect:/general/view/" + comment.getGcGNo();
    }

    @PostMapping("/comment/delete/{gcNo}")
    public String deleteComment(@PathVariable("gcNo") int gcNo) {
        generalService.deleteComment(gcNo); // 댓글 삭제
        return "redirect:/general/view/" + gcNo;
    }

    @PostMapping("/comment/update")
    public String updateComment(GeneralComment comment) {
        generalService.updateComment(comment); // 댓글 수정
        return "redirect:/general/view/" + comment.getGcGNo();
    }
}
