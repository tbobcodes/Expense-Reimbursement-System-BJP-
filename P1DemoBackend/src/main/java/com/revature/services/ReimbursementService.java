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
import com.revature.models.DTOs.*;

import java.util.List;
import java.util.Optional;

@Service
public class ReimbursementService {
    //autowire a CarDAO and UserDAO
    private ReimbursementDAO rDAO;

    @Autowired
    public ReimbursementService(ReimbursementDAO rDAO) {
        this.rDAO = rDAO;
    }

    //gets all reimbursements
    public List<ReimbursementDTO> getAllReimbursementsAsDTO() {
        return rDAO.findAllReimbursementsAsDTO();
    }

    // Method to get all reimbursements with "Pending" status and return them as DTOs
    public List<ReimbursementDTO> getPendingReimbursementsAsDTO() {
        return rDAO.findPendingReimbursementsAsDTO();
    }

    //update status of reimbursements
    public Optional<Reimbursement> resolveReimbursement(int id, String status) {
        ReimbursementStatus validStatus;
        try {
            validStatus = ReimbursementStatus.fromString(status);
        } catch (InvalidReimbursementStatusException e) {
            throw new InvalidReimbursementStatusException("Invalid status provided: " + status);
        }

        Optional<Reimbursement> reimbursementOptional = rDAO.findById(id);
        if (reimbursementOptional.isPresent()) {
            Reimbursement reimbursement = reimbursementOptional.get();
            reimbursement.setStatus(validStatus.name());
            rDAO.save(reimbursement);
            return Optional.of(reimbursement);
        }
        return Optional.empty();
    }

    //create a new reimbursement
    public Reimbursement createReimbursement(Reimbursement reimbursement) {
        return rDAO.save(reimbursement);
    }

    // Retrieve all reimbursements for a specific user
    public List<Reimbursement> getReimbursementsByUser(User user) {
        return rDAO.findByUser(user);
    }

    // Retrieve all pending reimbursements for a specific user
    public List<Reimbursement> getPendingReimbursementsByUser(User user) {
        return rDAO.findByUserAndStatus(user, "Pending");
    }

    // Retrieve all reimbursements for a user above a certain amount
    public List<Reimbursement> getReimbursementsByUserAndAmount(User user, double amount) {
        return rDAO.findByUserAndAmountGreaterThan(user, amount);
    }


}
