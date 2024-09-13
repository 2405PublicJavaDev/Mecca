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
public class Support {

    private int sNo;
    private String sWriterEmail;
    private String sTitle;
    private String sContent;
    private Date sCreatedDate;
    private String sStatus;
}