package com.revature.exceptions;

public class InvalidReimbursementStatusException extends RuntimeException {
    public InvalidReimbursementStatusException(String message) {
        super(message);
    }
}
