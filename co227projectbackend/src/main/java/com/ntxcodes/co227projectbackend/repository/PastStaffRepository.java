package com.ntxcodes.co227projectbackend.repository;

import com.ntxcodes.co227projectbackend.model.PastStaff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PastStaffRepository extends JpaRepository<PastStaff,Integer> {
}
