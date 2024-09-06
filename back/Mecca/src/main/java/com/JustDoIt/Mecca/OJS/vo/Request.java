package com.JustDoIt.Mecca.OJS.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Request {
    private int mrNo;
    private String mrWriterEmail;
    private int mrMNo;
    private String mrRequesterEmail;
    private String mrRequesterNickname;
    private String mrStatus;
//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
//    private Timestamp regDate;
//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
//    private Timestamp updateDate;

    private int mMaxParty;
    private int mCurrentParty;
    private String mStatus;
}
