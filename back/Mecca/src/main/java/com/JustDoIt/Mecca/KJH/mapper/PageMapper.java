package com.JustDoIt.Mecca.KJH.mapper;

import java.util.Map;

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
}
