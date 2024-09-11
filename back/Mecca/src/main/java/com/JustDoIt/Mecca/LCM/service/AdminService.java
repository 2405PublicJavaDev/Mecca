package com.JustDoIt.Mecca.LCM.service;

import com.JustDoIt.Mecca.LCM.vo.Report;

import java.sql.Timestamp;
import java.util.List;

public interface AdminService {

    /**
     * 유저 제재 Service
     * @param uEmail
     * @param punishmentPeriod
     * @return int
     */
    void updateUserStatus(String uEmail, Timestamp punishmentPeriod);
    /**
     * 신고리스트 출력 Service
     * @param
     * @param List<Report>
     * @return int
     */
    List<Report> selectlist();
}
