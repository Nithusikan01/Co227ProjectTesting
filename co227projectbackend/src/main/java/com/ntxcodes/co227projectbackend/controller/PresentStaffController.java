package com.ntxcodes.co227projectbackend.controller;

import com.ntxcodes.co227projectbackend.exception.PresentStaffNotFoundException;
import com.ntxcodes.co227projectbackend.model.PresentStaff;
import com.ntxcodes.co227projectbackend.repository.PresentStaffRepository;
import com.ntxcodes.co227projectbackend.service.PresentStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PresentStaffController {
    @Autowired
    private PresentStaffService presentStaffService;

    @Autowired
    private PresentStaffRepository presentStaffRepository;
    @PostMapping("/presentStaff/add")
    public void add(
            @RequestParam("name") String name,
            @RequestParam("qualifications") String qualifications,
            @RequestParam("department") String department,
            @RequestParam("mobilePhone") String mobilePhone,
            @RequestParam("telePhone") String telePhone,
            @RequestParam("roleInFaculty") String roleInFaculty,
            @RequestParam("roleOnEEUWebsite") String roleOnEEUWebsite,
            @RequestParam("image") MultipartFile image

    ) throws IOException {
        PresentStaff presentStaff = new PresentStaff();

        presentStaff.setName(name);
        presentStaff.setQualifications(qualifications);
        presentStaff.setDepartment(department);
        presentStaff.setMobilePhone(mobilePhone);
        presentStaff.setTelePhone(telePhone);
        presentStaff.setRoleInFaculty(roleInFaculty);
        presentStaff.setRoleOnEEUWebsite(roleOnEEUWebsite);
        presentStaff.setImage(image.getBytes());

        presentStaffService.savePresentStaff(presentStaff);
    }


    @GetMapping("/presentStaff/all")
    public List<PresentStaff> getAllPresentStaffs() {
        return presentStaffService.getAllPresentStaffs();
    }

    @GetMapping("/presentStaff/{id}")
    public PresentStaff getPresentStaffById(@PathVariable Integer id ){
        return presentStaffService.getPresentStaffById(id)
                .orElseThrow(() -> new PresentStaffNotFoundException(id));
    }


    @PutMapping("/presentStaff/{id}")
    PresentStaff updatePresentStaff(@RequestBody PresentStaff newPresentStaff, @PathVariable Integer id) {
        return presentStaffService.getPresentStaffById(id)
                .map(presentStaff -> {
                    presentStaff.setName(newPresentStaff.getName());
                    presentStaff.setQualifications(newPresentStaff.getQualifications());
                    presentStaff.setDepartment(newPresentStaff.getDepartment());
                    presentStaff.setMobilePhone(newPresentStaff.getMobilePhone());
                    presentStaff.setTelePhone(newPresentStaff.getTelePhone());
                    presentStaff.setRoleInFaculty(newPresentStaff.getRoleInFaculty());
                    presentStaff.setRoleOnEEUWebsite(newPresentStaff.getRoleOnEEUWebsite());
                    presentStaff.setImage(newPresentStaff.getImage());

                    return presentStaffService.savePresentStaff(presentStaff);
                }).orElseThrow(() -> new PresentStaffNotFoundException(id));
    }

    @DeleteMapping("/presentStaff/{id}")
    String deletePresentStaff(@PathVariable Integer id) {
        if(!presentStaffRepository.existsById(id)){
            throw new PresentStaffNotFoundException(id);
        }else {
            presentStaffRepository.deleteById(id);
            return "Present Staff with id" + id + " deleted successfully.";
        }
    }


}
