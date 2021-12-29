package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@CrossOrigin(origins = "*")
@Controller
public class PostController {

        @Autowired
        private PostRepository postRepository;

        @CrossOrigin(origins = "http://localhost:4200/add")
        @PostMapping("/add")
        public ResponseEntity<Void> createPost(@RequestBody PostModel postModel) {
                postRepository.save(postModel);
                return new ResponseEntity<>(HttpStatus.CREATED);
                }

        @CrossOrigin(origins = "http://localhost:4200/forum")
        @GetMapping("/forum")
        public @ResponseBody Iterable<PostModel> getAllPosts() {
                return postRepository.findAll();
        }

        @CrossOrigin(origins = "*")
        @DeleteMapping(value = "/forum/{id}")
        public ResponseEntity<Long> deleteEmployee(@PathVariable int id) {
                postRepository.deleteById(id);
                return new ResponseEntity<Long>(HttpStatus.OK);
                }
        }


