package com.JustDoIt.Mecca.KJH.mapper;


import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface GeneralMapper {

    // 게시물 조회
    General selectGeneralOne(int gNo);

    // 게시물 삽입
    void insertGeneral(String gWriterEmail, String gTitle, String gContent);

    // 게시물 업데이트
    int updateGeneral(General general);

    // 게시물 삭제
    void deleteGeneral(int gNo);

    // 검색 쿼리에 대한 총 게시물 수 조회
    int getSearchTotalCount(String searchQuery);

    // 검색 쿼리에 대한 게시물 목록 조회
    public List<General> selectGeneralList(Map<String, Object> params);

    // 전체 게시물 수 조회
    int getTotalCount();

    // 게시물 목록 조회
    List<General> selectGeneralList(Map<String, Object> params, RowBounds rowBounds);

    // 조회수 증가
    void incrementViewCount(int gNo);

    // 댓글 삽입
    void insertComment(GeneralComment comment);

    // 게시물에 대한 댓글 목록 조회 (페이지네이션 포함)
    List<GeneralComment> selectCommentsByGeneralNo(@Param("gNo") int gNo, RowBounds rowBounds);

    // 댓글 삭제
    void deleteComment(int gcNo);

    // 댓글 수정
    void updateComment(GeneralComment comment);

    void updateLikeCount(@Param("gNo") int gNo, @Param("likeCount") int likeCount);

    int getCommentCountByGeneralNo(int gNo);

    List<General> selectGeneralListWithUserInfo(@Param("params") Map<String, Object> params, RowBounds rowBounds);

    List<General> searchGeneralList(Map<String, Object> params);
}
