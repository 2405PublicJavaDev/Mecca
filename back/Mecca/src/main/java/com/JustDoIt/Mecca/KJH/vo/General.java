package com.JustDoIt.Mecca.KJH.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class General {
    private int gNo;
    private String gWriterEmail;
    private String gNickname;
    private String gTitle;
    private String gContent;
    private Date gCreatedDate;
    private int gView;
    private int gLike;
}
