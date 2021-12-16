package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.postModel;
import org.springframework.data.repository.CrudRepository;
//import beatsPM/src/main/java/com/example/beatsPM/Models/postModel.java;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface postRepository extends CrudRepository<postModel, Integer> {
}
