package com.JustDoIt.Mecca.KJH.service;

import com.JustDoIt.Mecca.KJH.vo.General;

import java.util.List;

public interface GeneralService {

    int insertGeneral(General general);

    General selectGeneralOne(Integer generalNo);

    List<General> selectGeneralList();

    int updateGeneral(General general);

    int deleteGeneral(Integer generalNo);
}
