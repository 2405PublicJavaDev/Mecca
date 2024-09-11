package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.LCM.vo.Report;
import org.apache.ibatis.annotations.Mapper;

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
    int updateUserStatus(String uEmail, Timestamp punishmentPeriod);

    List<Report> selectlist();
}
