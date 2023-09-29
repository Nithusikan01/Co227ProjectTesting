package com.ntxcodes.co227projectbackend.exception;

import java.util.HashMap;
import java.util.Map;

public class PastStaffNotFoundAdvice {

    public Map<String,String> exceptionHandler(PastStaffNotFoundException exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }
}
