import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PastStaffCrud.css";
import { Link, useParams } from "react-router-dom";



function PastStaffCRUD() {
  const [pastStaffs, setPastStaffs] = useState([]);

useEffect(() =>{
  loadPastStaffs();
}, []);

const loadPastStaffs = async () => {
  const result = await axios.get("http://localhost:8080/api/v1/auth/pastStaff/all");
  setPastStaffs(result.data);
}

const {id} = useParams();

const deletePastStaff = async (id) => {
  await axios.delete(`http://localhost:8080/api/v1/auth/pastStaff/${id}`);
  loadPastStaffs();
}

  return (
    <div className="past-staff-crud-container">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Past Staff Details</a>
          <Link to="/AddPastStaff">
            <button className="btn btn-outline-primary">Add Past Staff</button>
          </Link>
        </div>
      </nav>

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Period</th>
              <th scope="col">Role On EEU</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {pastStaffs.map((pastStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{pastStaff.name}</td>
                <td>{pastStaff.period}</td>
                <td>{pastStaff.roleOnEEUWebsite}</td>
                <td>
                  {/* Display the image using the <img> tag */}
                  {pastStaff.image && (
                    <img
                      src={`data:image/jpeg;base64,${pastStaff.image}`}
                      alt="Image is missing"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
                <td>
                  <Link className="link-dark" to={`/EditPastStaff/${pastStaff.id}`}>
                    <i className="bi bi-pencil-square fs-5 me-3"></i>
                  </Link>
                  <Link className="link-dark" onClick={() => deletePastStaff(pastStaff.id)}>
                    <i className="bi bi-trash fs-5"></i>
                  </Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PastStaffCRUD;
