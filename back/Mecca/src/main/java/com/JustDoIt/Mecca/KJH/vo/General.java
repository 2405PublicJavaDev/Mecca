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
    private int gcCount;
    private int gStar;

    public void setGcCount(int commentCount) {
        this.gcCount = commentCount;
    }

    public int getgNo() {
        return gNo;
    }

    public String getGNo() {
        return String.valueOf(gNo);
    }
}
