package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.CommentModel;
import com.example.beatsPM.Models.Data.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.xml.stream.events.Comment;
@CrossOrigin(origins = "*")
@Controller
public class CommentsController {

    @Autowired
    private CommentsRepository commentsRepository;


    @CrossOrigin(origins = "http://localhost:4200/forum")
    @PostMapping("/comments/add")
    public ResponseEntity<Void> createComment(@RequestBody CommentModel commentModel){
        System.out.println("This is the Comments Controller");
        System.out.println(commentModel.getPostId());

        commentsRepository.save(commentModel);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
