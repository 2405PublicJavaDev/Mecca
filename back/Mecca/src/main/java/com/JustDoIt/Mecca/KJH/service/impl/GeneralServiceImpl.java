package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeneralServiceImpl implements GeneralService {

    private GeneralMapper mapper;

    public GeneralServiceImpl() {}
    @Autowired
    public GeneralServiceImpl(GeneralMapper mapper) { this.mapper = mapper; }

    @Override
    public int insertGeneral() {
        int result = mapper.insertGeneral();
        return result;
    }

    @Override
    public int selectGeneral() {
        int result = mapper.selectGeneral();
        return result;
    }

    @Override
    public int updateGeneral() {
        int result = mapper.updateGeneral();
        return result;
    }

    @Override
    public int deleteGeneral() {
        int result = mapper.deleteGeneral();
        return result;
    }
}