import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Feedback() {
  return (
    <>
    {/* <Navbar/> */}
      <div className="wrapper">
        <div className="main-container">
            <div className="l-container">
            <Link to="/home">
                <div className="back-arrow">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </Link>
                <div className="feedback-form">
                    <div className="logo1">
                        <img src="images/Logo.jpg" alt="logo" height="35px" width="35px"/>
                    </div><br/>
                    <div className="rating">
                        <h2>Rate and review</h2><br/>
                        <span className="count-rate">Rating (4/5)</span><br/><br/>
                        <ul>
                            <li>
                                <i className="fa-sharp fa-solid fa-star fa-2xl"></i>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-star fa-2xl"></i>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-star fa-2xl"></i>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-star fa-2xl"></i>
                            </li>
                            <li>
                                <i className="fa-sharp fa-regular fa-star fa-2xl"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="review">
                        <h2>Review</h2><br/>
                        <textarea placeholder="Give Your valuable feedback here." rows="5" cols="54"
                            id="txt-feedback" style={{resize:"none"}}></textarea>
                    </div>
                    <div className="btn-sec">
                        <button type="submit" id="btn-sendfeedback">SEND</button>
                    </div>
                </div>
            </div>
            <div className="r-container">
                <img src="images/feedback-animate.svg" alt="image"/>
            </div>
        </div>
    </div> 
    </>
  )
}
