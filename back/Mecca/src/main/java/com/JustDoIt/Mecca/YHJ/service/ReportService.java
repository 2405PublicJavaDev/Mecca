package com.JustDoIt.Mecca.YHJ.service;

import com.JustDoIt.Mecca.YHJ.vo.Report;

import java.util.List;
import java.util.Map;

public interface ReportService {

    /**
     * 문의글 작성 Service
     * @param report
     */
    void insertReport(Report report);

    /**
     * 문의글 목록 Service
     * @return
     */
    List<Map<String, Object>> getReportList();
}
