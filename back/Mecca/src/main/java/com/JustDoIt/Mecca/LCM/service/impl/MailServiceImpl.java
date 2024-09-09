package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.mapper.UserMapper;
import com.JustDoIt.Mecca.LCM.service.MailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class MailServiceImpl implements MailService {

    private final JavaMailSenderImpl mailSender;
    private JavaMailSender javaMailSender;
    private static final String senderEmail = "chaemin.office@gmail.com";

    private final UserMapper userMapper;

    @Autowired
    public MailServiceImpl(JavaMailSender javaMailSender, UserMapper userMapper, JavaMailSenderImpl mailSender) {
        this.javaMailSender = javaMailSender;
        this.userMapper = userMapper;
        this.mailSender = mailSender;
    }

    // 랜덤 숫자 생성
    @Override
    public String createNumber() {
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

    // 메일 생성
    @Override
    public MimeMessage createMail(String mail, String number) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, mail);
        message.setSubject("이메일 인증");
        String body = "";
        body += "<h3>요청하신 인증 번호입니다.</h3>";
        body += "<h1>" + number + "</h1>";
        body += "<h3>감사합니다.</h3>";
        message.setText(body, "UTF-8", "html");

        return message;
    }

    // 메일 발송
    @Override
    public String sendSimpleMessage(String sendEmail) throws MessagingException {
        String number = createNumber();
        MimeMessage message = createMail(sendEmail, number);
        javaMailSender.send(message);
        return number;
    }

    // 임시 비밀번호 생성
    @Override
    public String generateTemporaryPassword() {
        Random random = new Random();
        StringBuilder tempPassword = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            int index = random.nextInt(3);

            switch (index) {
                case 0 -> tempPassword.append((char) (random.nextInt(26) + 97)); // 소문자
                case 1 -> tempPassword.append((char) (random.nextInt(26) + 65)); // 대문자
                case 2 -> tempPassword.append(random.nextInt(10)); // 숫자
            }
        }
        return tempPassword.toString();
    }

    // 임시 비밀번호를 생성하여 메일 발송
    @Override
    public String sendTemporaryPassword(String mail, String tempPassword) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        message.setFrom(senderEmail);
        message.setRecipients(MimeMessage.RecipientType.TO, mail);
        message.setSubject("임시 비밀번호");
        String body = "<h3>귀하의 임시 비밀번호입니다.</h3>";
        body += "<h1>" + tempPassword + "</h1>";
        body += "<h3>비밀번호를 로그인 후 변경해 주세요.</h3>";
        message.setText(body, "UTF-8", "html");

        javaMailSender.send(message);
        return tempPassword;
    }

    // DB에서 비밀번호 업데이트
    @Override
    public void tempPassword(String email, String password) {
        userMapper.tempPassword(email, password);
    }

    @Override
    public void sendResponseEmail(String recipientEmail, String subject, String content) {
        Map<String, Object> model = new HashMap<>();
        model.put("subject", subject);
        model.put("content", content);

        String text = "";
        try {
//            text = FreeMarkerTemplateUtils.processTemplateIntoString(
//                    freemarkerConfigurer.getConfiguration().getTemplate("responseEmailTemplate.html"), model);
        } catch (Exception e) {
            e.printStackTrace();
        }

        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(recipientEmail);
            helper.setSubject(subject);
            helper.setText(text, true);  // true indicates the content is HTML
            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}