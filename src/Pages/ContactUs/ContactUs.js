import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='ContactUs-container'>
      <h1>Contact Us</h1>
      <div className='row'>
        {/* Director Section */}
        <div className='col-md-6'>
          <h2>Director</h2>
          <p>Dr. Eng. Kamalanath Samarakoon</p>
          <p>Dept of Computer Engineering</p>
          <p>Faculty of Engineering</p>
          <p>University of Peradeniya</p>
          <p>Sri Lanka</p>

          <h3>Telephone</h3>
          <p>Office: +94 (0)81 2393918</p>
          <p>Home: +94 (0)81 2499199</p>
          <p>Mobile: +94 (0)71 2277994</p>

          <h3>Mail</h3>
          <p>Email: direeu@eng.pdn.ac.lk</p>
          <p>Email: kamalanath@eng.pdn.ac.lk</p>
        </div>

        {/* Office Section */}
        <div className='col-md-6'>
          <h2>Office</h2>
          <p>Engineering Education Unit</p>
          <p>Faculty of Engineering</p>
          <p>University of Peradeniya</p>
          <p>Sri Lanka</p>

          <h3>Phone</h3>
          <p>Phone: +94-81-239-3918</p>

          <h3>Mobile</h3>
          <p>Office: 081-239-3304/3313</p>

          <h2>WEB</h2>
          <p>
            <a
              href='http://eng.pdn.ac.lk/eeu'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://eng.pdn.ac.lk/eeu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
