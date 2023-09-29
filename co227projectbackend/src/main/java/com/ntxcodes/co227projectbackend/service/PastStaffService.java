package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PastStaff;

import java.util.List;
import java.util.Optional;

public interface PastStaffService {
    public PastStaff savePastStaff(PastStaff pastStaff);
    public List<PastStaff> getAllPastStaffs();
    public Optional<PastStaff> getPastStaffById(int id);
}
