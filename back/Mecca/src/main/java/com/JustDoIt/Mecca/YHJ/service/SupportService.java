package com.JustDoIt.Mecca.YHJ.service;

import com.JustDoIt.Mecca.YHJ.vo.Support;

import java.util.List;
import java.util.Map;

public interface SupportService {

    /**
     * 문의글 작성 Service
     * @param support
     */
    void insertSupport(Support support);

    /**
     * 문의글 목록 Service
     * @return
     */
    List<Map<String, Object>> getSupportList();
}
