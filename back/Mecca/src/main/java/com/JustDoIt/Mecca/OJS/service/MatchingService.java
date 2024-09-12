package com.JustDoIt.Mecca.OJS.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.JustDoIt.Mecca.LCM.vo.User;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.UserProfile;
import org.apache.ibatis.session.RowBounds;
import org.springframework.web.multipart.MultipartFile;

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
    int minplus(Integer mrMNo);
    /**
     * 최소인원수 -
     * matchingNo,minCount
     * return int
     */
    int minsub(Integer mrMNo);
    /**
     * 게임시작 -
     * mNo
     * return int
     */
    int gamestart(Integer mNo);
    /**
     * 게임종료 -
     * mNo
     * return int
     */
    int gameend(Integer mNo);
    /**
     * 매칭등록전 게임상태 검사
     * memberId
     * return int
     */
    int checkgame(String memberId);
    /**
     * 매칭등록상태
     * memberId
     * matching
     */
    List<Matching> searchOne(String memberId);
    /**
     * 업로드 프로필
     * memberId
     * matching
     */
    void updateprofile(MultipartFile file,String email) throws IOException;
    /**
     * 프로필 가져오기
     * memberId
     * matching
     *
     * @return
     */
    UserProfile getprofile(String id) throws IOException;
}