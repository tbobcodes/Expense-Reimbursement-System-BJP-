package com.revature.DAOs;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
    // Custom query method to find a user by email
    User findByEmail(String email);

    //delete by user id modified
    @Modifying
    @Transactional
    @Query("DELETE FROM User u WHERE u.userId = :userId")
    void customDeleteById(int userId);
}