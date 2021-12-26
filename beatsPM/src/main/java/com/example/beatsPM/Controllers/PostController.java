package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import static java.util.stream.Collectors.toList;
import static org.springframework.http.ResponseEntity.status;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Controller
public class PostController {

        @Autowired
        private PostRepository postRepository;

        @PostMapping("/add")
        public ResponseEntity<Void> createPost(@RequestBody PostModel postModel) {
                postRepository.save(postModel);
                return new ResponseEntity<>(HttpStatus.CREATED);
                }

        @GetMapping("/forum")
        public List<PostModel> getAllPosts() {
                return StreamSupport.stream(postRepository.findAll().spliterator(), false)
                        .collect(Collectors.toList());
        }
        };

