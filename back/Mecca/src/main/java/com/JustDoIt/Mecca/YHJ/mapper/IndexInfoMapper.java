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
}
