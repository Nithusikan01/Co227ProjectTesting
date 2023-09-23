import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";
import first from '../images/efac.jpg' 
import second from '../images/uop.jpg'
import third from '../images/peradeniya-engineering-faculty-most-beautiful-university-south-asia-105838063.webp'
const slideImages = [
    {
        url: first,
        caption: "First Slide"
    },
    {
        url: second, 
        caption: "Second Slide"
    },
    {
        url: third,
        caption: "Third Slide"
    },
];

const divStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Corrected the typo here
    height: "600px",
    backgroundSize: "cover"
}

const spanStyle = {
    fontSize: "50px", // Corrected the typo here
    color: "rgba(255,255,255,0.7)"

}

function ImageSlider() {
    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{ ...divStyles, backgroundImage: `url(${image.url})` }}>
                            <span style={spanStyle}>{image.caption}</span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default ImageSlider;
