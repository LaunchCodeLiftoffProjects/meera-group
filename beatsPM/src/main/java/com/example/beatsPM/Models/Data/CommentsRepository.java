package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.CommentModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface CommentsRepository extends CrudRepository <CommentModel, Integer> {


}
