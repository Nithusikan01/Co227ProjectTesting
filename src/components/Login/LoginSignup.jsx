import React, {useState} from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className = 'container'>
            <div className='inner-container'>
            <div className = 'header'>
                <div className = "text">{action}</div>
                <div className = "underLine"></div>
            </div>
            <div className = "inputs">
                {action === "Login" ?<div></div>:<div className = "input">
                    <i className="bi bi-person-fill"></i>
                    <input type={"name"} placeholder={"Name"}/>
                </div>}

                <div className = "input">
                    <i className="bi bi-envelope-at-fill"></i>
                    <input type={"email"} placeholder={"Email Id"}/>
                </div>
                <div className = "input">
                    <i className="bi bi-key-fill"></i>
                    <input type={"password"} placeholder={"Password"}/>
                </div>
            </div>
            {action === "Login"?<div className = "forgot-password">
                Lost Password? <span> Click Here!</span>
            </div>:<div></div>}

            <div className = "submit-container">
                <div className = {action === "Login"? "submit gray": "submit"} onClick={()=>setAction("Sign Up")}>Sign up</div>
                <div className ={action === "Sign Up"? "submit gray": "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>

            </div>
        </div>
    )
}

export default LoginSignup