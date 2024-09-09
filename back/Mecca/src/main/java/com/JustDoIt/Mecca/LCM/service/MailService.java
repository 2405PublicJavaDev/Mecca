package com.JustDoIt.Mecca.LCM.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.stereotype.Service;

@Service
public interface MailService {

    /**
     * 랜덤 숫자 생성 Service
     * @return
     */
    String createNumber();

    /**
     * 메일 생성 Service
     * @param mail
     * @param number
     * @return
     * @throws MessagingException
     */
    MimeMessage createMail(String mail, String number) throws MessagingException;

    /**
     * 메일 발송 Service
     * @param sendEmail
     * @return
     * @throws MessagingException
     */
    String sendSimpleMessage(String sendEmail) throws MessagingException;

    /**
     * 임시 비밀번호 생성
     * @return 임시 비밀번호
     */
    String generateTemporaryPassword();

    /**
     * 임시 비밀번호를 생성하여 메일 발송
     * @param email 수신자의 이메일
     * @param temporaryPassword 임시 비밀번호
     * @return 임시 비밀번호
     * @throws MessagingException
     */
    String sendTemporaryPassword(String email, String temporaryPassword) throws MessagingException;

    /**
     * DB에서 비밀번호 업데이트
     * @param email
     * @param password
     */
    void tempPassword(String email, String password);

    /**
     *
     * @param recipientEmail
     * @param subject
     * @param content
     */
    void sendResponseEmail(String recipientEmail, String subject, String content);
}
