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
      <div className="headings">
        <h2>Directors</h2>
      </div>
      <br/>
      <div className="director-list-container">
          {directors.map((director) => (
            <div className="director-card" key={director.id}>
              <img src={`data:director/jpeg;base64,${director.image}`} alt="Image is missing//" />
              <div>
                <h2>{director.name}</h2>
                <p>{director.period}</p>
                <p>{director.roleOnEEUWebsite}</p>
              </div>
              <hr style={{width: "90%"}}></hr>
            </div>
          ))}
          
      </div>

      <div className="headings">
        <h2>Other Staff Members</h2>
      </div>
      <br/>
      <div className="staff-list-container">
        {otherStaffs.map((staff) => (
          <div className="staff-card" key={staff.id}>
            <img src={`data:staff/jpeg;base64,${staff.image}`} alt="Image is missing" />
            <div>
              <h2>{staff.name}</h2>
              <p>{staff.period}</p>
              <p>{staff.roleOnEEUWebsite}</p>
            </div>
            <hr style={{width: "90%"}}></hr>
          </div>       
        ))}
        <hr style={{width: "90%"}}></hr>
      </div>
    </div>
  );
};

export default PastStaffNew;
