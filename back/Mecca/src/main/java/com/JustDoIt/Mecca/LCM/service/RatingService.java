package com.JustDoIt.Mecca.LCM.service;

import java.util.List;
import java.util.Map;

public interface RatingService {

    /**
     * 별점 1점 추가 Service
     * @return
     */
    int plusRate(String uEmail);

    /**
     * 별점 1점 제거 Service
     * @param uEmail
     * @return
     */
    int minusRate(String uEmail);

    /**
     * 상위 랭킹 출력 Service
     * @return
     */
    List<Map<String, Object>> getTopRatedUsers();
}
