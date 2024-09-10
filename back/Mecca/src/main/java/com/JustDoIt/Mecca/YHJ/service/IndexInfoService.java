package com.JustDoIt.Mecca.YHJ.service;

import java.util.List;
import java.util.Map;

public interface IndexInfoService {

    /**
     * 자유 게시판 최근글 5개 조회 Service
     * @return List
     */
    List<Map<String, Object>> selectGeneralList();
}
