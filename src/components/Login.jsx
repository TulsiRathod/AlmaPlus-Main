import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

export default function Login() {
  const nav=useNavigate();
  return (
    <>
      <div className="wrap1">
        <div className="login-img-box">
          <img src="images/register-animate.svg" alt="" />
        </div>
        <div className="main-box">
          <div className="main">
            <div className="login-logo">
              <img src="images/Logo.jpg" alt="" />
            </div>
            <div className="title">Login</div>
            <div className="input-box ">
              <input type="text" placeholder="Enter Your Username" required />
              <div className="underline"></div>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Your Password"
                required
              />
              <div className="underline"></div>
            </div>
            <div className="input-box button">
              <input type="submit" name="" value="Continue" />
            </div>
            <div className="option" onClick={()=>{nav('/forget-password')}}>
              <span>Forget Password ?</span>   
            </div>
            <div className="new-account" onClick={()=>{nav('/register')}}>
              Don't have an Account?
              <span>Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
