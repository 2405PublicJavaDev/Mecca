package com.JustDoIt.Mecca.LCM.service;

import java.sql.Timestamp;

public interface AdminService {

    /**
     * 유저 제재 Service
     * @param uEmail
     * @param punishmentPeriod
     * @return int
     */
    void updateUserStatus(String uEmail, Timestamp punishmentPeriod);
}
