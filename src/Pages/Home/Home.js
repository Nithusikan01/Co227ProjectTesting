import React from "react";
import "./Home.css";
import ImageSlider from "../../components/ImageSlider";


function Home() {
    return(
        <div className="home-container">
          <div className="home-inner-container">
          <ImageSlider/>
          <div className="info">
              <p>
              The Engineering Education Unit was established in the Faculty of Engineering in 1985 primarily with the view to coordinating activities in the following areas:
              <ul>
                <li>Staff development</li>
                <li>Curriculum development</li>
                <li>Provision of audio-visual facilities for educational purposes</li>
                <li>Freshmen orientation</li>
              </ul>

                The management and development of the EEU is the responsibility of a committee consisting of the Dean, the Director of the unit and members of the permanent academic staff appointed by the Faculty Board. The EEU has a professional audio-visual studio equipped with Non-Linear video editing and production system. EEU also has state of the art digital video and digital still cameras. Members of the teaching staff of the Faculty utilize these facilities to produce educational videos for use in their teaching and laboratory experiments. Three seminar rooms of capacities 105, 86 and 70 equipped with large screen multimedia projection facilities, digital whiteboards, interactive whiteboards, visual system presenters and overhead projectors are maintained by the EEU. In addition, the audio visual systems of the Faculty conference room and E.O.E. Pereira Theatre are maintained by the EEU. The conference room has a seating capacity of 28 and is equipped with a digital whiteboard and a video conferencing system. The E.O.E. Pereira Theatre has a seating capacity of 582 and is equipped with high power multimedia projectors and an extra large screen. The EEU has installed multimedia facilities to all lecture rooms and Drawing Office I of the Faculty. In addition, the EEU maintains and operates the public address system within the Faculty. From the year 2014, the EEU has been performing the overall coordination of the General Elective (GE) courses offered to 3rd and 4th year students of the Faculty.
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
              </p>
          </div>
          </div>
        </div>
        
        
    );
}

export default Home;