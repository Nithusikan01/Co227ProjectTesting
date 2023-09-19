package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PastStaff;

import java.util.List;

public interface PastStaffService {
    public PastStaff savePastStaff(PastStaff pastStaff);

    public List<PastStaff> getAllPastStaffs();
}
