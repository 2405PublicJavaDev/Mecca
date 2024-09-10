package com.JustDoIt.Mecca.LCM.service;

import java.util.List;

public interface RatingService {

    /**
     * 별점 1점 추가 Service
     * @param uEmail
     * @return int
     */
    int plusRate(String uEmail);

    /**
     * 별점 1점 제거 Service
     * @param uEmail
     * @return int
     */
    int minusRate(String uEmail);

    /**
     * 상위 랭킹 출력 Service
     * @return List
     */
    List getTopRatedUsers();
}
