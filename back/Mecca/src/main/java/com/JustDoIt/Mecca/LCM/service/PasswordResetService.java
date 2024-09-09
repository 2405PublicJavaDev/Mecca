package com.JustDoIt.Mecca.LCM.service;

import jakarta.mail.MessagingException;

public interface PasswordResetService {

    /**
     * 비밀번호 재설정 링크 발송 Service
     * @param email
     * @throws MessagingException
     */
    void sendPasswordResetLink(String email) throws MessagingException;

    /**
     * 비밀번호 재설정 처리
     * @param token
     * @param newPassword
     * @return
     */
    boolean resetPassword(String token, String newPassword);
}
