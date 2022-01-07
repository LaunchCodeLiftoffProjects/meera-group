package com.example.beatsPM.Controllers;

import com.example.beatsPM.Models.Data.UserRepository;
import com.example.beatsPM.Models.User;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpSession;
import java.util.Optional;

//Authentication
public class UserController {
    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";
    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getUserId());
    }
}
