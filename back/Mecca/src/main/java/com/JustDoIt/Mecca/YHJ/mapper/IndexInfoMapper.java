package com.JustDoIt.Mecca.YHJ.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface IndexInfoMapper {

    /**
     * 자유 게시판 최근글 5개 조회 Mapper
     * @return List
     */
    @Select("SELECT g.*, u.U_NICKNAME, u.U_STAR, (SELECT COUNT(GC_NO) FROM GENERAL_COMMENT_TBL gc WHERE gc.GC_G_NO = g.G_NO) AS GC_COUNT FROM GENERAL_TBL g JOIN USER_TBL u ON g.G_WRITER_EMAIL = u.U_EMAIL WHERE ROWNUM <= 5")
    List<Map<String, Object>> selectGeneralList();

    /**
     * 매칭 게시판 최근글 5개 조회 Service
     * @return List
     */
    @Select("SELECT m.*, u.U_NICKNAME, u.U_STAR FROM MATCHING_TBL m JOIN USER_TBL u ON m.M_WRITER_EMAIL = u.U_EMAIL WHERE ROWNUM <= 5")
    List<Map<String, Object>> selectMatchingList();

    /**
     * 자유 게시판 최고글 5개 조회 Service
     * @return List
     */
    @Select("SELECT * FROM (SELECT g.*, u.U_NICKNAME, u.U_STAR, (SELECT COUNT(GC_NO) FROM GENERAL_COMMENT_TBL gc WHERE gc.GC_G_NO = g.G_NO) AS GC_COUNT FROM GENERAL_TBL g JOIN USER_TBL u ON g.G_WRITER_EMAIL = u.U_EMAIL ORDER BY G_LIKE DESC) WHERE ROWNUM <= 5 ")
    List<Map<String, Object>> selectBestGeneralList();

    /**
     * 공지 게시판 최근글 5개 조회 Service
     * @return List
     */
    @Select("SELECT a.*, u.U_NICKNAME, u.U_STAR FROM ANNOUNCE_TBL a JOIN USER_TBL u ON a.A_WRITER_EMAIL = u.U_EMAIL WHERE ROWNUM <= 5")
    List<Map<String, Object>> selectAnnounceList();
}
