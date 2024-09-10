package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.LCM.vo.Report;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ReportMapper {

    /**
     * 신고 게시글 추가 mapper
     * @param report
     * @return
     */
    int insertReport(Report report);

    /**
     * 신고글 삭제 mapper
     * @param rWriterEmail
     * @return
     */
    int deleteReport(@Param("rWriterEmail") String rWriterEmail);
}
