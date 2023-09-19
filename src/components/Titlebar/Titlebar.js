import React from "react";
import './Titlebar.css';
import { Link } from 'react-router-dom';


function TitleBar({ history }) {

    return(
        <>
        <div className="TitleBar">
            <div class="row justify-content-between">
                <div className="Home-button-box col-auto">
                <Link to="/" className="Home-button">Home</Link> 
                </div>
                
                <div className="Login-button-box col-auto">
                    <button className="Login-button">Log In</button>
                </div>
            </div>    
        </div>
        </>
    );
}

export default TitleBar;