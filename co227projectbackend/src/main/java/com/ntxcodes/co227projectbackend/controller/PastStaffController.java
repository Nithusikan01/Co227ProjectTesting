package com.ntxcodes.co227projectbackend.controller;

import com.ntxcodes.co227projectbackend.exception.PastStaffNotFoundException;
import com.ntxcodes.co227projectbackend.exception.PresentStaffNotFoundException;
import com.ntxcodes.co227projectbackend.model.PastStaff;
import com.ntxcodes.co227projectbackend.model.PresentStaff;
import com.ntxcodes.co227projectbackend.repository.PastStaffRepository;
import com.ntxcodes.co227projectbackend.service.PastStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PastStaffController {
    @Autowired
    private PastStaffService pastStaffService;

    @Autowired
    private PastStaffRepository pastStaffRepository;
    @PostMapping("/pastStaff/add")
    public void add(
            @RequestParam("name") String name,
            @RequestParam("period") String period,
            @RequestParam("roleOnEEUWebsite") String roleOnEEUWebsite,
            @RequestParam("image")MultipartFile image
    ) throws IOException {
        PastStaff pastStaff = new PastStaff();
        pastStaff.setName(name);
        pastStaff.setPeriod(period);
        pastStaff.setRoleOnEEUWebsite(roleOnEEUWebsite);
        pastStaff.setImage(image.getBytes());

        pastStaffService.savePastStaff(pastStaff);
    }

    @GetMapping("/pastStaff/all")
    public List<PastStaff> getAllPastStaffs() {
        return pastStaffService.getAllPastStaffs();
    }

    @GetMapping("/pastStaff/{id}")
    public PastStaff getPastStaffById(@PathVariable Integer id ){
        return pastStaffService.getPastStaffById(id)
                .orElseThrow(() -> new PastStaffNotFoundException(id));
    }
    @PutMapping("/pastStaff/{id}")
    PastStaff updatePresentStaff(@RequestBody PastStaff newPastStaff, @PathVariable Integer id) {
        return pastStaffService.getPastStaffById(id)
                .map(pastStaff -> {
                    pastStaff.setName(newPastStaff.getName());
                    pastStaff.setPeriod(newPastStaff.getPeriod());
                    pastStaff.setRoleOnEEUWebsite(newPastStaff.getRoleOnEEUWebsite());
                    pastStaff.setImage(newPastStaff.getImage());

                    return pastStaffService.savePastStaff(pastStaff);
                }).orElseThrow(() -> new PastStaffNotFoundException(id));
    }

    @DeleteMapping("/pastStaff/{id}")
    String deletePastStaff(@PathVariable Integer id){
        if(!pastStaffRepository.existsById(id)){
            throw  new PastStaffNotFoundException(id);
        }else {
            pastStaffRepository.deleteById(id);
            return "Past Staff with id" + id + " deleted successfully.";
        }
    }
}
