package com.JustDoIt.Mecca.OJS.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ChatMessage {
    private String type;
    private String content;
    private String sender;
    private String roomId;


}