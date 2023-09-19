import React, { useEffect, useState } from "react";
import axios from "axios";
import "./presentStaffNew.css";

const PresentStaffNew = () => {
  const [presentStaffs, setPresentStaffs] = useState([]);

  useEffect(() => {
    loadPresentStaffs();
  }, []);

  const loadPresentStaffs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/presentStaff/all");
      setPresentStaffs(response.data);
    } catch (error) {
      console.error("Error loading present staffs:", error);
    }
  };

  return (
    <div className="presentStaff-list-container">
      <div className="presentStaff-list">
      {presentStaffs.map((presentStaff, index) => (
        <div className="presentStaff-card" key={index}>
          <img src={presentStaff.image} alt={`${presentStaff.name}'s photo`} />
          <div>
            <h2>Name: {presentStaff.name}</h2>
            <p>Qualifications: {presentStaff.qualifications}</p>
            <p>Department: {presentStaff.department}</p>
            <p>Mobile Phone: {presentStaff.mobilePhone}</p>
            <p>Telephone: {presentStaff.telePhone}</p>
            <p>Role in Faculty: {presentStaff.roleInFaculty}</p>
            <p>Role on EEU Website: {presentStaff.roleOnEEUWebsite}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PresentStaffNew;
