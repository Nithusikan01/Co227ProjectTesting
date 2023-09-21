import React from "react";
import './Titlebar.css';
import { Link } from 'react-router-dom';


function TitleBar({ history }) {

    return(
        <>
        <div className="TitleBar">
            <div class="row justify-content-between">
                <div className="Home-button-box col-auto">
                <Link to="/" className="Home-button">
                    <button class="btn" style={{color: "whitesmoke"}}>Home</button>
                </Link> 
                </div>
                
                <div className="Login-button-box col-auto">
                    <Link to="/login" className="Login-button">
                        <button class="btn" style={{color: "whitesmoke"}}>Log In</button>
                    </Link>
                </div>
            </div>    
        </div>
        </>
    );
}

export default TitleBar;