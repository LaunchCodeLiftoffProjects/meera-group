package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

        @Autowired
        private PostRepository postRepository;

        @CrossOrigin(origins = "http://localhost:4200/createpost/")
        @PostMapping("/add")
        public ResponseEntity<Void> createPost(@RequestBody PostModel postModel) {
                postRepository.save(postModel);
                return new ResponseEntity<>(HttpStatus.CREATED);
                }
        }