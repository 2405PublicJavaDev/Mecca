package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.LCM.vo.Report;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.annotations.Mapper;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Mapper
public interface AdminMapper {

    /**
     * 유저 제재 Mapper
     * @param uEmail
     * @param punishmentPeriod
     * @return int
     */
    int updateUserStatus(String uEmail, Date punishmentPeriod);

    List<Report> selectlist();

    int insertreport(Report redate);

    Report selectOne(int reportno);

    General selectnotice(int noticeNo) throws NullPointerException;

    Matching selectmatching(int noticeNo);

    GeneralComment selectcomment(int noticeNo);

    void updatereportstatus(int reportno);

    void deleteMatching(int noticeNo);
}
