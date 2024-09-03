package com.JustDoIt.Mecca.OJS.mapper;
import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.RowBounds;
import org.thymeleaf.exceptions.TemplateInputException;

@Mapper
public interface MatchingMapper {
    int insertMatching(Matching insertMatching) throws TemplateInputException;

    int getTotalCount();

    List<Matching> selectList(Integer currentPage, RowBounds rowBounds);

    Matching selectOne(Integer matchingNo);


    List<Matching> searchList(RowBounds rowBounds,Map<String, String> paramMap);

    int getsearchTotalCount(Map<String, String> paramMap);

    int minplus(Integer matchingNo, int matchingminCount);

    int minsub(Integer matchingNo);
}