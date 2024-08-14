package com.revature.models.DTOs;

import com.revature.models.Reimbursement;

public class ReimbursementDTO {
    private int reimbursementId;
    private double amount;
    private String description;
    private String status;
    private int userId;

    // Constructors, Getters, Setters

    public ReimbursementDTO () {}

    public ReimbursementDTO(int reimbursementId, double amount, String description, String status, int userId) {
        this.reimbursementId = reimbursementId;
        this.amount = amount;
        this.description = description;
        this.status = status;
        this.userId = userId;
    }

    // Getters and setters

    public int getReimbursementId() {
        return reimbursementId;
    }

    public void setReimbursementId(int reimbursementId) {
        this.reimbursementId = reimbursementId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
