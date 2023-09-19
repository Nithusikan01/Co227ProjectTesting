import React from 'react';
import './staff.css';
import Deegalla from "../Staff/images/sd.jpg";
import Sam from "../Staff/images/sam.jpg";
import Path from "../Staff/images/path.jpg";


const PresentStaff=()=>{
  return(
    <>
    
    <div className='PresentStaff-container'>
      <div className='row'>
        <div className='com'>
        <div class="card">
  
            <h1 className='present'>Present Staff</h1>
            <div class="card-body">
              <h3 class="card-title">Director</h3>
              <img src={Deegalla} width="50%" class="card-img-top" alt="Eng. D.S. Deegalla"/>
              <p class="card-text1">Eng. D.S. Deegalla </p>
              <p class="card-text1">B.Sc. Eng. (Peradeniya), Ph.Lic. (Stockholm), MIEEE (USA), MIEEE-CS(USA), AMIE(SL) </p>
              <p class="card-text1">Senior Lecturer<br />Department of Computer Engineering </p>
              <p class="card-text1">Telephone: +94 81 239 (3477)
              <br />Mobile: +94 77 762 5054 </p>
              
            </div>
            <div class="card-body">
              <h3 class="card-title">Audio/Visual Technical Officer</h3>
              
              <p class="card-text1">Mr. M.G. Kaushalye Saminda Bandara</p>
              <p class="card-text2">B.A. (sp) Mass Media (Colombo) </p>
              <p class="card-text1">Audio Visual Technical Officer </p>
              <p class="card-text1">Telephone: +94 81 239 (3313)
              <br />Mobile: +94 70 393 7070 </p>
              
            </div>
            <div class="card-body">
              <h3 class="card-title">Support Staff</h3>
              <img src={Sam} class="card-img-top" alt="Mr.S.M.P.S. Samarakoon"/>
              <p class="card-text1">Mr. S.M.P.S. Samarakoon</p>
              <p class="card-text2">Works Aide</p>
              <p class="card-text1">Telephone: +94 81 239 (3304)<br /> Mobile: +94 77 984 3323 </p>
              
            </div>

            <div class="card-body">
              <h3 class="card-title">Support Staff</h3>
              <img src={Path} class="card-img-top" alt="Mr.R.K.P.C.B. Pathirana"/>
              <p class="card-text1">Mr. R.K.P.C.B. Pathirana</p>
              <p class="card-text2">Works Aide</p>
              <p class="card-text1">Telephone: +94 81 239 (3304) <br />Mobile: +94 77 233 7939 </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PresentStaff;