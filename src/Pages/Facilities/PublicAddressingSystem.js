import React from 'react';
import paSystemImage from '../Pics/2O9A9659.jpg';

const PublicAddressingSystem = () => {

    const cardStyle = {
        border: '1px solid #07a8ff',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px auto', // Center the card horizontally
        maxWidth: '800px', // Limit the card width for smaller screens
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f0f0f0', // Set the background color here
    };
    const headingStyle = {
        color: '#07a8ff',
        
    };
    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Add space between images
        margin: '10px 0', // Add margin between rows
    };
    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',     // Center the content vertically
    };
    
    const imageStyle = {
        maxWidth: '50%', // Ensure the image fits within its container
        height: 'auto',   // Maintain aspect ratio
        display: 'block', // Remove any extra spacing around the image
        marginRight: '10px',
    };

  return (
    <div style={cardStyle}>
      <h2 style={{ ...headingStyle, textAlign: 'center' }}>Public Addressing System</h2>
      <div style={imageContainerStyle}>
        {/* Add the image below the heading */}
        <img src={paSystemImage} alt="Public Addressing System" style={imageStyle} />
      </div>
      <h3 style={headingStyle}>Description</h3>
      <p>
        The Public Addressing System covers all the buildings and the two long corridors within the Faculty. 
        In 2017, the system was completely rewired to ensure that the wiring does not disturb the aesthetic appearance of the Faculty.
        Special precautions were taken to protect the cables from sunlight and monkeys.
      </p>
      <p>
        Additionally, a new amplifier was installed in 2017 to cater to the increasing demand for extensions.
      </p>
      <div style={rowStyle}>
            <img src={paSystemImage} alt="Image 1" style={imageStyle} />
            <img src={paSystemImage} alt="Image 2" style={imageStyle} />
        </div>
        <div style={rowStyle}>
            <img src={paSystemImage} alt="Image 3" style={imageStyle} />
            <img src={paSystemImage} alt="Image 4" style={imageStyle} />
        </div>
    </div>
  );
};

export default PublicAddressingSystem;
