package com.JustDoIt.Mecca.OJS.service.impl;

import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.OJS.mapper.MatchingMapper;
import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public Matching selectOne(Integer mNo) {
        Matching match=mapper.selectOne(mNo);
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
    public int minplus(Integer mrMNo) {

        int result=mapper.minplus(mrMNo);
        return result;
    }

    @Override
    public int minsub(Integer mrMNo) {
        int result=mapper.minsub(mrMNo);
        return result;
    }

    @Override
    public int gamestart(Integer mNo) {
        int result=mapper.gamestart(mNo);
        return result;
    }

    @Override
    public int gameend(Integer mNo) {
        int result=mapper.gameend(mNo);
        return result;
    }

    @Override
    public int checkgame(String memberId) {
        int result=mapper.checkgame(memberId);
        return result;
    }

    @Override
    public List<Matching> searchOne(String memberId) {
        List<Matching> mList=mapper.searchOne(memberId);
        return mList;
    }
}