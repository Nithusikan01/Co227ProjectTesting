import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Retrieve the token from storage (localStorage)
      const token = localStorage.getItem('token');

      // Make a POST request to your server-side logout endpoint to invalidate the token
      const response = await axios.post('http://localhost:8080/api/v1/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      

      if (response.status === 200) {
        // Clear the token from storage upon successful logout
        localStorage.removeItem('token');
        alert('Logout successful');
        navigate('/');
      } else {
        // Handle logout failure
        console.error('Logout failed');
      }
    } catch (error) {
      // Handle any errors that may occur during the request
      console.error('An error occurred while logging out:', error);
      
    }
  };

  return (
    <button className='btn btn-outline-primary' onClick={handleLogout}>Log Out</button>
  );
};

export default LogoutButton;
