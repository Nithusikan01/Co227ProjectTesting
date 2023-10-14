import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationError, setRegistrationError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (e.g., check if passwords match, validate email, etc.)

    try {
      // Send registration data to your backend API
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      // Check the response for success or display an error message if needed
      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful');
        alert('Registration successful');
      } else if (response.status === 400) {
        // Handle other status codes as needed
        console.log(response.message);
        alert("User already exists")
      }
    } catch (error) {
      console.error('Registration failed', error);
      setRegistrationError('Registration failed. Please check your information.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Firs tName
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {registrationError && <p className="text-danger">{registrationError}</p>}
    </div>
  );
}

export default RegistrationForm;
