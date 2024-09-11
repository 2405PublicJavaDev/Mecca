package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeneralServiceImpl implements GeneralService {

    private final GeneralMapper generalMapper;

    @Autowired
    public GeneralServiceImpl(GeneralMapper generalMapper) {
        this.generalMapper = generalMapper;
    }

    @Override
    public int getTotalCount() {
        return generalMapper.getTotalCount();
    }

    @Override
    public General selectGeneralOne(int generalNo) {
        return generalMapper.selectGeneralOne(generalNo);
    }

    @Override
    public void insertGeneral(General general) {
        generalMapper.insertGeneral(general);
    }

    @Override
    public void updateGeneral(General general) {
        generalMapper.updateGeneral(general);
    }

    @Override
    public void deleteGeneral(int generalNo) {
        generalMapper.deleteGeneral(generalNo);
    }

    @Override
    public int getSearchTotalCount(String searchQuery) {
        return generalMapper.getSearchTotalCount(searchQuery);
    }

    @Override
    public List<General> searchGeneralList(int currentPage, String sortBy, String searchQuery, RowBounds rowBounds) {
        Map<String, Object> params = new HashMap<>();
        params.put("searchQuery", searchQuery);
        params.put("sortBy", sortBy);
        return generalMapper.searchGeneralList(params, rowBounds);
    }

    @Override
    public List<General> selectGeneralList(int currentPage, String sortBy, RowBounds rowBounds) {
        Map<String, Object> params = new HashMap<>();
        params.put("sortBy", sortBy);
        return generalMapper.selectGeneralList(params, rowBounds);
    }

    @Override
    public void incrementViewCount(int generalNo) {
        generalMapper.incrementViewCount(generalNo);
    }

    @Override
    public void addComment(GeneralComment comment) {
        generalMapper.insertComment(comment);
    }

    @Override
    public List<GeneralComment> getCommentsByGeneralNo(int gNo, RowBounds rowBounds) {
        return generalMapper.selectCommentsByGeneralNo(gNo, rowBounds);
    }

    @Override
    public void removeComment(int gcNo) {
        generalMapper.deleteComment(gcNo);
    }

    @Override
    public List<GeneralComment> getCommentsByGeneralNo(int generalNo) {
        return generalMapper.getCommentsByGeneralNo(generalNo);
    }

    @Override
    public void updateComment(GeneralComment comment) {
        generalMapper.updateComment(comment);
    }

    @Override
    public void deleteComment(int gcNo) {
        generalMapper.deleteComment(gcNo);
    }

    @Override
    public void updateLikeCount(int gNo, int likeCount) {
        generalMapper.updateLikeCount(gNo, likeCount);
    }

    @Override
    public int getCommentCountByGeneralNo(int gNo) {
        return generalMapper.getCommentCountByGeneralNo(gNo);
    }

    @Override
    public List<General> selectGeneralListWithUserInfo(Map<String, Object> params, RowBounds rowBounds) {
        return generalMapper.selectGeneralListWithUserInfo(params, rowBounds);
    }
}
