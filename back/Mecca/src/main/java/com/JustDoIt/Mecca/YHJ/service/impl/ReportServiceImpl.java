package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.mapper.ReportMapper;
import com.JustDoIt.Mecca.YHJ.service.ReportService;
import com.JustDoIt.Mecca.YHJ.vo.Report;
import com.JustDoIt.Mecca.common.TimeConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class ReportServiceImpl implements ReportService {

    private ReportMapper reportMapper;

    public ReportServiceImpl() {}
    @Autowired
    public ReportServiceImpl(ReportMapper reportMapper) { this.reportMapper = reportMapper; }

    @Override
    public void insertReport(Report report) {
        reportMapper.insertReport(report);
    }

    @Override
    public List<Map<String, Object>> getReportList() {
        List<Map<String, Object>> reportList = reportMapper.getReportList();
        for (Map<String, Object> map : reportList)  {
            Date rCreatedDate = (Date) map.get("R_CREATED_DATE");
            String time = TimeConfig.calculateTime(rCreatedDate);
            map.replace("R_CREATED_DATE", time);
        }
        return reportList;
    }
}
