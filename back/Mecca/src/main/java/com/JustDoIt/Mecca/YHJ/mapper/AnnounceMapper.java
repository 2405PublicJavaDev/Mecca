package com.JustDoIt.Mecca.YHJ.mapper;

import com.JustDoIt.Mecca.YHJ.vo.Announce;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface AnnounceMapper {

    /**
     * 문의글 작성 Mapper
     * @param announce
     */
    @Insert("INSERT INTO ANNOUNCE_TBL VALUES (SEQ_ANNOUNCE_NO.nextval, #{aWriterEmail}, #{aTitle}, #{aContent}, DEFAULT)")
    void insertAnnounce(Announce announce);

    /**
     * 문의글 목록 Mapper
     * @return
     */
    @Select("SELECT a.* , u.U_NICKNAME, u.U_STAR  FROM ANNOUNCE_TBL a JOIN USER_TBL u ON a.A_WRITER_EMAIL = u.U_EMAIL")
    List<Map<String, Object>> getAnnounceList();
}
