import React from "react";
import './CSS/Login.css';
function Login() {
    return ( 
        <div className="loginSignUp">
            <div className="loginSignUp-container">
                <h1>Sign Up</h1>
                <div className="loginSignUp-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email Adress"/>
                    <input type="password" placeholder="Your password"/>
                    </div>
                    <button>Continue</button>
                    <p className="loginSignUp-login">Already have an account ? <span>Login here</span></p>
                    <div className="loginSignUp-agree">
                        <input type="checkbox" name='' id="" />
                        <p>By continuing,I agree to the terms of use & privacy policy  </p>
                    </div>
            </div>
        </div> );
}

export default Login ;