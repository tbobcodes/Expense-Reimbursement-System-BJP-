package com.revature.controllers;

import com.revature.models.DTOs.ReimbursementDTO;
import com.revature.models.Reimbursement;
import com.revature.services.ReimbursementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.revature.exceptions.InvalidReimbursementStatusException;
import com.revature.models.User;

import java.util.List;
import java.util.Optional;

@RestController // Makes the class a Spring bean and turns all HTTP response data into JSON
@RequestMapping("/Reimbursements") // All HTTP requests ending in /Reimbursements will come to this Controller
@CrossOrigin // Allow HTTP requests from all origins (otherwise, you'll get CORS errors)
public class ReimbursementController {

    // Autowire the ReimbursementService
    private ReimbursementService rs;

    @Autowired
    public ReimbursementController(ReimbursementService rs) {
        this.rs = rs;
    }

    // This method will return all reimbursements in the HTTP response
    @GetMapping
    public ResponseEntity<List<ReimbursementDTO>> getAllReimbursementsAsDTO() {
        List<ReimbursementDTO> reimbursements = rs.getAllReimbursementsAsDTO();
        return ResponseEntity.ok(reimbursements);
    }

    // Endpoint to get all reimbursements with "Pending" status and return them as DTOs
    @GetMapping("/pending")
    public ResponseEntity<List<ReimbursementDTO>> getPendingReimbursementsAsDTO() {
        List<ReimbursementDTO> reimbursements = rs.getPendingReimbursementsAsDTO();
        return ResponseEntity.ok(reimbursements);
    }

    //updates the status of reimbursements
    @PutMapping("/{id}/resolve")
    public ResponseEntity<Reimbursement> resolveReimbursement(
            @PathVariable int id,
            @RequestParam String status) {
        try {
            Optional<Reimbursement> reimbursement = rs.resolveReimbursement(id, status);
            return reimbursement.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        } catch (InvalidReimbursementStatusException ex) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception ex) {
            // For any other unexpected exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @ExceptionHandler(InvalidReimbursementStatusException.class)
    public ResponseEntity<String> handleInvalidStatusException(InvalidReimbursementStatusException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    //create a new reimbursement
    @PostMapping
    public ResponseEntity<Reimbursement> createReimbursement(@RequestBody Reimbursement reimbursement) {
        Reimbursement createdReimbursement = rs.createReimbursement(reimbursement);
        return new ResponseEntity<>(createdReimbursement, HttpStatus.CREATED);
    }

    // Endpoint to get all reimbursements for the authenticated user
    @GetMapping("/my-reimbursements")
    public ResponseEntity<List<Reimbursement>> getMyReimbursements(@RequestBody User user) {
        List<Reimbursement> reimbursements = rs.getReimbursementsByUser(user);
        return ResponseEntity.ok(reimbursements);
    }

    // Endpoint to get all pending reimbursements for the authenticated user
    @GetMapping("/my-pending-reimbursements")
    public ResponseEntity<List<Reimbursement>> getMyPendingReimbursements(@RequestBody User user) {
        List<Reimbursement> reimbursements = rs.getPendingReimbursementsByUser(user);
        return ResponseEntity.ok(reimbursements);
    }

    // Endpoint to retrieve all reimbursements for a specific user above a certain amount
    @GetMapping("/above-amount")
    public ResponseEntity<List<Reimbursement>> getReimbursementsByUserAndAmount(
            @RequestParam int userId,
            @RequestParam double amount) {
        User user = new User();  // You'll need to fetch the user based on userId
        user.setUserId(userId);

        List<Reimbursement> reimbursements = rs.getReimbursementsByUserAndAmount(user, amount);
        return ResponseEntity.ok(reimbursements);
    }

}
