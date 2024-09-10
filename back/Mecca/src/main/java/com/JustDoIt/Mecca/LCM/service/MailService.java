package com.JustDoIt.Mecca.LCM.service;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

@Service
public interface MailService {

    /**
     * 랜덤 문자 생성 Service
     * @return String
     */
    String createString();

    /**
     * 인증 메일 발송 Service
     * @param uEmail
     * @param verifyCode
     * @throws MessagingException
     */
    void sendVerifyCode(String uEmail, String verifyCode) throws MessagingException;

    /**
     * 임시 비밀번호 발송 Service
     * @param uEmail
     * @param temporaryPassword
     * @throws MessagingException
     */
    void sendTemporaryPassword(String uEmail, String temporaryPassword) throws MessagingException;

    /**
     * 문의 답변 메일 발송 Service
     * @param uEmail
     * @param subject
     * @param content
     * @throws MessagingException
     */
    void sendResponseEmail(String uEmail, String subject, String content) throws MessagingException;

    /**
     * 제재 알림 메일 발송 Service
     * @param uEmail
     * @param punishmentPeriod
     * @throws MessagingException
     */
    void sendPunishmentEmail(String uEmail, String punishmentPeriod) throws MessagingException;
}
