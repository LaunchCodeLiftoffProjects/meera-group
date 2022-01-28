package com.example.beatsPM.Models;



import javax.persistence.*;
import javax.validation.constraints.NotNull;

import static javax.persistence.FetchType.LAZY;

@Entity

public class CommentModel {
    @NotNull
    private String commentBody;

//    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "postId", referencedColumnName = "postId")
    @NotNull
    private Integer postId;

    @GeneratedValue
    @Id
    private Long commentId;

    public CommentModel () {

    }

    public String getCommentBody() {
        return commentBody;
    }

    public void setCommentBody(String commentBody) {
        this.commentBody = commentBody;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public Long getCommentId() {
        return commentId;
    }

}
