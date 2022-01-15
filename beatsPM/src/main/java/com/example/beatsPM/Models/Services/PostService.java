package com.example.beatsPM.Models.Services;


import com.example.beatsPM.Models.Data.PostRepository;
import com.example.beatsPM.Models.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService implements IPostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public Optional<PostModel> findById(int id) {
        return postRepository.findById(id);
    }
}
