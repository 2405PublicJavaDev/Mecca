package com.JustDoIt.Mecca.YHJ.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Report {

    private int rNo;
    private String rWriterEmail;
    private String sTitle;
    private String rObjectNo;
    private String rOption;
    private Date rCreatedDate;
    private int sStatus;
}