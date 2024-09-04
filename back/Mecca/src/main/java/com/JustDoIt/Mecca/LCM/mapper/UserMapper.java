package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.LCM.vo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    /**
     * 유저 가입 Mapper
     * @return
     */
    int insertUser(User user);

    /**
     * 유저 로그인 Mapper
     * @return
     */
    int selectUser();

    /**
     * 유저 수정(마이 페이지 정보 수정) Mapper
     * @return
     */
    int updateUser();

    /**
     * 유저 삭제(회원 탈퇴) Mapper
     * @return
     */
    int deleteUser(String uEmail);
}
