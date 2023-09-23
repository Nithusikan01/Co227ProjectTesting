import React, { useState } from "react";
import axios from "axios";
import "./PresentStaffAdd.css" // Create a CSS file for styling
import { useNavigate } from "react-router-dom";

const PresentStaffForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    qualifications: "",
    department: "",
    mobilePhone: "",
    telePhone: "",
    roleInFaculty: "",
    roleOnEEUWebsite: "",
    image: null, // Assuming you want to upload an image
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/presentStaff/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );

      // Handle the response from the backend (e.g., show success message)
      console.log(response.data);

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        qualifications: "",
        department: "",
        mobilePhone: "",
        telePhone: "",
        roleInFaculty: "",
        roleOnEEUWebsite: "",
        image: null,
      });
      navigate('/PresentStaffCRUD')
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("Error adding present staff:", error);
    }
  };

  return (
    <div className="presentStaff-form-container">
      <div className="presentStaff-form-inner-container border shadow">
        <div className="headings">
          <h3 style={{textAlign: "center",fontFamily: "sans-serif"}}>Add Present Staff</h3>
        </div><br/>
      
        
        <form onSubmit={handleSubmit} className="Add-form" style={{width: "90%", marginLeft: "5%"}}>
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
                Moblie Number:
              </label>
              <input
                type="text"
                className="form-control"
                id="mobilePhone"
                name="mobilePhone"
                value={formData.moblieNumber}
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
                value={formData.telephone}
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
              <label htmlFor="image" className="form-label">
                Image:
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Add Present Staff
              </button>
            </div>
  
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default PresentStaffForm;
