package com.JustDoIt.Mecca.OJS.service;

import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.OJS.vo.Matching;
import org.apache.ibatis.session.RowBounds;

public interface MatchingService {
    /**
     * 매칭등록
     * pram MatchingVO
     * return int result
     * @return
     */

    int insertMatching(Matching insertMatching);
    /**
     * 리스트 갯수 조회
     * pram
     * return int
     */
    int getTotalCount();
    /**
     * 게시판 조회
     * pram currentPage,rowBounds
     * return List<matching>
     */
    List<Matching> selectList(Integer currentPage, RowBounds rowBounds);
    /**
     * 매칭 한개 조회
     * pram matchingNo
     * return matchingVO
     */
    Matching selectOne(Integer matchingNo);
    /**
     * 매칭 게시판조회
     * pram Map
     * return List<Matching
     */
    List<Matching> searchList( RowBounds rowBounds, Map<String, String> paramMap);
    /**
     * 매칭 게시판 검색 갯수
     * pram Map
     * return int
     */
    int getsearchTotalCount(Map<String, String> paramMap);
    /**
     * 최소인원수 +
     * matchingNo,minCount
     * return int
     */
    int minplus(Integer matchingNo, int matchingminCount);
    /**
     * 최소인원수 -
     * matchingNo,minCount
     * return int
     */
    int minsub(Integer matchingNo);
}