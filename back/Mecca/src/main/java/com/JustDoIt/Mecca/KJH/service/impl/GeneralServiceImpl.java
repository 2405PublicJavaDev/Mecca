package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeneralServiceImpl implements GeneralService {

    private final GeneralMapper generalMapper;

    @Autowired
    public GeneralServiceImpl(GeneralMapper generalMapper) {
        this.generalMapper = generalMapper;
    }

    @Override
    public int getTotalCount() {
        return generalMapper.getTotalCount();
    }

    @Override
    public General selectGeneralOne(int generalNo) {
        return generalMapper.selectGeneralOne(generalNo);
    }

    @Override
    public void insertGeneral(General general) {
        generalMapper.insertGeneral(general);
    }

    @Override
    public void updateGeneral(General general) {
        generalMapper.updateGeneral(general);
    }

    @Override
    public void deleteGeneral(int generalNo) {
        generalMapper.deleteGeneral(generalNo);
    }

    @Override
    public int getSearchTotalCount(String searchQuery) {
        return generalMapper.getSearchTotalCount(searchQuery);
    }

    @Override
    public List<General> searchGeneralList(int currentPage, String sortBy, String searchQuery, RowBounds rowBounds) {
        Map<String, Object> params = new HashMap<>();
        params.put("currentPage", currentPage);
        params.put("sortBy", sortBy);
        params.put("searchQuery", searchQuery);
        return generalMapper.searchGeneralList(params, rowBounds);
    }

    @Override
    public List<General> selectGeneralList(int currentPage, String sortBy, RowBounds rowBounds) {
        Map<String, Object> params = new HashMap<>();
        params.put("currentPage", currentPage);
        params.put("sortBy", sortBy);
        return generalMapper.selectGeneralList(params, rowBounds);
    }

    @Override
    public void incrementViewCount(int generalNo) {
        generalMapper.incrementViewCount(generalNo);
    }
}
