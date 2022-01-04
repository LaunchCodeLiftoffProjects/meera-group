package com.example.beatsPM.Models;

import com.example.beatsPM.Models.Data.PostRepository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

public class PostData {

    PostRepository postRepository;

    public static ArrayList<PostModel> findByValue(String value, Iterable<PostModel> allPosts) {
        String lower_val = value.toLowerCase();
        ArrayList<PostModel> results = new ArrayList<>();

        for (PostModel post : allPosts) {

            if (post.getGenre().toLowerCase().contains(lower_val)) {
                results.add(post);
            } else if (post.getPostTitle().toString().toLowerCase().contains(lower_val)) {
                results.add(post);
            } else if (post.getPostBody().toString().toLowerCase().contains(lower_val)) {
                results.add(post);
            }
        }
        return results;
    }
}
