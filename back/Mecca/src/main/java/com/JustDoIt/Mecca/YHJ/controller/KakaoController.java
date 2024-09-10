package com.JustDoIt.Mecca.YHJ.controller;

import com.JustDoIt.Mecca.LCM.service.UserService;
import com.JustDoIt.Mecca.LCM.vo.User;
import com.JustDoIt.Mecca.YHJ.service.KakaoService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class KakaoController {

    private KakaoService kakaoService;
    private UserService userService;

    public KakaoController() {}

    @Autowired
    public KakaoController(KakaoService kakaoService, UserService userService) {
        this.kakaoService = kakaoService;
        this.userService = userService;
    }

    @PostMapping("/kakao")
    public User kakaoCheck(@RequestBody Map<String, String> requestBody, HttpSession session) {
        String accessToken = kakaoService.getAccessToken(requestBody.get("code"));
        HashMap<String, Object> kakaoInfo = kakaoService.getUserInfo(accessToken);
        String email = (String) kakaoInfo.get("email");
        User user = userService.getUser(email, null);
        if (user != null) {
            session.setAttribute("uEmail", user.getUEmail());
            session.setAttribute("uNickname", user.getUNickname());
            return user;
        } else {
            User temp = new User();
            temp.setUEmail(email);
            return temp;
        }
    }
}