import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const PresentStaffEdit = () => {
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
        const response = await axios.get(`http://localhost:8080/api/v1/auth/presentStaff/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error loading present staff:", error);
      }
    };
  
    loadStaff(); // Call the function directly
  
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/presentStaff/${id}`,
        formData
      );

      console.log(response.data);

      // Redirect to the staff list after successful submission
      navigate('/PresentStaffCRUD');
    } catch (error) {
      console.error("Error updating present staff:", error);
    }
  };

  return (
    <div className="presentStaff-form-container">
      <div className="presentStaff-form-inner-container border shadow">
        <div className="headings">
          <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Edit Present Staff
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
              <label htmlFor="qualifications" className="form-label">
                Qualifications:
              </label>
              <input
                type="text"
                className="form-control"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department:
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobilePhone" className="form-label">
                Mobile Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="mobilePhone"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telePhone" className="form-label">
                Telephone:
              </label>
              <input
                type="text"
                className="form-control"
                id="telePhone"
                name="telePhone"
                value={formData.telePhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="roleInFaculty" className="form-label">
                Role In Faculty:
              </label>
              <input
                type="text"
                className="form-control"
                id="roleInFaculty"
                name="roleInFaculty"
                value={formData.roleInFaculty}
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
                Update Present Staff
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PresentStaffEdit;