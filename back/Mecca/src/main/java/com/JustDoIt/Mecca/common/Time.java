package com.JustDoIt.Mecca.common;

import java.sql.Timestamp;

public class Time {

    private String timeStamp; // String으로 선언해 줄 것 - "1 일전", "12 시간 전" ..

    public String getDate() {
        return timeStamp;
    }
    public void setDate(Timestamp timeStamp) {
        this.timeStamp = TimeConfig.calculateTime(timeStamp); // 기존의 getter, setter에서 변경된 부분
    }
}
