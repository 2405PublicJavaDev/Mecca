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
    private String gTitle;
    private String gContent;
    private Date gCreatedDate;
    private int gView;
    private int gLike;
    private String gNickname; // 추가된 필드
    private int gStar; // 추가된 필드
    private int gcCount; // 댓글 수 필드 추가

    public void setGcCount(int commentCount) {
        this.gcCount = commentCount;
    }
}
