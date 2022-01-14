package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends CrudRepository <User, Integer> {
 User findByUsername(String username);
}
