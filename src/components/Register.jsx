import React from 'react'
import { useState } from 'react'

export default function Register() {
    const [step,setStep]=useState(1);
    const increaseStep =()=>{
        setStep(step+1);
    }
    const decraseStep =()=>{
        setStep(step-1);
    }
  return (
    <>
      <div className="form-fields-container">
        <div className="left-container">
            <div className="left-container-content">
                <h2>Already a member ?</h2>
                <p>To keep track on your dashboard please login with your personal info</p>
                <a href="#">Login</a>
            </div>
            <img src="./images/Usability testing-bro.png" alt=""/>
        </div>
        <div className="right-container">
            <div className="back-icon"><i className="fa-solid fa-arrow-left"></i></div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form id="msform">
                        <ul id="progressbar">
                            <li className={step>=1?'active':''}>Personal Details</li>
                            <li className={step>=2?'active':''}>Social Profiles</li>
                            <li className={step>=3?'active':''}>Additional Details</li>
                            <li className={step>=4?'active':''}>Institute/Company Details</li>
                            <li className={step>=5?'active':''}>Account Setup</li>
                        </ul>

                        {step===1?
                        <fieldset>
                        <h2 className="fs-title">Personal Details</h2>
                        <h3 className="fs-subtitle">Tell us something more about you</h3>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <select name="gender" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="date" name="dob" placeholder="Date of Birth" />
                        <input type="text" name="address" placeholder="Address"/>
                        <input type="text" name="phone" placeholder="Email"/>
                        <input type="button" name="next" className="next action-button" value="Next" onClick={increaseStep}/>
                    </fieldset>:''}
                    {step===2?
                        <fieldset>
                            <h2 className="fs-title">Social Profiles</h2>
                            <h3 className="fs-subtitle">Your presence on the social network</h3>
                            <input type="text" name="github" placeholder="Github" />
                            <input type="text" name="linkedin" placeholder="LinkedIn" />
                            <input type="text" name="portfolio" placeholder="Portfolio Web" />
                            <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={decraseStep}/>
                            <input type="button" name="next" className="next action-button" value="Next" onClick={increaseStep}/>
                        </fieldset>:''}
                        {step===3?
                        <fieldset>
                            <h2 className="fs-title">Additional Info</h2>
                            <h3 className="fs-subtitle">Tell us something more about you</h3>
                            <input type="text" name="nationality" placeholder="Nationality" />
                            <select name="languages" id="">
                                <option value="" disabled selected>- Language -</option>
                                <option value="hindi">Hindi</option>
                                <option value="english">Endlish</option>
                                <option value="gujrati">Gujrati</option>
                            </select>
                            <input type="file" name="profilepic" placeholder="Select your profile picture" />
                            <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={decraseStep}/>
                            <input type="button" name="next" className="next action-button" value="Next" onClick={increaseStep}/>
                        </fieldset>:''}
                        {step===4?
                        <fieldset>
                            <h2 className="fs-title">Institute/Company Details</h2>
                            <h3 className="fs-subtitle">Your institute and company related info</h3>
                            <select name="college" id="">
                                <option value="" disabled selected>- Select College -</option>
                                <option value="">Veer namrmad south gujrat univercity</option>
                            </select>
                            <select name="course" id="">
                                <option value="" disabled selected>- Select Course -</option>
                                <option value="">MscIT</option>
                                <option value="">BBA</option>
                                <option value="">BCA</option>
                            </select>
                            <input type="text" name="yearofjoining" placeholder="Year of joining" />
                            <input type="text" name="companyname" placeholder="Name of Company"/>
                            <input type="text" name="designation" placeholder="Designation"/>
                            <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={decraseStep}/>
                            <input type="button" name="next" className="next action-button" value="Next" onClick={increaseStep}/>
                        </fieldset>:''}
                        {step===5?
                        <fieldset>
                            <h2 className="fs-title">Create your account</h2>
                            <h3 className="fs-subtitle">Fill in your credentials</h3>
                            <input type="text" name="email" placeholder="Email" />
                            <input type="password" name="pass" placeholder="Password" />
                            <input type="password" name="cpass" placeholder="Confirm Password" />
                            <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={decraseStep}/>
                            <input type="submit" name="submit" className="submit action-button" value="Submit"/>
                        </fieldset>:''}
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
