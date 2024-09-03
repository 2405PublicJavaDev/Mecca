package com.JustDoIt.Mecca.OJS.vo;

import java.sql.Timestamp;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter 
@ToString
public class Matching {
	private int matchingNo;
	private String matchingCatagory;
	private String matchingGame;
	private String matchingId;
	private String memberId;
	private String matchingGrade;
	private String matchingContent;
	private int matchingmaxCount;
	private int matchingminCount;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
	private Timestamp matchingDate;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
	private Timestamp updateDate;
	
	
}
