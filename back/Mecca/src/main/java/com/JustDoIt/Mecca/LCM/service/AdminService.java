package com.JustDoIt.Mecca.LCM.service;

import java.sql.Timestamp;


public interface AdminService {
    /**
     * 아이디 제재 -
     * reportid
     * return int
     */

    int updateUserStatus(String uEmail, Timestamp reportdate);
}
