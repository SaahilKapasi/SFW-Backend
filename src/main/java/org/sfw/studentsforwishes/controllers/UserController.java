package org.sfw.studentsforwishes.controllers;

import org.sfw.studentsforwishes.data.User;
import org.sfw.studentsforwishes.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        try {
            List<User> users = userService.getUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }

    @PutMapping
    public void updateUser(@RequestBody String email, @RequestBody User user) {
        userService.updateUser(email, user);
    }

    @DeleteMapping
    public void deleteUser(@RequestBody String email) {
        userService.deleteUser(email);
    }

}
