import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PresentStaffCrud.css";
import { Link } from "react-router-dom";




function PresentStaffCRUD() {
  const [presentStaffs, setPresentStaffs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/presentStaff/all").then((response) => {
      setPresentStaffs(response.data);
    });
  }, []);

  return (
    <div className="present-staff-crud-container">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Present Staff Details</a>
          <Link to="/AddPresentStaff">
            <button className="btn btn-outline-primary">Add Present Staff</button>
          </Link>
        </div>
      </nav>

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">qualifications</th>
              <th scope="col">department</th>
              <th scope="col">Mobile</th>
              <th scope="col">Telephone</th>
              <th scope="col">Role On EEU</th>
              <th scope="col">Role In roleInFaculty</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {presentStaffs.map((presentStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{presentStaff.name}</td>
                <td>{presentStaff.qualifications}</td>
                <td>{presentStaff.department}</td>
                <td>{presentStaff.mobilePhone}</td>
                <td>{presentStaff.telePhone}</td>
                <td>{presentStaff.roleOnEEUWebsite}</td>
                <td>{presentStaff.roleInFaculty}</td>
                <td>
                  {/* Display the image using the <img> tag */}
                  {presentStaff.image && (
                    <img
                      src={`data:image/jpeg;base64,${presentStaff.image}`}
                      alt="Image is missing"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
                <td>
                  <a href="#" className="link-dark">
                    <i className="bi bi-pencil-square fs-5 me-3"></i>
                  </a>
                  <a href="#" className="link-dark">
                    <i className="bi bi-trash fs-5"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PresentStaffCRUD;
