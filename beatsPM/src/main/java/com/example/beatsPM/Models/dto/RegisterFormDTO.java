package com.example.beatsPM.Models.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class RegisterFormDTO extends LoginFormDTO{
    @Email
    @NotNull
    String email;

    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
