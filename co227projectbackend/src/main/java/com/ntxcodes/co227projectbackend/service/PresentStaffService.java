package com.ntxcodes.co227projectbackend.service;

import com.ntxcodes.co227projectbackend.model.PresentStaff;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PresentStaffService {
    public PresentStaff savePresentStaff(PresentStaff presentStaff);
    public List<PresentStaff> getAllPresentStaffs();


}
