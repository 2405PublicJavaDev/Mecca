package com.JustDoIt.Mecca.YHJ.service.impl;

import com.JustDoIt.Mecca.YHJ.mapper.KakaoSignUpMapper;
import com.JustDoIt.Mecca.YHJ.service.KakaoSignUpService;
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
public class KakaoSignUpServiceImpl implements KakaoSignUpService {
    private KakaoSignUpMapper mapper;
    private RestTemplate restTemplate;

    public KakaoSignUpServiceImpl() {}

    @Autowired
    public KakaoSignUpServiceImpl(KakaoSignUpMapper mapper, RestTemplate restTemplate) {
        this.mapper = mapper;
        this.restTemplate = restTemplate;
    }

    private static final String clientId = "25431136bde1cd0a177ed0354aca3557";
    private static final String redirectUri = "http://localhost:3000/kakao/callback";
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
        HashMap<String, Object> userInfo = new HashMap<>();
        String postURL = "https://kapi.kakao.com/v2/user/me";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<Map> response = restTemplate.exchange(postURL, HttpMethod.POST, entity, Map.class);

        Map<String, Object> body = response.getBody();
        if (body != null) {
//            Map<String, Object> properties = (Map<String, Object>) body.get("properties");
            Map<String, Object> kakaoAccount = (Map<String, Object>) body.get("kakao_account");

//            String nickname = (String) properties.get("nickname");
            String email = (String) kakaoAccount.get("email");

//            userInfo.put("nickname", nickname);
            userInfo.put("email", email);
        }
        return userInfo;
    }
}
