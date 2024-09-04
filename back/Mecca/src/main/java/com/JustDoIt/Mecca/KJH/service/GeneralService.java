package com.JustDoIt.Mecca.KJH.service;

import com.JustDoIt.Mecca.KJH.vo.General;

import java.util.List;

public interface GeneralService {

    /**
     * 게시글 작성 Service
     * @param general 정보
     * @return 성공 시 1, 실패 시 0
     */
    int insertGeneral(General general);

    /**
     * 게시글 상세 조회 Service
     * @param generalNo 게시글 ID
     * @return 게시글 정보
     */
    General selectGeneralOne(Integer generalNo);

    /**
     * 게시글 목록 조회 Service
     * @return 게시글 목록
     */
    List<General> selectGeneralList();

    /**
     * 게시글 수정 Service
     * @param general 수정할 게시글 정보
     * @return 성공 시 1, 실패 시 0
     */
    int updateGeneral(General general);

    /**
     * 게시글 삭제 Service
     * @param generalNo 삭제할 게시글 ID
     * @return 성공 시 1, 실패 시 0
     */
    int deleteGeneral(Integer generalNo);
}
