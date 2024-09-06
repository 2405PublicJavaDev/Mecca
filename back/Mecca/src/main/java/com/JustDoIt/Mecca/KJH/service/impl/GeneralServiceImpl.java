package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GeneralServiceImpl implements GeneralService {

    private final GeneralMapper mapper;

    @Autowired
    public GeneralServiceImpl(GeneralMapper mapper) {
        this.mapper = mapper;
    }

    @Transactional
    @Override
    public int insertGeneral(General general) {
        return mapper.insertGeneral(general);
    }

    @Override
    public General selectGeneralOne(Integer generalNo) {
        return mapper.selectGeneral(generalNo);
    }

    @Override
    public List<General> selectGeneralList() {
        return mapper.selectGeneralList();
    }

    @Override
    public int updateGeneral(General general) {
        return mapper.updateGeneral(general);
    }

    @Override
    public int deleteGeneral(Integer generalNo) {
        return mapper.deleteGeneral(generalNo);
    }
}
