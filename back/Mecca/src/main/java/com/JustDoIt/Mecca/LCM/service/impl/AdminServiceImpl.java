package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.LCM.mapper.AdminMapper;
import com.JustDoIt.Mecca.LCM.service.AdminService;
import com.JustDoIt.Mecca.LCM.vo.Report;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {


    private AdminMapper mapper;

    public AdminServiceImpl() {}
    @Autowired
    public AdminServiceImpl(AdminMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public void updateUserStatus(String uEmail, Date punishmentPeriod) {
        mapper.updateUserStatus(uEmail, punishmentPeriod);
    }

    @Override
    public List<Report> selectlist() {
        List<Report> rList=mapper.selectlist();
        return rList;
    }

    @Override
    public int insertreport(Report redate) {
        int result=mapper.insertreport(redate);
        return result;
    }

    @Override
    public Report selectOne(int reportno) {
        Report rdate=mapper.selectOne(reportno);
        return rdate;
    }

    @Override
    public General selectnotice(int noticeNo) throws NullPointerException {
        General general=mapper.selectnotice(noticeNo);
        return general;
    }

    @Override
    public Matching selectmatching(int noticeNo) {
        Matching matching=mapper.selectmatching(noticeNo);
        return matching;
    }

    @Override
    public GeneralComment selectcomment(int noticeNo) {
        GeneralComment comment=mapper.selectcomment(noticeNo);
        return comment;
    }

    @Override
    public void updatereportstatus(int reportno) {
        mapper.updatereportstatus(reportno);

    }

    @Override
    public void deleteMatching(int noticeNo) {
        mapper.deleteMatching(noticeNo);
    }


}
