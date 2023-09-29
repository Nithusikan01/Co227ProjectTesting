package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PresentStaff;

import java.util.List;
import java.util.Optional;

public interface PresentStaffService {
    public PresentStaff savePresentStaff(PresentStaff presentStaff);
    public List<PresentStaff> getAllPresentStaffs();

    public Optional<PresentStaff> getPresentStaffById(int id);


}
