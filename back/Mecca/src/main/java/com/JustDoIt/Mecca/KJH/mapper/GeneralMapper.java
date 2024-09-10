package com.JustDoIt.Mecca.KJH.mapper;

import com.JustDoIt.Mecca.KJH.vo.General;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

@Mapper
public interface GeneralMapper {

    General selectGeneralOne(int gNo);

    void insertGeneral(General general);

    void updateGeneral(General general);

    void deleteGeneral(int gNo);

    int getSearchTotalCount(String searchQuery);
    List<General> searchGeneralList(Map<String, Object> params, RowBounds rowBounds);

    int getTotalCount();
    List<General> selectGeneralList(Map<String, Object> params, RowBounds rowBounds);

    void incrementViewCount(int gNo);
}
