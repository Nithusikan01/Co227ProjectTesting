package com.ntxcodes.co227projectbackend.controller;

import com.ntxcodes.co227projectbackend.model.PresentStaff;
import com.ntxcodes.co227projectbackend.service.PresentStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PresentStaffController {
    @Autowired
    private PresentStaffService presentStaffService;

    @PostMapping("/presentStaff/add")
    public String add(@RequestBody PresentStaff presentStaff) {
        presentStaffService.savePresentStaff(presentStaff);
        return "New present staff is added";
    }


    @GetMapping("/presentStaff/all")
    public List<PresentStaff> getAllPresentStaffs() {
        return presentStaffService.getAllPresentStaffs();
    }

}
