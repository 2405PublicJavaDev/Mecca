package com.JustDoIt.Mecca.OJS.service;

import com.JustDoIt.Mecca.OJS.vo.Request;

import java.util.List;

public interface RequestService {
    
    /**
     * 매칭 등록
     * pram Signal
     * return int
     */
    int applicationgame(Request request);
    /**
     * 등록게임 현황
     * pram memberId
     * return List<Signal></Signal>
     */
    List<Request> registersearch(String mrWriterEmail);
    /**
     * 신청게임 현황
     * pram memberId
     * return List<Signal></Signal>
     */

    List<Request> applicationsearch(String memberId);
    /**
     * 신청게임 수락
     * pram memberId
     * return List<Signal></Signal>
     */
    int accep(Integer mrNo);
    /**
     * 신청게임 거절
     * pram memberId
     * return List<Signal></Signal>
     */
    int refusal(Integer mrNo);
    /**
     * 신청게임 체크
     * pram memberId
     * return List<Signal></Signal>
     */
    int checkgame(String memberId);
    /**
     * 신청게임 취소
     * pram mNo
     * return int
     */
    int gamecancel(Integer mNo);
}