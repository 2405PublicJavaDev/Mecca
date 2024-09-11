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
public class GeneralComment {
    private int gcNo;
    private int gcGNo; // 게시물 번호
    private String gcWriterEmail;
    private String gcNickname;
    private String gcContent;
    private Date gcCreatedDate;
}
