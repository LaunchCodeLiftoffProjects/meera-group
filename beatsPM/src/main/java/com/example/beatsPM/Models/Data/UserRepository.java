package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 Optional<User> findByUsername(String username);

 Boolean existsByUsername(String username);

 Boolean existsByEmail(String email);
}
