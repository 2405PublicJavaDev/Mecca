package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.mapper.IndexInfoMapper;
import com.JustDoIt.Mecca.YHJ.service.IndexInfoService;
import com.JustDoIt.Mecca.common.TimeConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class IndexInfoServiceImpl implements IndexInfoService {

    private IndexInfoMapper indexInfoMapper;

    public IndexInfoServiceImpl() {}
    @Autowired
    public IndexInfoServiceImpl(IndexInfoMapper indexInfoMapper) { this.indexInfoMapper = indexInfoMapper; }

    @Override
    public List<Map<String, Object>> selectGeneralList() {
        List<Map<String, Object>> generalList = indexInfoMapper.selectGeneralList();
        for (Map<String, Object> map : generalList)  {
            Date gCreatedDate = (Date) map.get("G_CREATED_DATE");
            String time = TimeConfig.calculateTime(gCreatedDate);
            map.replace("G_CREATED_DATE", time);
        }
        return generalList;
    }
}
