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
public class Report {
    private int rNo;
    private String rWriterEmail;
    private String rNickname;
    private int rObjectNo;
    private String rOption;
    private Timestamp rCreatedDate;
}
