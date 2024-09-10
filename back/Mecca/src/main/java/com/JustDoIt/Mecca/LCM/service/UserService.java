package com.JustDoIt.Mecca.LCM.service;

import com.JustDoIt.Mecca.LCM.vo.User;

public interface UserService {

    /**
     * 유저 가입 Service
     * @param user
     * @return int
     */
    int signUpUser(User user);

    /**
     * 유저 로그인 Service
     * @param user
     * @return int
     */
    User signInUser(User user);

    /**
     * 유저 수정 Service
     * @param user
     * @return int
     */
    int updateUser(User user);

    /**
     * 유저 탈퇴 Service
     * @param uEmail
     * @return int
     */
    int deleteUser(String uEmail);

    /**
     * 유저 비밀번호 변경 Service
     * @param user
     * @return int
     */
    int updatePassword(User user);

    /**
     * 유저 정보 조회 Service
     * @param uEmail
     * @param uNickname
     * @return User
     */
    User getUser(String uEmail, String uNickname);
}
