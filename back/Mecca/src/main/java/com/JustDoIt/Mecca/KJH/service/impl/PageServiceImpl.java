package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.PageMapper;
import com.JustDoIt.Mecca.KJH.service.PageService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PageServiceImpl implements PageService {
    private PageMapper mapper;

    public PageServiceImpl() {}
    @Autowired
    public PageServiceImpl(PageMapper mapper) {
        this.mapper = mapper;
    }
    @Override
    public int insertMatching(Matching insertMatching) {
        int result = mapper.insertMatching(insertMatching);
        return result;
    }
    @Override
    public int getTotalCount() {
        int count = mapper.getTotalCount();
        return count;
    }
    @Override
    public List<Matching> selectList(Integer currentPage, RowBounds rowBounds) {
        List<Matching> mList = mapper.selectList(currentPage,rowBounds);
        return mList;
    }
    @Override
    public Matching selectOne(Integer matchingNo) {
        Matching match = mapper.selectOne(matchingNo);
        return match;
    }

    @Override
    public List<Matching> searchList( RowBounds rowBounds, Map<String, String> paramMap) {
        System.out.println(paramMap);
        List<Matching> mList = mapper.searchList(rowBounds,paramMap);
        return mList;
    }

    @Override
    public int getsearchTotalCount(Map<String, String> paramMap) {
        int searchcount = mapper.getsearchTotalCount(paramMap);
        System.out.println(searchcount);
        return searchcount;
    }

    @Override
    public int minplus(Integer matchingNo, int matchingminCount) {
        int result = mapper.minplus(matchingNo,matchingminCount);
        return result;
    }

    @Override
    public int minsub(Integer matchingNo) {
        int result = mapper.minsub(matchingNo);
        return result;
    }
}