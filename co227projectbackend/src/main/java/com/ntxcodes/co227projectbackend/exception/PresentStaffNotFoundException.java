package com.ntxcodes.co227projectbackend.exception;

public class PresentStaffNotFoundException extends RuntimeException{
    public PresentStaffNotFoundException(Integer id) {
        super("Could not found any PresentStaff with the give id " + id);
    }
}
