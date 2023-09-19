package com.ntxcodes.co227projectbackend.repository;

import com.ntxcodes.co227projectbackend.model.PresentStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PresentStaffRepository extends JpaRepository<PresentStaff,Integer> {
}
