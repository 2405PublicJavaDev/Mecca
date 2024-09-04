package com.JustDoIt.Mecca.LCM.service;

import com.JustDoIt.Mecca.LCM.vo.User;

public interface UserService {

    /**
     * 유저 가입 Service
     * @return
     */
    int insertUser(User user);

    /**
     * 유저 로그인 Service
     * @return
     */
    int selectUser(User user);

    /**
     * 유저 수정 Service
     * @return
     */
    int updateUser();

    /**
     * 유저 삭제 Service
     * @return
     */
    int deleteUser(String uEmail);
}
