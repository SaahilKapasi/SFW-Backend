package org.sfw.studentsforwishes.services;

import org.sfw.studentsforwishes.data.User;
import org.sfw.studentsforwishes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(String email, User update) {
        userRepository.findByEmail(email).map(user -> {
            user.setFirstName(update.getFirstName());
            user.setLastName(update.getLastName());
            return userRepository.save(user);
        });
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public List<User> getVolunteers() { return userRepository.findByVolunteerTrue(); }
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
