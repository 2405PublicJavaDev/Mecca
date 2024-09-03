package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.YHJ.service.KakaoSignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;

@Controller
@RequestMapping("/kakao")
public class KakaoSignUpController {

    private KakaoSignUpService service;

    public KakaoSignUpController() {}

    @Autowired
    public KakaoSignUpController(KakaoSignUpService service) {
        this.service = service;
    }

    @GetMapping("/signup")
    public String signUp(@RequestParam String code, Model model, RedirectAttributes redirectAttributes) {
        String accessToken = service.getAccessToken(code);

        // 액세스 토큰을 이용하여 카카오 서버에서 유저 정보(닉네임, 이메일) 받아오기
        HashMap<String, Object> userInfo = service.getUserInfo(accessToken);
        System.out.println("login Controller : " + userInfo);

        return accessToken;
    }
}