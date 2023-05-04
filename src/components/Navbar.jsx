import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-left">
            <Link to="/" class="logo"><img src="/images/Logo.jpg"/></Link>
            <div class="search-box">
                <i class="fa-sharp fa-solid fa-magnifying-glass" style={{color: "#787878"}}></i>
                <input type="text" placeholder="search"/>
            </div>
        </div>
        <div class="navbar-center">
            <ul>
                <Link to="/home">
                    <li>
                        <i class="fa-solid fa-house"></i><span>Home</span>
                    </li>
                </Link>
                <Link to="/events">
                    <li>
                        <i class="fa-solid fa-calendar"></i><span>Events</span>
                    </li>
                </Link>

                <Link to="/message">
                    <li>
                        <i class="fa-solid fa-message"></i><span>Messaging</span>
                    </li>
                </Link>
                <Link to="/notification">
                    <li>
                        <i class="fa-solid fa-bell"></i><span>Notification</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div class="navbar-right">
            <img src="images/profile1.png" class="nav-profile-img"/>
            <div class="user-profile">
                <span>Me</span>
                <i class="fa-solid fa-caret-down" style={{color: "#7e7f81"}}></i>
            </div>
        </div>
    </nav>
    </>
  )
}
