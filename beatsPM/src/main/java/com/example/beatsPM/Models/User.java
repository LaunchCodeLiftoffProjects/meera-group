package com.example.beatsPM.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User {
    @NotNull
    @Size (min = 6)
    private String username;
    @Email
    @NotNull
    private String email;
    @NotNull
    @Size(min = 8)
    private String password;
    @GeneratedValue
    @Id
    private int userId;

    public User () {};
}
