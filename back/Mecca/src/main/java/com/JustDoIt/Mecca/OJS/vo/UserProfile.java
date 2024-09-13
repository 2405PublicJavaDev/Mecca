package com.JustDoIt.Mecca.OJS.vo;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity

public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String email;
    @Lob
    private byte[] profileImage; // 이미지 데이터를 저장할 BLOB 필드



    // Getter 및 Setter
}
