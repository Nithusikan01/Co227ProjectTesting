import './About EEU.css';
import image from "./uop.jpg";


function AboutEEU() {
  return (
    <div className="About-EEU">
      <header className="About-EEU-header">
        <div className="image"><img alt="Uop" src={image} style={{width: '100%', height: '450px'}}/></div>
       <div className='info'>
       <p>The Engineering Education Unit was established in the Faculty of Engineering in 1985 primarily with the view to coordinate activities in the following areas: </p>
        <ul>
        <li>Staff development</li>
        <li>Curriculum development</li>
        <li>Provision of audio-visual facilities for educational purposes</li>
        <li>Freshmen orientation</li>
        </ul>
        <p> In 2015 the Faculty Board assigned the responsibility of doing the overall coordination of all General Elective subjects. The coordination of subjects are done by different Departments.The responsibility of EEU includes, facilitating the Appointment of visiting lectures, liaison with the visiting lecturers and the subject coordinators of the Departments, checking and recommending the payments for lecturers.</p>
        <p> The management and development of the EEU is the responsibility of a committee consisting of the Dean, the EEU Director and members of the permanent academic staff elected by the Faculty Board.</p>
        <p> The EEU has a professional audio-visual studio equipped with a advanced non-liner video production system. Members of the teaching staff of the Faculty have utilized these facilities to produce educational videos for use in their teaching.</p>
        <p>Three seminar rooms and conference room equipped with large screen multimedia projection facility, digital white boards, overhead projectors, are also maintained by the EEU.</p>
        <p>Audio Visual Systems of the EOE Pereira Theater, Lecture Rooms and Sound Proof Studio of the Faculty are also functions under the authority of EEU.</p>
      
       </div>
       </header>  
    </div>
  );
}

export default AboutEEU;

