import React from "react";
import {NavLink} from "react-router-dom";

export default function Login() {
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
            <div className="option">
              <span>Forget Password ?</span>   
            </div>
            <div className="new-account">
              Don't have an Account?
              <span>SIGN UP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
