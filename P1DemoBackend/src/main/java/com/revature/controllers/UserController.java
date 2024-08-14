package com.revature.controllers;

import com.revature.models.Reimbursement;
import com.revature.models.User;
import com.revature.services.ReimbursementService;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.revature.exceptions.InvalidReimbursementStatusException;

import java.util.List;
import java.util.Optional;

@RestController // Makes the class a Spring bean and turns all HTTP response data into JSON
@RequestMapping("/Users") // All HTTP requests ending in /Reimbursements will come to this Controller
@CrossOrigin // Allow HTTP requests from all origins (otherwise, you'll get CORS errors)

public class UserController {
    // Autowire the ReimbursementService
    private UserService us;

    @Autowired
    public UserController(UserService us) {
        this.us = us;
    }

    // This method will return all users in the HTTP response
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        // Let's make this a one-liner just because we can
        return ResponseEntity.ok(us.getAllUsers());
    }

    //delete user and corresponding reimbursement
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserById(@PathVariable int userId) {
        us.deleteUserById(userId);
        return ResponseEntity.noContent().build();
    }

    //create a new user with a default employee role
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = us.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
}
