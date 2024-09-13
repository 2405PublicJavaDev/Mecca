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
public class Announce {

    private int aNo;
    private String aWriterEmail;
    private String aTitle;
    private String aContent;
    private Date aCreatedDate;
}