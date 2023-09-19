package com.ntxcodes.co227projectbackend.controller;

import com.ntxcodes.co227projectbackend.model.PastStaff;
import com.ntxcodes.co227projectbackend.service.PastStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PastStaffController {
    @Autowired
    private PastStaffService pastStaffService;

    @PostMapping("/pastStaff/add")
    public String add(@RequestBody PastStaff pastStaff) {
        pastStaffService.savePastStaff(pastStaff);
        return "New Past Staff is Added.";
    }

    @GetMapping("/pastStaff/all")
    public List<PastStaff> getAllPastStaffs() {
        return pastStaffService.getAllPastStaffs();
    }

}
