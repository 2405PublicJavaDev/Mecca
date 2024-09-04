package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.KakaoSignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/api")
public class KakaoSignUpController {

    private KakaoSignUpService service;

    public KakaoSignUpController() {}

    @Autowired
    public KakaoSignUpController(KakaoSignUpService service) {
        this.service = service;
    }

    @PostMapping("/kakao")
    public ResponseEntity<Map<String, Object>> kakao(@RequestBody Map<String, String> requestBody) {
        String accessToken = service.getAccessToken(requestBody.get("code"));
        HashMap<String, Object> userInfo = service.getUserInfo(accessToken);
        return ResponseEntity.ok(userInfo);
    }
}