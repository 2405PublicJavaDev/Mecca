package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.service.MailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MailServiceImpl implements MailService {

    private final JavaMailSender javaMailSender;
    private static final String senderEmail = "chaemin.office@gmail.com";

    @Autowired
    public MailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public String createString() {
        Random random = new Random();
        StringBuilder key = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(3);

            switch (index) {
                case 0 -> key.append((char) (random.nextInt(26) + 97)); // 소문자
                case 1 -> key.append((char) (random.nextInt(26) + 65)); // 대문자
                case 2 -> key.append(random.nextInt(10)); // 숫자
            }
        }
        return key.toString();
    }

    @Override
    public void sendVerifyCode(String uEmail, String verifyCode) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, uEmail);

        message.setSubject("[MeCCa] 이메일 인증");

        String body = "";
        body += "<h3>요청하신 인증 번호입니다.</h3>";
        body += "<h1>" + verifyCode + "</h1>";
        body += "<h3>감사합니다.</h3>";

        message.setText(body, "UTF-8", "html");

        javaMailSender.send(message);
    }

    @Override
    public void sendTemporaryPassword(String uEmail, String tempPassword) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, uEmail);

        message.setSubject("[MeCCa] 임시 비밀번호");

        String body = "<h3>귀하의 임시 비밀번호입니다.</h3>";
        body += "<h1>" + tempPassword + "</h1>";
        body += "<h3>비밀번호를 로그인 후 변경해 주세요.</h3>";

        message.setText(body, "UTF-8", "html");

        javaMailSender.send(message);
    }

    @Override
    public void sendResponseEmail(String uEmail, String subject, String content) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, uEmail);

        message.setSubject(subject);

        String body = content;

        message.setText(body, "UTF-8", "html");

        javaMailSender.send(message);
    }

    @Override
    public void sendPunishmentEmail(String uEmail, String punishmentPeriod) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, uEmail);

        message.setSubject("[MeCCa] 제재 안내");

        String body = "<h3>귀하의 제재 기간은 아래와 같습니다.</h3>";
        body += "<h1>" + punishmentPeriod + "</h1>";
        body += "<h3>상기 기간이 지나면 로그인할 수 있습니다.</h3>";

        message.setText(body, "UTF-8", "html");

        javaMailSender.send(message);
    }
}