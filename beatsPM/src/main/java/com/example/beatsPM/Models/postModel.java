package com.example.beatsPM.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class postModel {
    @NotNull
    private String genre;
    @NotNull
    private String postTitle;
    @NotNull
    private String postBody;
    @GeneratedValue
    @Id
    private int postId;

    public postModel() {

    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostBody() {
        return postBody;
    }

    public void setPostBody(String postBody) {
        this.postBody = postBody;
    }

    public int getPostId() {
        return postId;
    }
}