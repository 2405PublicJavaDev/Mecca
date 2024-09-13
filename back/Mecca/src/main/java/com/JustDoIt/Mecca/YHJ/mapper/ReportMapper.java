package com.JustDoIt.Mecca.YHJ.mapper;

import com.JustDoIt.Mecca.YHJ.vo.Report;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface ReportMapper {

    /**
     * 문의글 작성 Mapper
     * @param report
     */
    @Insert("INSERT INTO REPORT_TBL VALUES (SEQ_REPORT_NO.nextval, #{rWriterEmail}, #{rObjectNo}, #{rOption}, DEFAULT, DEFAULT)")
    void insertReport(Report report);

    /**
     * 문의글 목록 Mapper
     * @return
     */
    @Select("SELECT r.* , u.U_NICKNAME, u.U_STAR  FROM REPORT_TBL r JOIN USER_TBL u ON r.R_WRITER_EMAIL = u.U_EMAIL")
    List<Map<String, Object>> getReportList();
}
