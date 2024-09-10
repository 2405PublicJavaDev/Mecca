package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.LCM.vo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    /**
     * 유저 가입 Mapper
     * @param user
     * @return int
     */
    int signUpUser(User user);

    /**
     * 유저 로그인 Mapper
     * @param user
     * @return User
     */
    User signInUser(User user);

    /**
     * 유저 수정(마이 페이지 정보 수정) Mapper
     * @param user
     * @return int
     */
    int updateUser(User user);

    /**
     * 유저 삭제(회원 탈퇴) Mapper
     * @param uEmail
     * @return int
     */
    int deleteUser(String uEmail);

    /**
     * 유저 비밀번호 변경 Mapper
     * @param user
     * @return int
     */
    int updatePassword(User user);

    /**
     * 유저 정보 조회 Mapper
     * @param uEmail
     * @return User
     */
    @Select("SELECT * FROM USER_TBL WHERE U_EMAIL = #{uEmail} OR U_NICKNAME = #{uNickname}")
    User getUser(String uEmail, String uNickname);
}
