package com.JustDoIt.Mecca.YHJ.service;

import java.util.HashMap;

public interface KakaoSignUpService {

    /**
     * 카카오 AccessToken get
     * @param code
     * @return String
     */
    String getAccessToken(String code);

    /**
     * 카카오 유저 정보 get
     * @param accessToken
     * @return
     */
    HashMap<String, Object> getUserInfo(String accessToken);
}
