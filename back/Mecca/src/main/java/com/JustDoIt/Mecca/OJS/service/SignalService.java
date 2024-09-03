package com.JustDoIt.Mecca.OJS.service;

import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Signal;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

public interface SignalService {
    
    /**
     * 매칭 등록
     * pram Signal
     * return int
     */
    int applicationgame(Signal signal);
    /**
     * 등록게임 현황
     * pram memberId
     * return List<Signal></Signal>
     */
    List<Signal> registersearch(String memberId);
    /**
     * 신청게임 현황
     * pram memberId
     * return List<Signal></Signal>
     */

    List<Signal> applicationsearch(String memberId);
    /**
     * 신청게임 수락
     * pram memberId
     * return List<Signal></Signal>
     */
    int accep(Integer signalNo);
    /**
     * 신청게임 거절
     * pram memberId
     * return List<Signal></Signal>
     */
    int refusal(Integer signalNo);
}