import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Feedback() {
    const [feedback,setFeedback]=useState();
    const [rate,setRate]=useState(0);
  return (
    <>
    <Navbar/>
      <div className="wrapper">
        <div className="main-container">
            <div className="l-container">
                <div className="feedback-form">
                    <div className="rating">
                        <h2>Rate and review</h2>
                        <span className="count-rate">Rating ({rate}/5)</span>
                        <ul>
                            <li onClick={()=>{setRate(1)}}>
                                <i className={`fa-sharp fa-star fa-2xl ${rate>=1?'fa-solid':'fa-regular'}`}></i>
                            </li>
                            <li onClick={()=>{setRate(2)}}>
                                <i className={`fa-sharp fa-star fa-2xl ${rate>=2?'fa-solid':'fa-regular'}`}></i>
                            </li>
                            <li onClick={()=>{setRate(3)}}>
                                <i className={`fa-sharp fa-star fa-2xl ${rate>=3?'fa-solid':'fa-regular'}`}></i>
                            </li>
                            <li onClick={()=>{setRate(4)}}>
                                <i className={`fa-sharp fa-star fa-2xl ${rate>=4?'fa-solid':'fa-regular'}`}></i>
                            </li>
                            <li onClick={()=>{setRate(5)}}>
                                <i className={`fa-sharp fa-star fa-2xl ${rate>=5?'fa-solid':'fa-regular'}`}></i>
                            </li>
                        </ul>
                    </div>
                    <div className="review">
                        <h2>Review</h2>
                        <input type='text' placeholder="Write Feedback" className="txt-feedback" multiple={true}></input>
                        <button type="submit" className="btn-sendfeedback">SEND</button>
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
