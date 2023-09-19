import React, { useState } from 'react';

function AddPresentStaff() {
    const [formData, setFormData] = useState({
        name: '',
        qualifications: '',
        department: '',
        mobilePhone: '',
        telePhone: '',
        roleInFaculty: '',
        roleOnEEUWebsite: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({ ...formData, image: imageFile });
    };

    const handleButtonClick = async () => {
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('http://localhost:8080/presentStaff/add', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Data added successfully');
            } else {
                console.error('Failed to add data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Add Present Staff</h1>
            <form>
                {/* Form fields */}
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <div>
                    <label>Qualifications:</label>
                    <input
                        type="text"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Mobile Phone:</label>
                    <input
                        type="text"
                        name="mobilePhone"
                        value={formData.mobilePhone}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Telephone:</label>
                    <input
                        type="text"
                        name="telePhone"
                        value={formData.telePhone}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Role in Faculty:</label>
                    <input
                        type="text"
                        name="roleInFaculty"
                        value={formData.roleInFaculty}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Role on EEU Website:</label>
                    <input
                        type="text"
                        name="roleOnEEUWebsite"
                        value={formData.roleOnEEUWebsite}
                        onChange={handleInputChange}
                    />
                </div>
                
                {/* File input for image */}
                <label>Image:</label>
                <input
                    type="file"
                    name="image"
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={handleImageChange}
                />

                <button type="button" onClick={handleButtonClick}>Submit to Database</button>
            </form>
        </div>
    );
}

export default AddPresentStaff;
