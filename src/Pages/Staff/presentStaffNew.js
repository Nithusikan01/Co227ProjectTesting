import React, { useEffect, useState } from "react";
import axios from "axios";
import "./presentStaffNew.css";

const PresentStaffNew = () => {
  const [presentStaffs, setPresentStaffs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/presentStaff/all')
    .then((response) => {
      setPresentStaffs(response.data);
    })   
  }, []);

  const directors = presentStaffs.filter(
    (presentStaff) => presentStaff.roleOnEEUWebsite === "Director"
  );

  const otherStaffs = presentStaffs.filter(
    (presentStaff) => presentStaff.roleOnEEUWebsite !== "Director"
  );

  return (
    <div className="presentStaff-container">
      <h2>Directors</h2>
      <div className="director-list-container">
          {directors.map((director) => (
            <div className="director-card" key={director.id}>
              <img src={`data:director/jpeg;base64,${director.image}`} alt="Image is missing//" />
              <div>
                <h2>{director.name}</h2>
                <p>{director.qualifications}</p>
                <p>{director.department}</p>
                <p>Mobile: {director.mobilePhone}</p>
                <p>Telephone: {director.telePhone}</p>
                <p>{director.roleInFaculty}</p>
                <p>{director.roleOnEEUWebsite}</p>
            </div>
            </div>
          ))}
          <hr style={{width: "90%"}}></hr>
      </div>

      
      <h2>Other Staff Members</h2>
      <div className="staff-list-container">
        {otherStaffs.map((staff) => (
          <div className="staff-card" key={staff.id}>
            <img src={`data:staff/jpeg;base64,${staff.image}`} alt="Image is missing" />
            <div>
                <h2> {staff.name}</h2>
                <p>{staff.qualifications}</p>
                <p>{staff.department}</p>
                <p>Mobile: {staff.mobilePhone}</p>
                <p>Telephone: {staff.telePhone}</p>
                <p>{staff.roleInFaculty}</p>
                <p>{staff.roleOnEEUWebsite}</p>
            </div>
            <hr style={{width: "90%", color: 'red'}}></hr>
          </div>       
        ))}
        <hr style={{width: "90%"}}></hr>
      </div>
    </div>
  );
};

export default PresentStaffNew;
