package com.revature.services;

import com.revature.DAOs.ReimbursementDAO;
import com.revature.DAOs.UserDAO;
import com.revature.models.Reimbursement;
import com.revature.models.ReimbursementStatus;
import com.revature.models.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.exceptions.InvalidReimbursementStatusException;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {

    //autowire a CarDAO and UserDAO
    private UserDAO uDAO;
    private ReimbursementDAO rDAO;

    @Autowired
    public UserService(UserDAO uDAO,ReimbursementDAO rDAO) {
        this.uDAO = uDAO;
        this.rDAO = rDAO;
    }

    //gets all users
    public List<User> getAllUsers(){
        return uDAO.findAll();
    }

    //deletes all users
    @Transactional
    public void deleteUserById(int userId) {
        // First, delete all associated reimbursements
        rDAO.deleteById(userId);

        // Then, delete the user
        uDAO.customDeleteById(userId);
    }

    //create a new user
    public User createUser(User user) {
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("Employee");  // Set default role if none is provided
        }
        return uDAO.save(user);
    }
}
