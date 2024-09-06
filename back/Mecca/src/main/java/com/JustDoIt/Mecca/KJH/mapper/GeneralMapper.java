package com.JustDoIt.Mecca.KJH.mapper;

import com.JustDoIt.Mecca.KJH.vo.General;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface GeneralMapper {

    int insertGeneral(General general);

    General selectGeneral(@Param("id") int id);

    List<General> selectGeneralList();

    int updateGeneral(General general);

    int deleteGeneral(@Param("id") Integer generalNo);
}
