package com.JustDoIt.Mecca.LCM.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PuserMapper {
    /**
     * 비밀번호 재설정 토근 저장
     * @param email
     * @param token
     */
    void saveResetToken(@Param("email") String email, @Param("token") String token);

    /**
     * 토큰으로 이메일 찾기
     * @param token
     * @return
     */
    String findEmailByToken(String token);

    /**
     * 비밀번호 업데이트
     * @param email
     * @param newPassword
     */
    void updatePassword(@Param("email") String email, @Param("newPassword") String newPassword);

    /**
     * 토큰 삭제
     * @param email
     */
    void deleteResetToken(String email);
}
