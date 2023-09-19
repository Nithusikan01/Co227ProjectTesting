import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <div className = "footer">
        <div className="sb__footer_section ">
            <h2 className= "contact_us">Contact Us</h2>
            <div className = "sb__footer-links">
                <div className = "sb__footer-links-div">
                    <h3>Director</h3>
                    <span>
                        
                            <p><b>Dr. Eng. Kamalanath Samarakoon</b></p>
                            <p>Dept of Computer Engineering,<br></br>Faculty of Engineering,<br></br>University of Peradeniya,<br></br>Sri Lanka.</p>
                            <p>Telephone:</p>
                            <ul>
                                <li>Office:  +94 (0)81 2393918</li>
                                <li>Home:  +94 (0)81 2499199</li>
                                <li>Mobile: +94 (0)71 2277994</li>
                            </ul>
                            <p>Mail: </p>
                            <ul>
                                <li>direeu@eng.pdn.ac.lk</li>
                                <li>kamalanath@eng.pdn.ac.lk</li>
                            </ul>
                        
                    </span>
                </div>
                <div className = "sb__footer-links-div">
                    <h3>Office</h3>
                        <span>
                            <p><b>Address:</b></p>
                            <p>Engineering Education Unit,<br></br>Faculty of Engineering,<br></br>University of Peradeniya<br></br>Sri Lanka .</p>
                        </span>
                           
                </div>
                <div className = "sb__footer-links-div">
                    <h3>Contact</h3>
                    <ul>
                        <li>Phone: +94 (0)81 2393918</li>
                        <li>Mobile:</li>
                        <li>Office : 081 2393304 / 081 2393313</li>
                    </ul>
                    
                    
                </div>
            </div>

            <div className = "sb__footer-below">
                <div className = "sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>
                <div className = "sb__footer-below-links">
                    <a href="/terms">
                        <div>
                            <p>
                                Terms & Conditions
                            </p>
                        </div>
                    </a>
                    <a href="/privacy">
                        <div>
                            <p>
                                Privacy
                            </p>
                        </div>
                    </a>
                    <a href="/security">
                        <div>
                            <p>
                                Security
                            </p>
                        </div>
                    </a>
                    <a href="/cookie">
                        <div>
                            <p>
                                Cookie declaration
                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
