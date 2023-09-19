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
      console.error("Error loading present staffs:", error);
    }
  };

  const directors = pastStaffs.filter((pastStaff) =>pastStaff.roleOnEEUWebsite === "Director");

  return (
    <div className="director-list-container">
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
  );
};

export default PastStaffNew;
