package com.JustDoIt.Mecca.YHJ.service;

import com.JustDoIt.Mecca.YHJ.vo.Announce;

import java.util.List;
import java.util.Map;

public interface AnnounceService {

    /**
     * 문의글 작성 Service
     * @param announce
     */
    void insertAnnounce(Announce announce);

    /**
     * 문의글 목록 Service
     * @return
     */
    List<Map<String, Object>> getAnnounceList();
}
