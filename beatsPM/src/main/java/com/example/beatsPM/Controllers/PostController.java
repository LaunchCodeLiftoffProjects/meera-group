package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import com.example.beatsPM.Models.Services.IPostService;
import com.example.beatsPM.Models.Services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Optional;


@CrossOrigin(origins = "*")
@Controller
public class PostController {

        @Autowired
        private PostRepository postRepository;

        @Autowired
        private IPostService postService;

        // controller used to edit posts using http methods into the controller
        @CrossOrigin(origins = "http://localhost:4200/edit")
        @PutMapping ("/edit/{id}")
        public ResponseEntity<PostModel> editPost(@Valid @RequestBody PostModel newPost, @PathVariable int id) {
                System.out.println(id);
                PostModel post = postRepository.findById(id).orElseThrow();

                System.out.println(post.getGenre());
                                post.setPostBody(newPost.getPostBody());
                                post.setPostTitle(newPost.getPostTitle());
                                post.setGenre(newPost.getGenre());
                                final PostModel updatedPost = postRepository.save(post);
                                return ResponseEntity.ok(updatedPost);
        }


        // controller used to add a post into the forum
        @CrossOrigin(origins = "http://localhost:4200/add")
        @PostMapping("/add")
        public ResponseEntity<Void> createPost(@RequestBody PostModel postModel) {
                postRepository.save(postModel);
                return new ResponseEntity<>(HttpStatus.CREATED);
                }

        //controller used to get all the posts to build forum on front end
        @CrossOrigin(origins = "http://localhost:4200/forum")
        @GetMapping("/forum")
        public @ResponseBody Iterable<PostModel> getAllPosts() {
                return postRepository.findAll();
        }


        // controller used to get posts by their Id
        @GetMapping("/viewpost/{id}")
        public @ResponseBody PostModel getPostById(@PathVariable int id) {

                var val = postService.findById(id);


                        System.out.println(val.get());
                        return val.get();


        }


        //controller used to delete a post from the database
        @CrossOrigin(origins = "*")
        @DeleteMapping(value = "/forum/{id}")
        public ResponseEntity<Long> deletePost(@PathVariable int id) {
                postRepository.deleteById(id);
                return new ResponseEntity<Long>(HttpStatus.OK);
        };



}


