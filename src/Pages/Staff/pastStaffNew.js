import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pastStaffNew.css";

const PastStaffNew = () => {
  const [pastStaffs, setPastStaffs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/pastStaff/all')
    .then((response) => {
      setPastStaffs(response.data);
    })
  }, []);

  
  const directors = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite === "Director"
  );

  const otherStaffs = pastStaffs.filter(
    (pastStaff) => pastStaff.roleOnEEUWebsite !== "Director"
  );

  return (
    <div className="pastStaff-container">
      <h2>Director</h2>
      <div className="director-list-container">
        <div className="director-list">
          {directors.map((director) => (
            <div className="director-card" key={director.id}>
              <img src={`data:director/jpeg;base64,${director.image}`} alt="Image is missing//" />
              <div>
                <h2>{director.name}</h2>
                <p>{director.period}</p>
                <p>{director.roleOnEEUWebsite}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
{/*
      <div className="other-staff-list-container">
        <h2>Other Staff Members</h2>
        <div className="other-staff-list">
          {otherStaffs.map((staff) => (
            <div className="staff-card" key={staff.id}>
              <img src={`data:staff/jpeg;base64,${staff.image}`} alt="Image is missing" />
              <div>
                <h2>Name: {staff.name}</h2>
                <p>Qualifications: {staff.period}</p>
                <p>Role on EEU Website: {staff.roleOnEEUWebsite}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
*/}
    </div>
  );
};

export default PastStaffNew;
