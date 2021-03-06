package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.CommentModel;
import com.example.beatsPM.Models.Data.CommentsRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.events.Comment;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@Controller
public class CommentsController {

    @Autowired
    private CommentsRepository commentsRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/comments")
    public @ResponseBody
    Iterable<CommentModel> getAllComments() {
        return commentsRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/comments/add")
    public ResponseEntity<Void> createComment(@RequestBody CommentModel commentModel){
        System.out.println("This is the Comments Controller");
//        System.out.println(commentModel.getPostId());

        commentsRepository.save(commentModel);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @CrossOrigin(origins = "*")
    @DeleteMapping("/comment_delete/{id}")
    public ResponseEntity<Long> deleteComment(@PathVariable Long id) {
            commentsRepository.deleteById(id);
            System.out.println("deleted?");
            return new ResponseEntity<Long>(HttpStatus.OK);
    };


}
