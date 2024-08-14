package com.revature.DAOs;

import com.revature.models.Reimbursement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.revature.models.User;

import org.springframework.data.jpa.repository.Query;
import com.revature.models.DTOs.*;

import java.util.List;

@Repository
public interface ReimbursementDAO extends JpaRepository<Reimbursement, Integer> {
    // Custom query method to find all reimbursements with status "Pending"
    @Query("SELECT new com.revature.models.DTOs.ReimbursementDTO(r.reimbursementId, r.amount, r.description, r.status, r.user.userId) FROM Reimbursement r WHERE r.status = 'Pending'")
    List<ReimbursementDTO> findPendingReimbursementsAsDTO();

    //custom query to Find all reimbursements by a specific user
    List<Reimbursement> findByUser(User user);

    // Find all pending reimbursements by a specific user
    List<Reimbursement> findByUserAndStatus(User user, String status);

    // Method to find all reimbursements for a specific user above a certain amount
    List<Reimbursement> findByUserAndAmountGreaterThan(User user, double amount);

    //get all reimbursement
    @Query("SELECT new com.revature.models.DTOs.ReimbursementDTO(r.reimbursementId, r.amount, r.description, r.status, r.user.userId) FROM Reimbursement r")
    List<ReimbursementDTO> findAllReimbursementsAsDTO();



}
