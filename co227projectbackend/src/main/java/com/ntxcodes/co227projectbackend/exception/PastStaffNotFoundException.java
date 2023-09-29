package com.ntxcodes.co227projectbackend.exception;

public class PastStaffNotFoundException extends RuntimeException{
    public PastStaffNotFoundException(Integer id){
        super("Could not found any PastStaff with the give id " + id);
    }
}
