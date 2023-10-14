import React from 'react';
import lectureRoomsImage from '../Pics/2O9A9659.jpg';

const LectureRooms = () => {

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
      <h2 style={{ ...headingStyle, textAlign: 'center' }}>Lecture Rooms</h2>
      <div style={imageContainerStyle}>
        {/* Add the image below the heading */}
        <img src={lectureRoomsImage} alt="Lecture Rooms" style={imageStyle} />
      </div>
      <h3 style={headingStyle}>Facilities</h3>
      <ul>
        <li>Multimedia Projectors and Screens</li>
        <li>Wireless sound systems for large lecture rooms</li>
        <li>Wired Sound systems for small lecture rooms</li>
      </ul>
      <h3 style={headingStyle}>Acknowledgements for improvements</h3>
      <ul>
        <li>Lecture Room 12 was refurbished by E97 Batch in 2015</li>
        <li>Lecture Room 21 was refurbished by E97 Batch in 2017</li>
        <li>Lecture Room 19 was refurbished by Engineering Design Center in 2017</li>
      </ul>
      <div style={rowStyle}>
            <img src={lectureRoomsImage} alt="Image 1" style={imageStyle} />
            <img src={lectureRoomsImage} alt="Image 2" style={imageStyle} />
        </div>
        <div style={rowStyle}>
            <img src={lectureRoomsImage} alt="Image 3" style={imageStyle} />
            <img src={lectureRoomsImage} alt="Image 4" style={imageStyle} />
        </div>
      
    </div>
  );
};

export default LectureRooms;
