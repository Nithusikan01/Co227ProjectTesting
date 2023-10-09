import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PastStaffEdit.css"; // Correct the CSS file name
import { useNavigate, useParams } from "react-router-dom";

const PastStaffEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    department: "",
    mobilePhone: "",
    telePhone: "",
    roleInFaculty: "",
    roleOnEEUWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/auth/pastStaff/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error loading past staff:", error);
      }
    };
  
    loadStaff(); // Call the function directly
  
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/pastStaff/${id}`,
        formData
      );

      console.log(response.data);

      // Redirect to the staff list after successful submission
      navigate('/PastStaffCRUD');
    } catch (error) {
      console.error("Error updating past staff:", error);
    }
  };

  return (
    <div className="pastStaff-form-container">
      <div className="pastStaff-form-inner-container border shadow">
        <div className="headings">
          <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Edit Past Staff
          </h3>
        </div>
        <br />

        <form onSubmit={handleSubmit} className="Edit-form" style={{ width: "90%", marginLeft: "5%" }}>
          <div className="content">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="period" className="form-label">
                Period:
              </label>
              <input
                type="text"
                className="form-control"
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="roleOnEEUWebsite" className="form-label">
                Role On EEU Website:
              </label>
              <input
                type="text"
                className="form-control"
                id="roleOnEEUWebsite"
                name="roleOnEEUWebsite"
                value={formData.roleOnEEUWebsite}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Update Past Staff
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PastStaffEdit;