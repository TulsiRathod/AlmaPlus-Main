import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Notidfication() {
  return (
    <>
    <Navbar/>
      <div class="home-container">
      <div className="profile-card-main">
          <div className="profile-card">
            <div className="profile-card-imgbox">
              <img
                src="images/profile_img.jpg"
                alt=""
                className="profile-card-img"
              />
            </div>

            <div className="profile-card-info">
              <span className="profile-card-name">Tulsi Rathod</span>
              <span>Web Developer at Microsoft</span>
            </div>
            <Link to="/view-profile">
              <div className="profile-card-button">
                <button>View Profile</button>
              </div>
            </Link>
          </div>

          <div className="menu-container">
            <Link to="/events">
            <div className="menu">
              <i className="fa-solid fa-calendar"></i>Events
            </div>
            </Link>
            <Link to="/feedback">
            <div className="menu">
              <i className="fa-solid fa-star"></i>FeedBack & Rating
            </div>
            </Link>
            <hr className="hr-line" />
            <Link to="/">
            <div className="menu">
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </div>
            </Link>
          </div>
        </div>

        <div class="notification-main">
          <div class="notification-box">
            <div class="notification">
              <div class="notifiction-img">
                <img src="images/Event1.jpg" alt="" />
              </div>
              <div class="notification-info">
                <div class="notification-name">
                  Upcoming Event Sport Day-2023
                </div>
                <div class="notification-desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  earum magnam cum. Neque debitis mollitia et, dolore commodi
                  officiis eum consequatur, magnam alias ea pariatur?
                </div>
              </div>
              <div class="notification-option">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
