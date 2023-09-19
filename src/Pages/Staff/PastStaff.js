import React from 'react';
import "./staff.css";
import Kamalnath from "../Staff/images/kam.png";
import Gamunu from "../Staff/images/gam.jpg";
import Asanga from "../Staff/images/asanga.jpg";
import Edirisighe from "../Staff/images/edi.jpg";
import Nandalal from "../Staff/images/profnandalal.jpg";
import Samuel from "../Staff/images/samuel.jpg";
import Gamini from "../Staff/images/gamini.jpg";
import Ekanayake from "../Staff/images/mr._a.m.p.g.s._ekanayake.jpg";



const PastStaff=()=>{
  return(
    <>
    
    <div className='PastStaff-container'>
      <div className='row'>
        <div className='com'>
        <div class="card">
  
            <h1 className='present'>Past Staff of EEU</h1>
            <div class="card-body">
                      <h3 class="card-title">Directors</h3>
                          <p class="card-text1">2014 to 2019 Dr.(Eng.) Kamalanath Samarakoon</p>
                      <img src={Kamalnath} width="50%" class="card-img-top" alt="Dr.(Eng.) Kamalanath Samarakoon"/> <br />
                      <p class="card-text1">2012 to 2014 Dr. Gamunu Herath</p>
                      <img src={Gamunu} width="50%" class="card-img-top" alt="Dr. Gamunu Herath"/>
                      <p class="card-text1">20-- to 20-- Dr. Asanga Rathnaweera</p>
                      <img src={Asanga} width="50%" class="card-img-top" alt="Dr. Asanga Rathnaweera"/>
                      <p class="card-text1">20-- to 20-- Dr. Jayalath Edirisinghe</p>
                      <img src={Edirisighe} width="50%" class="card-img-top" alt="Dr. Jayalath Edirisinghe"/>
                      <h4>Contributions</h4> 
                      
                      <ul>
                      <li>Created the initial database of students and issued a card ID ( within one month of registration).
                          </li>
                          <li>Did few training sessions for staff on,
                            <ul><li>Course Unit System</li>
                            <li>Photoshop (Adobe)</li> 
                            <li>Macromedia Flash</li> </ul>
                              </li> 
                              <li>Introduced the image based inventory for EEU.</li>
                              <li>Items purchased including a digital camera from generated funds, and few facilities from ADB grant.
                      </li>
                      </ul>
                      
                      <p> 19 to 19-- Dr. Maroof</p>
                      <p> 19 to 2000 Prof. K.D.W. Nandalal</p>
                      <img src={Nandalal} width="50%" class="card-img-top" alt="Prof. K.D.W. Nandalal"/><br />
                        
                      <p> 19 to 19-- Dr. Somarathna</p>
                      <p> 19 to 19-- Mr. Sarath Senavirathna</p>
                      <p> 19 to 19-- Dr. Vinayagalingam</p>
                      <p> 19 to 19-- Prof. T.D.M.A. Samuel</p>
                      <img src={Samuel} width="50%" class="card-img-top" alt="Prof. T.D.M.A. Samuel"/><br />
                      <h3>Teaching Assistants</h3>
                      <p>19 to 19-- Mr.Warnakulasoriya</p>
                      <h3>Audio Visual Technical Officers</h3>
                      <p>1996 to 19-- Mr.R.M.G Rathnayake</p>
                      <img src={Gamini} width="50%" class="card-img-top" alt="Mr.R.M.G Rathnayake"/><br />

                      <h3 class="card-title">Supporting Staff</h3>
                      <p>20-- to 20--Mr. A.M.P.G.S. Ekanayake</p>
                      <img src={Ekanayake} width="50%" class="card-img-top" alt="Mr. A.M.P.G.S. Ekanayake"/>
            </div> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PastStaff;