package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;
import java.sql.Timestamp;

@Entity
@Table(name = "reimbursements")
@Component // make this class a Bean
public class Reimbursement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Reimbursement_ID")
    private int reimbursementId;

    @Column(name = "Amount")
    private double amount;

    @Column(name = "Description")
    private String description;

    @Column(name = "Status", length = 20)
    private String status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "User_ID", nullable = false)
    private User user;

    // Constructors, Getters, Setters, and toString()

    public Reimbursement() {
    }

    public Reimbursement(int reimbursementId, double amount, String description, String status, User user) {
        this.reimbursementId = reimbursementId;
        this.amount = amount;
        this.description = description;
        this.status = status;
        this.user = user;
    }

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Reimbursement{" +
                "reimbursementId=" + reimbursementId +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", user=" + user +
                '}';
    }
}
