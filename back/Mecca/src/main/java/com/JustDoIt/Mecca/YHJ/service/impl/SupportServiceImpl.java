package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.mapper.SupportMapper;
import com.JustDoIt.Mecca.YHJ.service.SupportService;
import com.JustDoIt.Mecca.YHJ.vo.Support;
import com.JustDoIt.Mecca.common.TimeConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class SupportServiceImpl implements SupportService {

    private SupportMapper supportMapper;

    public SupportServiceImpl() {}
    @Autowired
    public SupportServiceImpl(SupportMapper supportMapper) { this.supportMapper = supportMapper; }

    @Override
    public void insertSupport(Support support) {
        supportMapper.insertSupport(support);
    }

    @Override
    public List<Map<String, Object>> getSupportList() {
        List<Map<String, Object>> supportList = supportMapper.getSupportList();
        for (Map<String, Object> map : supportList)  {
            Date sCreatedDate = (Date) map.get("S_CREATED_DATE");
            String time = TimeConfig.calculateTime(sCreatedDate);
            map.replace("S_CREATED_DATE", time);
        }
        return supportList;
    }
}
