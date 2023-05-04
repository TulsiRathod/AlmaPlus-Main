import React from 'react'

function ForgetPassword() {
  return (
    <>
      <div class="forgot">
        <div class="forgot-left">
                <img src="images/Forgot password-amico.svg" alt="forgot password image"/>
        </div>
        <div class="forgot-right">
            <h1>Forgot Your Password ?</h1><br/>
            <h4>Please Enter your email address below</h4><br/>
            <div class="user-email">
            <i class="fa-solid fa-envelope"></i>
            <input type="text" placeholder="EMAIL ADDRESS" id="email-input"/>
            </div>
            <br/>
            <button id="btn-reset-password">RESET PASSWORD</button>
        </div>
    </div>
    </>
  )
}

export default ForgetPassword
