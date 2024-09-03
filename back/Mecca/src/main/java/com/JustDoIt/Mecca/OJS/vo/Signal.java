package com.JustDoIt.Mecca.OJS.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
public class Signal {
    private int signalNo;
    private int matchingNo;
    private String mainId;
    private String applicationId;
    private String applicationMessage;
    private String applicationSituation;
    private String gameSituation;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
    private Timestamp regDate;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
    private Timestamp updateDate;

    private int matchingmaxCount;
    private int matchingminCount;
}
