package com.JustDoIt.Mecca.LCM.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {
    private String uEmail;
    private String uPassword;
    private String uNickname;
    private String uImage;
    private String uIntroduce;
    private int uStar;
    private Timestamp uStatus;
}
