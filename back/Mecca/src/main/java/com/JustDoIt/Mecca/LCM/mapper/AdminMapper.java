package com.JustDoIt.Mecca.LCM.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.sql.Timestamp;

@Mapper
public interface AdminMapper {

    /**
     * 유저 제재 Mapper
     * @param uEmail
     * @param punishmentPeriod
     * @return int
     */
    int updateUserStatus(String uEmail, Timestamp punishmentPeriod);
}
