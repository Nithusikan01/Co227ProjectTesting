import React from "react";
import './Titlebar.css';
import { Link } from 'react-router-dom';
import LogIn from "../Login/LoginSignup";


function TitleBar({ history }) {

    return(
        <>
        <div className="TitleBar">
            <div class="row justify-content-between">
                <div className="Home-button-box col-auto">
                <Link to="/" className="Home-button">Home</Link> 
                </div>
                
                <div className="Login-button-box col-auto">
                    <Link to="" className="Login-button">Log In</Link>
                </div>
            </div>    
        </div>
        </>
    );
}

export default TitleBar;