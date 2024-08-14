package com.revature.models;
import com.revature.exceptions.InvalidReimbursementStatusException;

public enum ReimbursementStatus {
    PENDING,
    APPROVED,
    DENIED;

    public static ReimbursementStatus fromString(String status) {
        try {
            return ReimbursementStatus.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new InvalidReimbursementStatusException("Invalid status: " + status);
        }
    }
}
