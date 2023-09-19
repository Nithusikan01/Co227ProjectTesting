package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PresentStaff;
import com.ntxcodes.co227projectbackend.repository.PresentStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class PresentStaffServiceImpl implements PresentStaffService{

    @Autowired
    private PresentStaffRepository presentStaffRepository;

    @Override
    public PresentStaff savePresentStaff(PresentStaff presentStaff) {
        return presentStaffRepository.save(presentStaff);
    }


    @Override
    public List<PresentStaff> getAllPresentStaffs() {
        return presentStaffRepository.findAll();
    }

}
