package com.JustDoIt.Mecca.KJH.service.impl;

import com.JustDoIt.Mecca.KJH.mapper.GeneralMapper;
import com.JustDoIt.Mecca.KJH.service.GeneralService;
import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

//    @Override
//    public void insertGeneral(String gWriterEmail, String gTitle, String gContent) {
//        generalMapper.insertGeneral(gWriterEmail, gTitle, gContent);
//    }

    @Override
    public int updateGeneral(General general) {
        return generalMapper.updateGeneral(general);
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
    public List<General> searchGeneralList(Map<String, Object> params) {
        return generalMapper.searchGeneralList(params);
    }


    @Override
    public List<General> selectGeneralList(Map<String, Object> params) {
        return generalMapper.selectGeneralList(params);
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
    public List<GeneralComment> getCommentsByGeneralNo(int generalNo, RowBounds rowBounds) {
        return generalMapper.selectCommentsByGeneralNo(generalNo, rowBounds);
    }

    @Override
    public List<GeneralComment> getCommentsByGeneralNo(int generalNo) {
        return List.of(); // 또는 적절한 구현 추가
    }

    @Override
    public void deleteComment(int gcNo) {
        generalMapper.deleteComment(gcNo);
    }
    @Override
    public void updateComment(GeneralComment comment) {
        generalMapper.updateComment(comment);
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

    @Override
    public void insertGeneral(General general) {
        generalMapper.insertGeneral(general.getGWriterEmail(), general.getGTitle(), general.getGContent());
    }
}
