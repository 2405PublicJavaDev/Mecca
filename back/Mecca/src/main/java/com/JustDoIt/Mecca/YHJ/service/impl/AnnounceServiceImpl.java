package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.mapper.AnnounceMapper;
import com.JustDoIt.Mecca.YHJ.service.AnnounceService;
import com.JustDoIt.Mecca.YHJ.vo.Announce;
import com.JustDoIt.Mecca.common.TimeConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class AnnounceServiceImpl implements AnnounceService {

    private AnnounceMapper announceMapper;

    public AnnounceServiceImpl() {}
    @Autowired
    public AnnounceServiceImpl(AnnounceMapper announceMapper) { this.announceMapper = announceMapper; }

    @Override
    public void insertAnnounce(Announce announce) {
        announceMapper.insertAnnounce(announce);
    }

    @Override
    public List<Map<String, Object>> getAnnounceList() {
        List<Map<String, Object>> announceList = announceMapper.getAnnounceList();
        for (Map<String, Object> map : announceList)  {
            Date aCreatedDate = (Date) map.get("A_CREATED_DATE");
            String time = TimeConfig.calculateTime(aCreatedDate);
            map.replace("A_CREATED_DATE", time);
        }
        return announceList;
    }
}
