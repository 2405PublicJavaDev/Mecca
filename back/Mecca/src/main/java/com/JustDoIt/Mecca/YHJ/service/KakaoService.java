package com.JustDoIt.Mecca.YHJ.service;

import com.JustDoIt.Mecca.LCM.vo.User;

import java.util.HashMap;

public interface KakaoService {

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
