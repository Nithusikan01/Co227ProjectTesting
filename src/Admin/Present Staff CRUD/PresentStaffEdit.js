import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PresentStaffEdit = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [presentStaff, setPresentStaff] = useState({
    name: "",
    qualifications: "",
    department: "",
    mobilePhone: "",
    telePhone: "",
    roleInFaculty: "",
    roleOnEEUWebsite: "",
    image: null,
  });

  const { name,qualifications,department,mobilePhone,telePhone,roleInFaculty,roleOnEEUWebsite,image} = presentStaff;

  const handleInputChange = (e) => {
    setPresentStaff({ ...presentStaff, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPresentStaff();
  }, []);

  const loadPresentStaff = async () => {
    const result = await axios.get(`http://localhost:8080/presentStaff/${id}`, presentStaff);
    setPresentStaff(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:8080/presentStaff/${id}`, presentStaff);
    navigate("/PresentStaffCRUD")
  };

  return (
    <div className="presentStaff-form-container">
      <div className="presentStaff-form-inner-container border shadow">
        <div className="headings">
          <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            Edit Present Staff
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="Add-form" style={{ width: "90%", marginLeft: "5%" }}>
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
                value={presentStaff.name}
                onChange={handleInputChange}
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
                value={presentStaff.qualifications}
                onChange={handleInputChange}
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
                value={presentStaff.department}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobilePhone" className="form-label">
                Mobile Phone:
              </label>
              <input
                type="text"
                className="form-control"
                id="mobilePhone"
                name="mobilePhone"
                value={presentStaff.mobilePhone}
                onChange={handleInputChange}
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
                value={presentStaff.telePhone}
                onChange={handleInputChange}
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
                value={presentStaff.roleInFaculty}
                onChange={handleInputChange}
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
                value={presentStaff.roleOnEEUWebsite}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
//Working Condition