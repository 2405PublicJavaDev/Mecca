package com.JustDoIt.Mecca.LCM.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PasswordResetRequest {
    private String email;
    private String resetToken;
}
