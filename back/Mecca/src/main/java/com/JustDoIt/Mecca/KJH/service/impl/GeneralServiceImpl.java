package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneralServiceImpl implements GeneralService {

    private final GeneralMapper mapper;

    @Autowired
    public GeneralServiceImpl(GeneralMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public int insertGeneral(General general) {
        int result = mapper.insertGeneral(general);
        return result;
    }

    @Override
    public General selectGeneralOne(Integer generalNo) {
        General result = mapper.selectGeneral(generalNo);
        return result;
    }

    @Override
    public int updateGeneral(General general) {
        int result = mapper.updateGeneral(general);
        return result;
    }

    @Override
    public int deleteGeneral(Integer generalNo) {
        int result = mapper.deleteGeneral(generalNo);
        return result;
    }

    @Override
    public List<General> selectGeneralList() {
        List<General> result = mapper.selectGeneralList();
        return result;
    }
}
