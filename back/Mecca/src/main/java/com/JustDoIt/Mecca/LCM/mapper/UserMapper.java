package com.JustDoIt.Mecca.LCM.mapper;

import com.JustDoIt.Mecca.LCM.vo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    /**
     * 유저 가입 Mapper
     * @return
     */
    int signUpUser(User user);


    /**
     * 유저 로그인 Mapper
     * @return
     */
    User signInUser(User user);

    /**
     * 유저 존재 여부 확인 Mapper
     * @param uEmail
     * @return
     */
    @Select("SELECT * FROM USER_TBL WHERE U_EMAIL = #{uEmail} OR U_NICKNAME = #{uNickname}")
    User getUser(String uEmail, String uNickname);

    /**
     * 유저 정보 조회 Mapper
     * @return
     */
    @Select("SELECT * FROM USER_TBL WHERE U_EMAIL = #{uEmail}")
    User selectUserByEmail(String uEmail);

    /**
     * 유저 수정(마이 페이지 정보 수정) Mapper
     * @return
     */
    int updateUser(User user);

    /**
     * 유저 삭제(회원 탈퇴) Mapper
     * @return
     */
    int deleteUser(String uEmail);


    /**
     * 유저 비밀번호 변경 Mapper
     * @param user
     * @return
     */
    int updatePassword(User user);
}