package com.JustDoIt.Mecca.KJH.service;

import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

public interface GeneralService {

    int getTotalCount();

    General selectGeneralOne(int generalNo);

    void insertGeneral(General general);

    void updateGeneral(General general);

    void deleteGeneral(int generalNo);

    int getSearchTotalCount(String searchQuery);

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

    int getCommentCountByGeneralNo(int gNo);

    List<General> selectGeneralListWithUserInfo(Map<String, Object> params, RowBounds rowBounds);
}
