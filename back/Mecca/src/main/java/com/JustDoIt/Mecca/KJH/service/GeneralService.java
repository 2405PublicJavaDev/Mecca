package com.JustDoIt.Mecca.KJH.service;

import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

public interface GeneralService {

    int getTotalCount();

    General selectGeneralOne(int generalNo);

    void insertGeneral(General general);

    void updateGeneral(General general);

    void deleteGeneral(int generalNo);

    int getSearchTotalCount(String searchQuery);
    // 게시물 목록 조회 메서드 수정
    List<General> searchGeneralList(int currentPage, String sortBy, String searchQuery, RowBounds rowBounds);

    List<General> selectGeneralList(int currentPage, String sortBy, RowBounds rowBounds);

    void incrementViewCount(int generalNo);

    void addComment(GeneralComment comment);

    List<GeneralComment> getCommentsByGeneralNo(int gNo, RowBounds rowBounds);

    void removeComment(int gcNo);

    List<GeneralComment> getCommentsByGeneralNo(int generalNo);

    void updateComment(GeneralComment comment);

    void deleteComment(int gcNo);

    void updateLikeCount(int gNo, int likeCount);
}
