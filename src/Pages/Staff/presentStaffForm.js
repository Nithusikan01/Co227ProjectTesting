import React, { useState } from "react";
import axios from "axios";
import "./PresentStaffForm.css"; // Create a CSS file for styling

const PresentStaffForm = () => {
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
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("Error adding present staff:", error);
    }
  };

  return (
    <div className="presentStaff-form-container">
      <h3 style={{textAlign: "center",fontFamily: "sans-serif"}}>Add Present Staff</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="moblieNumber" className="form-label">
            Moblie Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="moblieNumber"
            name="moblieNumber"
            value={formData.moblieNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Telephone:
          </label>
          <input
            type="text"
            className="form-control"
            id="telephone"
            name="telephone"
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

        {/* Add similar fields for other form inputs */}
        
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

        <button className="btn btn-primary" type="submit">
          Add Present Staff
        </button>
      </form>
    </div>
  );
};

export default PresentStaffForm;
