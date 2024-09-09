package com.JustDoIt.Mecca.LCM.service.impl;

import com.JustDoIt.Mecca.LCM.mapper.PuserMapper;
import com.JustDoIt.Mecca.LCM.service.PasswordResetService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PasswordResetServiceImpl implements PasswordResetService {

    private final PuserMapper userMapper;
    private final JavaMailSender mailSender;
    private final PuserMapper puserMapper;

    public PasswordResetServiceImpl(PuserMapper PuserMapper, JavaMailSender mailSender, PuserMapper puserMapper) {
        this.userMapper = puserMapper;
        this.mailSender = mailSender;
        this.puserMapper = puserMapper;
    }

    // 1. 이메일로 비밀번호 재설정 링크 발송
    @Override
    public void sendPasswordResetLink(String email) throws MessagingException {
        String token = UUID.randomUUID().toString();  // 고유 토큰 생성
        userMapper.saveResetToken(email, token);  // 이메일과 토큰 저장

        // 메일 전송
        MimeMessage message = mailSender.createMimeMessage();
        message.setSubject("비밀번호 재설정 링크");
        message.setText("비밀번호를 재설정하려면 아래 링크를 클릭하세요:\n" +
                "http://localhost:8080/password/reset?token=" + token);
        message.setRecipients(MimeMessage.RecipientType.TO, email);
        mailSender.send(message);
    }

    // 2. 비밀번호 재설정
    @Override
    public boolean resetPassword(String token, String newPassword) {
        String email = userMapper.findEmailByToken(token);
        if (email != null) {
            userMapper.updatePassword(email, newPassword);  // 비밀번호 업데이트
            userMapper.deleteResetToken(email);  // 토큰 삭제
            return true;
        }
        return false;
    }
}
