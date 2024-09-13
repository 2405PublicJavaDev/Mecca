//package com.JustDoIt.Mecca.KJH.controller;
//
//import java.sql.Timestamp;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import com.JustDoIt.Mecca.KJH.service.GeneralService;
//import com.JustDoIt.Mecca.KJH.vo.General;
//import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
//import com.JustDoIt.Mecca.common.Pagination;
//
//import lombok.extern.slf4j.Slf4j;
//import org.apache.ibatis.session.RowBounds;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;

//@Controller
//@RequestMapping("/general")
//@Slf4j
//public class GeneralController {
//
//    private final GeneralService generalService;
//
//    @Autowired
//    public GeneralController(GeneralService generalService) {
//        this.generalService = generalService;
//    }
//
//    @GetMapping("/list")
//    public String list(@RequestParam(defaultValue = "1") int currentPage,
//                       @RequestParam(required = false) String searchQuery,
//                       @RequestParam(defaultValue = "latest") String sortBy,
//                       Model model) {
//
//        int totalCount;
//        List<General> generalList;
//
//        // 검색어가 있는지 여부에 따라 총 갯수 계산
//        if (searchQuery != null && !searchQuery.isEmpty()) {
//            totalCount = generalService.getSearchTotalCount(searchQuery);
//        } else {
//            totalCount = generalService.getTotalCount();
//        }
//
//        // 페이지네이션 설정
//        Pagination pagination = new Pagination(totalCount, currentPage);
//        int limit = pagination.getBoardLimit();
//        int offset = (currentPage - 1) * limit;
//        Map<String, Object> params = new HashMap<>();
//        params.put("offset", offset);
//        params.put("limit", limit);
//        params.put("searchQuery", searchQuery);
//        params.put("sortBy", sortBy);
//
//        // 검색어에 따라 다른 메서드 호출
//        if (searchQuery != null && !searchQuery.isEmpty()) {
//            generalList = generalService.searchGeneralList(params);
//        } else {
//            generalList = generalService.selectGeneralList(params);
//        }
//
//        // 각 게시물의 댓글 수를 추가로 조회
//        for (General general : generalList) {
//            int commentCount = generalService.getCommentCountByGeneralNo(general.getGNo());
//            general.setGcCount(commentCount); // 게시물 객체에 댓글 수 설정
//        }
//
//        // 모델에 데이터 추가
//        model.addAttribute("generalList", generalList);
//        model.addAttribute("pagination", pagination);
//        model.addAttribute("searchQuery", searchQuery); // 검색 쿼리 유지
//        model.addAttribute("sortBy", sortBy); // 정렬 방식 유지
//
//        return "list"; // list.html 템플릿으로 이동
//    }
//
//    @GetMapping("/view/{generalNo}")
//    public String view(@PathVariable("generalNo") int generalNo, Model model) {
//        generalService.incrementViewCount(generalNo);
//
//        General general = generalService.selectGeneralOne(generalNo);
//        if (general == null) {
//            // 적절한 오류 처리를 할 수 있도록 설정
//            return "error"; // 예를 들어, 에러 페이지로 리다이렉션
//        }
//
//        // 페이지네이션 설정 (댓글의 경우 페이지네이션을 적용할 수도 있습니다)
//        int limit = 10; // 예시로 10개 댓글씩 페이지네이션
//        int offset = 0; // 첫 페이지의 경우 0
//        RowBounds rowBounds = new RowBounds(offset, limit);
//
//        List<GeneralComment> comments = generalService.getCommentsByGeneralNo(generalNo, rowBounds); // 댓글 조회
//
//        model.addAttribute("general", general);
//        model.addAttribute("comments", comments); // 댓글 목록 모델에 추가
//
//        return "detail";
//    }
//
//    @GetMapping("/insert")
//    public String insertPage() {
//        return "insert";
//    }
//
//    @PostMapping("/insert")
//    public String insert(General general) {
//        generalService.insertGeneral(general);
//        return "redirect:/general/list";
//    }
//
//    @GetMapping("/update/{generalNo}")
//    public String updatePage(@PathVariable("generalNo") int generalNo, Model model) {
//        General general = generalService.selectGeneralOne(generalNo);
//        model.addAttribute("general", general);
//        return "update";
//    }
//
//    @PostMapping("/update")
//    public String update(General general) {
//        generalService.updateGeneral(general);
//        return "redirect:/general/view/" + general.getGNo();
//    }
//
//    @PostMapping("/delete/{generalNo}")
//    public String delete(@PathVariable("generalNo") int generalNo) {
//        generalService.deleteGeneral(generalNo);
//        return "redirect:/general/list";
//    }
//
//    @PostMapping("/comment/insert")
//    public String insertComment(@RequestParam("gcContent") String gcContent,
//                                @RequestParam("gcGNo") int gcGNo,
//                                @RequestParam(value = "gcParentNo", required = false) Integer gcParentNo) {
//        GeneralComment comment = new GeneralComment();
//        comment.setGcWriterEmail("KHuser01@gmail.com");
//        comment.setGcContent(gcContent);
//        comment.setGcGNo(gcGNo);
//        comment.setGcCreatedDate(new Timestamp(System.currentTimeMillis()));
//        comment.setGcParentNo(gcParentNo); // 부모 댓글 번호 설정
//
//        generalService.addComment(comment);
//        return "redirect:/general/view/" + gcGNo;
//    }
//
//    @PostMapping("/comment/delete/{gcNo}")
//    public String deleteComment(@PathVariable("gcNo") int gcNo) {
//        generalService.deleteComment(gcNo); // 댓글 삭제
//        return "redirect:/general/view/" + gcNo;
//    }
//
//    @PostMapping("/comment/update")
//    public String updateComment(GeneralComment comment) {
//        generalService.updateComment(comment); // 댓글 수정
//        return "redirect:/general/view/" + comment.getGcGNo();
//    }
//
//    @PostMapping("/updateLike")
//    public String updateLike(@RequestParam("gNo") int gNo, @RequestParam("likeCount") int likeCount) {
//        generalService.updateLikeCount(gNo, likeCount);
//        return "redirect:/general/view/" + gNo; // 업데이트 후 게시물 상세 페이지로 리다이렉트
//    }
//}
