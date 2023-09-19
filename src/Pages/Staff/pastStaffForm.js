import React, { useState } from "react";
import "./pastStaffForm.css";
import axios from "axios";

function PastStaffForm() {
    const [pastStaff, setpastStaff] = useState({
        name: '',
        period: '',
        roleOnEEUWebsite:'',
        image: null,
    });

    const HandleInputChange = (e) => {
        const { name, value, files } = e.target;

        setpastStaff((prevState) => ({
            ...prevState,
            [name]: name === 'image' ? files[0] : value,
        })) ;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name',pastStaff.name);
        formData.append('period',pastStaff.period);
        formData.append('roleOnEEUWebsite',pastStaff.roleOnEEUWebsite);
        formData.append('image',pastStaff.image);

        try {
            const response = await axios.post('/api/your-backend-endpoint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file upload
                },
            });

            // Handle the response from the backend (e.g., show success message)
            console.log(response.data);
        } catch (error) {
            // Handle errors (e.g., show error message)
            console.error(error);
        }
    }

    return (
        <div className="PastStaff-form-container">
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={pastStaff.name}
                    onChange={HandleInputChange}
                />
            </div>

            <div>
                <label>Period: </label>
                <input
                    type="text"
                    name="period"
                    value={pastStaff.period}
                    onChange={HandleInputChange}
                />
            </div>

            <div>
                <label>Role on EEU Website: </label>
                <input
                    type="text"
                    name="roleOnEEUWebsite"
                    value={pastStaff.roleOnEEUWebsite}
                    onChange={HandleInputChange}
                />
            </div>

            <div>
                <label>Image: </label>
                <input
                    type="text"
                    name="image"
                    value={pastStaff.image}
                    onChange={HandleInputChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
        
    )
}

export default PastStaffForm;