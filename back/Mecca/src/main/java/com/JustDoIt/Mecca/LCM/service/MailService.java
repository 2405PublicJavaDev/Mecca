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
}
