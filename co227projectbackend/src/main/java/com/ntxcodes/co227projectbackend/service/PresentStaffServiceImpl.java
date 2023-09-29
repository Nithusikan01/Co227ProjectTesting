package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PresentStaff;
import com.ntxcodes.co227projectbackend.repository.PresentStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Optional<PresentStaff> getPresentStaffById(int id) {
        return presentStaffRepository.findById(id);
    }


}
