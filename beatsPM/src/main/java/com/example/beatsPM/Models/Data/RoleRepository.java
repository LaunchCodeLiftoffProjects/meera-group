package com.example.beatsPM.Models.Data;

import com.example.beatsPM.Models.ERole;
import com.example.beatsPM.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
        Optional<Role> findByName(ERole name);
    }
}
