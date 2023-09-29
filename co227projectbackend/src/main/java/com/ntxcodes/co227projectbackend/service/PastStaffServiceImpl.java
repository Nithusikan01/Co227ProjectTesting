package com.ntxcodes.co227projectbackend.service;


import com.ntxcodes.co227projectbackend.model.PastStaff;
import com.ntxcodes.co227projectbackend.repository.PastStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PastStaffServiceImpl implements PastStaffService{

    @Autowired
    private PastStaffRepository pastStaffRepository;

    @Override
    public PastStaff savePastStaff(PastStaff pastStaff) {
        return pastStaffRepository.save(pastStaff);
    }


    @Override
    public List<PastStaff> getAllPastStaffs() {
        return pastStaffRepository.findAll();
    }



    public Optional<PastStaff> getPastStaffById(int id) {
        return  pastStaffRepository.findById(id);
    }

}
