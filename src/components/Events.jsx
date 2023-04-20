import React from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
  return (
    <>
      <div className="container-2">
        <div className="events-cover">
            <div className="content">
            <Link to="/home">
                <div>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </Link>
                <h1>Events</h1>
                <b>Find The Best Event</b>
            </div>
            <img src="/images/Events-amico.png" alt=""/>
        </div>
        <div className="container">
            <div className="events-links">
                <ul>
                    <li>
                        <a href="#" className="active-link">All</a>
                    </li>
                    <li>
                        <a href="#">Upcomming</a>
                    </li>
                    <li>
                        <a href="#">Past</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="container">
            <div className="events-list">
                <div className="card">
                    <img src="/images/Event2.jpg" alt=""/>
                    <div className="intro">
                        <h2>Anual Day - 2023</h2>
                        <ul>
                            <li><i className="fa-regular fa-calendar-days" style={{color: "#919090"}}></i><span>2020-03-10</span></li>
                            <li><i className="fa-regular fa-clock" style={{color: "#919090"}}></i><span>11:00 AM - 01:00 PM</span></li>
                            <li><i className="fa-solid fa-location-dot" style={{color: "#919090"}}></i><span>VNSGU - Convention Hall</span></li>
                        </ul>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/Event2.jpg" alt=""/>
                    <div className="intro">
                        <h2>Anual Day - 2023</h2>
                        <ul>
                            <li><i className="fa-regular fa-calendar-days" style={{color: "#919090"}}></i><span>2020-03-10</span></li>
                            <li><i className="fa-regular fa-clock" style={{color: "#919090"}}></i><span>11:00 AM - 01:00 PM</span></li>
                            <li><i className="fa-solid fa-location-dot" style={{color: "#919090"}}></i><span>VNSGU - Convention Hall</span></li>
                        </ul>
                        <a href="#">View More</a>
                    </div>
                </div>

                
            </div>

        </div>
    </div>
    </>
  )
}
