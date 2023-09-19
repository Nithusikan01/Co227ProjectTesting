import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pastStaffNew.css";

const PastStaffNew = () => {
  const [pastStaffs, setPastStaffs] = useState([]);

  useEffect(() => {
    loadPastStaffs();
  }, []);

  const loadPastStaffs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/pastStaff/all");
      setPastStaffs(response.data);
    } catch (error) {
      console.error("Error loading past staffs:", error);
    }
  };

  const directors = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite === "Director"
  );

  const otherStaffs = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite !== "Director"
  );

  return (
    <div className="pastStaff-container" style={{alignItems: "center",justifyContent: "center"}}>
      <div className="director-list-container">
        <h2>Directors</h2>
        <div className="director-list">
          {directors.map((director, index) => (
            <div className="director-card" key={index}>
              <img src={director.image} alt="Image is missing" />
              <div>
                <h2>Name: {director.name}</h2>
                <p>Qualifications: {director.period}</p>
                <p>Role on EEU Website: {director.roleOnEEUWebsite}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="other-staff-list-container">
        <h2>Other Staff Members</h2>
        <div className="other-staff-list">
          {otherStaffs.map((staff, index) => (
            <div className="staff-card" key={index}>
              <img src={staff.image} alt="Image is missing" />
              <div>
                <h2>Name: {staff.name}</h2>
                <p>Qualifications: {staff.period}</p>
                <p>Role on EEU Website: {staff.roleOnEEUWebsite}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastStaffNew;
