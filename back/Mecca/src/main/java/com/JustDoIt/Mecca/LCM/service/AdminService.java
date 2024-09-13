package com.JustDoIt.Mecca.LCM.service;

import com.JustDoIt.Mecca.KJH.vo.General;
import com.JustDoIt.Mecca.KJH.vo.GeneralComment;
import com.JustDoIt.Mecca.YHJ.vo.Report;
import com.JustDoIt.Mecca.OJS.vo.Matching;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

public interface AdminService {

    /**
     * 유저 제재 Service
     * @param uEmail
     * @param punishmentPeriod
     * @return int
     */
    void updateUserStatus(String uEmail, Date punishmentPeriod);
    /**
     * 신고리스트 출력 Service
     * @param
     * @param List<Report>
     * @return int
     */
//    List<Report> selectlist();
    /**
     * 신고게시판 등록 Service
     * @param
     * @param 글정보
     * @return int
     */
//    int insertreport(Report redate);
    /**
     * 신고게시판 상세 Service
     * @param
     * @param rNo
     * @return report
     */
//    Report selectOne(int reportno);

    /**
     * 신고게시판 자유게시판조회 Service
     * @param
     * @param noticeNo
     * @return General
     */
//    General selectnotice(int noticeNo) throws NullPointerException;
    /**
     * 신고게시판 매칭시판조회 Service
     * @param
     * @param noticeNo
     * @return Matching
     */
//    Matching selectmatching(int noticeNo);
    /**
     * 신고게시판 자유게시판댓글조회 Service
     * @param
     * @param noticeNo
     * @return GeneralComment
     */
//    GeneralComment selectcomment(int noticeNo);
    /**
     * 신고게시판 처리완료상태변경 Service
     * @param
     * @param reportno
     * @return
     */
    void updatereportstatus(int reportno);
    /**
     * 신고게시판 된 매칭 게시판 삭제 Service
     * @param
     * @param noticeNo
     * @return
     */
    void deleteMatching(int noticeNo);
}
