package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.mapper.ReportMapper;
import com.JustDoIt.Mecca.LCM.service.ReportService;
import com.JustDoIt.Mecca.LCM.vo.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportServiceImpl implements ReportService {

    private ReportMapper reportMapper;
    private ReportMapper mapper;

    public ReportServiceImpl() {}
    @Autowired
    public ReportServiceImpl(ReportMapper mapper, ReportMapper reportMapper) { this.mapper = mapper;
        this.reportMapper = reportMapper;
    }

    @Override
    public int addReport(Report report) {
        return reportMapper.insertReport(report);
    }

    @Override
    public int deleteReport(String rWriterEmail) {
        int result = mapper.deleteReport(rWriterEmail);
        return result;
    }
}
