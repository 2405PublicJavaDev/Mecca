package com.JustDoIt.Mecca.LCM.service;

import com.JustDoIt.Mecca.LCM.vo.Report;

public interface ReportService {

    /**
     * 신고 게시글 추가  Service
     * @param report
     * @return
     */
    int addReport(Report report);

    /**
     * 신고글 삭제 Service
     * @param uWriterEmail
     * @return
     */
    int deleteReport(String uWriterEmail);
}
