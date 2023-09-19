package com.ntxcodes.co227projectbackend.controller;

import com.ntxcodes.co227projectbackend.model.GES;
import com.ntxcodes.co227projectbackend.repository.GESRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class GESController {

    @Autowired
    private GESRepository gesRepository;

    @PostMapping("/addcourses")
    GES newGes(@RequestBody GES newGes){
        return gesRepository.save(newGes);
    }

    @GetMapping("/getcourses")
    List<GES> getAllCourses(){
        return gesRepository.findAll();
    }
}
