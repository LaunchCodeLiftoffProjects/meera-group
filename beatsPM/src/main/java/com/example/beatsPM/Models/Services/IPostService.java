package com.example.beatsPM.Models.Services;

import com.example.beatsPM.Models.PostModel;

import java.util.Optional;

public interface IPostService {

    Optional<PostModel> findById(int id);
}
