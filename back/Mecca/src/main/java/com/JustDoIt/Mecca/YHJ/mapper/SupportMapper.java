package com.JustDoIt.Mecca.YHJ.mapper;

import com.JustDoIt.Mecca.YHJ.vo.Support;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface SupportMapper {

    /**
     * 문의글 작성 Mapper
     * @param support
     */
    @Insert("INSERT INTO SUPPORT_TBL VALUES (SEQ_SUPPORT_NO.nextval, #{sWriterEmail}, #{sTitle}, #{sContent}, DEFAULT, DEFAULT)")
    void insertSupport(Support support);

    /**
     * 문의글 목록 Mapper
     * @return
     */
    @Select("SELECT s.* , u.U_NICKNAME, u.U_STAR  FROM SUPPORT_TBL s JOIN USER_TBL u ON s.S_WRITER_EMAIL = u.U_EMAIL")
    List<Map<String, Object>> getSupportList();
}
