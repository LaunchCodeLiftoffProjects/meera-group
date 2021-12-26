package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.PostModel;
import org.springframework.data.repository.CrudRepository;
//import beatsPM/src/main/java/com/example/beatsPM/Models/postModel.java;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface PostRepository extends CrudRepository<PostModel, Integer> {

}
