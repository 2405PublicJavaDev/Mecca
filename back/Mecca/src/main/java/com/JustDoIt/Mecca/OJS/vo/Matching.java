package com.JustDoIt.Mecca.OJS.vo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter 
@ToString
public class Matching {
	private int mNo;
	private String mWriterEmail;
	private String mNickname;
	private String mGenre;
	private String mTag;
	private String mContent;
	private int mMaxParty;
	private int mCurrentParty;
	private String mTierOrLevel;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM-dd HH:mm", timezone="Asia/Seoul")
	private Date mCreatedDate;
	private String mStatus;
	
}
