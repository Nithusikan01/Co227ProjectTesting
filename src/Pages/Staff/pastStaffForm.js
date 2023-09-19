import React, { useState } from "react";
import "./pastStaffForm.css";
import axios from "axios";

function PastStaffForm() {
    const [pastStaff, setpastStaff] = useState({
        name: '',
        period: '',
        roleOnEEUWebsite: '',
        image: null,
    });

    const HandleInputChange = (e) => {
        const { name, value, files } = e.target;

        setpastStaff((prevState) => ({
            ...prevState,
            [name]: name === 'image' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', pastStaff.name);
        formData.append('period', pastStaff.period);
        formData.append('roleOnEEUWebsite', pastStaff.roleOnEEUWebsite);
        formData.append('image', pastStaff.image);

        try {
            const response = await axios.post('/api/your-backend-endpoint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file upload
                },
            });

            // Handle the response from the backend (e.g., show success message)
            console.log(response.data);

            // Clear the form fields
            setpastStaff({
                name: '',
                period: '',
                roleOnEEUWebsite: '',
                image: null,
            });
        } catch (error) {
            // Handle errors (e.g., show error message)
            console.error(error);
        }
    };

    return (
        <div className="PastStaff-form-container">
            <h3 style={{textAlign: "center",fontFamily: "sans-serif"}}>Add Past Staff</h3>
            <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={pastStaff.name}
                        onChange={HandleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="period" className="form-label">Period:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="period"
                        name="period"
                        value={pastStaff.period}
                        onChange={HandleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="roleOnEEUWebsite" className="form-label">Role on EEU Website:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roleOnEEUWebsite"
                        name="roleOnEEUWebsite"
                        value={pastStaff.roleOnEEUWebsite}
                        onChange={HandleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image:</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={HandleInputChange}
                    />
                </div>

                <button className="btn btn-primary" type="submit">Add Past Staff</button>
            </form>
        </div>
    );
}

export default PastStaffForm;
