package com.JustDoIt.Mecca.KJH.controller;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.common.Pagination;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/general")
@Slf4j
public class GeneralApiController {

    private final GeneralService generalService;

    @Autowired
    public GeneralApiController(GeneralService generalService) {
        this.generalService = generalService;
    }

    @GetMapping("/list")
    public Map<String, Object> list(
            @RequestParam(defaultValue = "1") int currentPage,
            @RequestParam(required = false) String searchQuery,
            @RequestParam(defaultValue = "latest") String sortBy) {

        int totalCount;
        List<General> generalList;

        // 검색어가 있는지 여부에 따라 총 갯수 계산
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
        Map<String, Object> params = new HashMap<>();
        params.put("currentPage", currentPage);
        params.put("sortBy", sortBy);
        params.put("searchQuery", searchQuery);
        params.put("rowBounds", rowBounds);
        if (searchQuery != null && !searchQuery.isEmpty()) {
            generalList = generalService.searchGeneralList(params);
        } else {
            generalList = generalService.selectGeneralListWithUserInfo(params, rowBounds);
        }

        // 각 게시물의 댓글 수를 추가로 조회
        for (General general : generalList) {
            int commentCount = generalService.getCommentCountByGeneralNo(general.getGNo());
            general.setGcCount(commentCount); // 게시물 객체에 댓글 수 설정
        }

        Map<String, Object> response = new HashMap<>();
        response.put("generalList", generalList);
        response.put("pagination", pagination);
        response.put("searchQuery", searchQuery); // 검색 쿼리 유지
        response.put("sortBy", sortBy); // 정렬 방식 유지

        return response;
    }

    @GetMapping("/view/{generalNo}")
    public Map<String, Object> view(@PathVariable("generalNo") int generalNo) {
        generalService.incrementViewCount(generalNo);

        General general = generalService.selectGeneralOne(generalNo);
        Map<String, Object> response = new HashMap<>();
        if (general == null) {
            response.put("status", "fail");
            response.put("message", "General not found");
            return response;
        }

        // 페이지네이션 설정 (댓글의 경우 페이지네이션을 적용할 수도 있습니다)
        int limit = 10; // 예시로 10개 댓글씩 페이지네이션
        int offset = 0; // 첫 페이지의 경우 0
        RowBounds rowBounds = new RowBounds(offset, limit);

        List<GeneralComment> comments = generalService.getCommentsByGeneralNo(generalNo, rowBounds); // 댓글 조회

        response.put("status", "success");
        response.put("general", general);
        response.put("comments", comments); // 댓글 목록 추가

        return response;
    }

    @PostMapping("/insert")
    public Map<String, Object> insert(@RequestBody General general) {
        generalService.insertGeneral(general);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "General inserted successfully");
        return response;
    }

    @GetMapping("/update/{generalNo}")
    public Map<String, Object> updatePage(@PathVariable("generalNo") int generalNo) {
        General general = generalService.selectGeneralOne(generalNo);
        Map<String, Object> response = new HashMap<>();
        if (general != null) {
            response.put("status", "success");
            response.put("general", general);
        } else {
            response.put("status", "fail");
            response.put("message", "General not found");
        }
        return response;
    }

    @PostMapping("/update")
    public Map<String, Object> update(@RequestBody General general) {
        int result = generalService.updateGeneral(general);
        Map<String, Object> response = new HashMap<>();
        if (result > 0) {
            response.put("status", "success");
            response.put("message", "General updated successfully");
        } else {
            response.put("status", "fail");
            response.put("message", "Update failed");
        }
        return response;
    }

    @PostMapping("/delete/{generalNo}")
    public Map<String, Object> delete(@PathVariable("generalNo") int generalNo) {
        generalService.deleteGeneral(generalNo);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "General deleted successfully");
        return response;
    }

    @PostMapping("/comment/insert")
    public Map<String, Object> insertComment(@RequestBody GeneralComment comment) {
        comment.setGcWriterEmail("KHuser01@gmail.com");
        comment.setGcCreatedDate(new Timestamp(System.currentTimeMillis()));
        generalService.addComment(comment);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Comment inserted successfully");
        response.put("redirectUrl", "/api/general/view/" + comment.getGcGNo());
        return response;
    }

    @PostMapping("/comment/delete/{gcNo}")
    public Map<String, Object> deleteComment(@PathVariable("gcNo") int gcNo) {
        generalService.deleteComment(gcNo); // 댓글 삭제
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Comment deleted successfully");
        response.put("redirectUrl", "/api/general/view/" + gcNo);
        return response;
    }

    @PostMapping("/comment/update")
    public Map<String, Object> updateComment(@RequestBody GeneralComment comment) {
        generalService.updateComment(comment); // 댓글 수정
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Comment updated successfully");
        response.put("redirectUrl", "/api/general/view/" + comment.getGcGNo());
        return response;
    }

    @PostMapping("/updateLike")
    public Map<String, Object> updateLike(@RequestParam("gNo") int gNo, @RequestParam("likeCount") int likeCount) {
        generalService.updateLikeCount(gNo, likeCount);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Like count updated successfully");
        response.put("redirectUrl", "/api/general/view/" + gNo);
        return response;
    }
}
