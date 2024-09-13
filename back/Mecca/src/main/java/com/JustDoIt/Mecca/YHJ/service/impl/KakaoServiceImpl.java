package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.service.KakaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class KakaoServiceImpl implements KakaoService {
    private RestTemplate restTemplate;

    public KakaoServiceImpl() {}

    @Autowired
    public KakaoServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private static final String clientId = "25431136bde1cd0a177ed0354aca3557";
    private static final String redirectUri = "http://127.0.0.1:3000/kakao/callback";
//    private static final String redirectUri = "http://192.168.60.205/kakao/callback";
    private static final String tokenUri = "https://kauth.kakao.com/oauth/token";

    @Override
    public String getAccessToken(String code) {
        // Access Token 요청을 위한 파라미터 설정
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectUri);
        params.add("code", code);

        // 카카오로 요청
        ResponseEntity<Map> response = restTemplate.postForEntity(tokenUri, params, Map.class);

        // 응답 처리
        Map responseBody = response.getBody();

        return (String) responseBody.get("access_token");
    }

    @Override
    public HashMap<String, Object> getUserInfo(String accessToken) {
        HashMap<String, Object> kakaoInfo = new HashMap<>();
        String postURL = "https://kapi.kakao.com/v2/user/me";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<Map> response = restTemplate.exchange(postURL, HttpMethod.POST, entity, Map.class);

        Map<String, Object> body = response.getBody();
        if (body != null) {
            Map<String, Object> kakaoAccount = (Map<String, Object>) body.get("kakao_account");
//            Map<String, Object> properties = (Map<String, Object>) body.get("properties");

            String email = (String) kakaoAccount.get("email");
//            String nickname = (String) properties.get("nickname");

            kakaoInfo.put("email", email);
//            userInfo.put("nickname", nickname);
        }
        return kakaoInfo;
    }
}
