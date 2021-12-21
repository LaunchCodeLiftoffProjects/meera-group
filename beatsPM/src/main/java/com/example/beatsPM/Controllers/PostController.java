package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class PostController {

        @Autowired
        private PostRepository postRepository;

        @PostMapping("/add")
        public void addPost(PostModel postModel) {
                postRepository.save(postModel);
        }

        }