package com.JustDoIt.Mecca.OJS.service.impl;

import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.OJS.mapper.MatchingMapper;
import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Signal;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.exceptions.TemplateInputException;

@Service
public class MatchingServiceImpl implements MatchingService {

    private MatchingMapper mapper;

    public MatchingServiceImpl() {}
    @Autowired
    public MatchingServiceImpl(MatchingMapper mapper) {
        this.mapper=mapper;
    }
    @Override
    public int insertMatching(Matching insertMatching) {

        int result=mapper.insertMatching(insertMatching);
        return result;
    }
    @Override
    public int getTotalCount() {
        int count=mapper.getTotalCount();
        return count;
    }
    @Override
    public List<Matching> selectList(Integer currentPage, RowBounds rowBounds) {
        List<Matching> mList=mapper.selectList(currentPage,rowBounds);
        return mList;
    }
    @Override
    public Matching selectOne(Integer matchingNo) {
        Matching match=mapper.selectOne(matchingNo);
        return match;
    }

    @Override
    public List<Matching> searchList( RowBounds rowBounds, Map<String, String> paramMap) {
        System.out.println(paramMap);
        List<Matching> mList=mapper.searchList(rowBounds,paramMap);
        return mList;
    }

    @Override
    public int getsearchTotalCount(Map<String, String> paramMap) {
        int searchcount=mapper.getsearchTotalCount(paramMap);
        System.out.println(searchcount);
        return searchcount;
    }

    @Override
    public int minplus(Integer matchingNo, int matchingminCount) {

        int result=mapper.minplus(matchingNo,matchingminCount);
        return result;
    }

    @Override
    public int minsub(Integer matchingNo) {
        int result=mapper.minsub(matchingNo);
        return result;
    }
}