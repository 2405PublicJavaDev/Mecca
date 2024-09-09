package com.JustDoIt.Mecca.KJH.mapper;

import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;
import org.thymeleaf.exceptions.TemplateInputException;

import java.util.List;
import java.util.Map;

@Mapper
public interface PageMapper {
    int insertMatching(Matching insertMatching) throws TemplateInputException;

    int getTotalCount();

    List<Matching> selectList(Integer currentPage, RowBounds rowBounds);

    Matching selectOne(Integer matchingNo);

    List<Matching> searchList(RowBounds rowBounds, Map<String, String> paramMap);

    int getsearchTotalCount(Map<String, String> paramMap);

    int minplus(Integer matchingNo, int matchingminCount);

    int minsub(Integer matchingNo);
}
