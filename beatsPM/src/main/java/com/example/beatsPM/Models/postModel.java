package com.example.beatsPM.Models;

public class postModel {
    private String genre;
    private String postTitle;
    private String postBody;

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
}