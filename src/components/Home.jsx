import React from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <div className="home-container">
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

        <div className="home-post-main">
          <div className="new-post-box">
            <img src="images/profile_img.jpg" alt="" />
            <div className="new-post-content">
              <div className="new-post-text">
                <input type="text" placeholder="Write Here" />
                <i className="fa-regular fa-image"></i>
              </div>
              <div className="selected-img">
                <div>
                  <img src="images/Job offers-bro.png" alt="" />
                </div>
                <div>
                  <img src="images/Job offers-cuate.png" alt="" />
                </div>
                <div>
                  <img src="images/Job offers-rafiki.png" alt="" />
                </div>
                <div className="more-image">+</div>
              </div>
            </div>
            <button type="submit" className="new-post-btn">
              Post
            </button>
          </div>

          <div className="post-box">
            <div className="post">
              <div className="post-header">
                <div className="post-profile">
                  <div>
                    <img
                      src="images/user3.png"
                      alt=""
                      className="post-profile-img"
                    />
                  </div>
                  <div className="post-info">
                    <span className="post-name">Drashti Dankhara</span>
                    <span className="post-description">
                      Web Developer at Microsoft
                    </span>
                  </div>
                </div>
                <div className="post-option">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className="post-message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque alias nulla non id dicta vero.
              </div>
              <div className="post-image">
                <Slider {...settings}>
                  <img src="images/Job offers-bro.png" alt="" />
                  <img src="images/Job offers-cuate.png" alt="" />
                  <img src="images/Job offers-rafiki.png" alt="" />
                </Slider>
              </div>
              <div className="likebar">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <div className="post">
              <div className="post-header">
                <div className="post-profile">
                  <div>
                    <img
                      src="images/user3.png"
                      alt=""
                      className="post-profile-img"
                    />
                  </div>
                  <div className="post-info">
                    <span className="post-name">Drashti Dankhara</span>
                    <span className="post-description">
                      Web Developer at Microsoft
                    </span>
                  </div>
                </div>
                <div className="post-option">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className="post-image">
                <Slider {...settings}>
                  <img src="images/Job offers-bro.png" alt="" />
                  <img src="images/Job offers-cuate.png" alt="" />
                  <img src="images/Job offers-rafiki.png" alt="" />
                </Slider>
              </div>
              <div className="likebar">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <div className="post">
              <div className="post-header">
                <div className="post-profile">
                  <div>
                    <img
                      src="images/user3.png"
                      alt=""
                      className="post-profile-img"
                    />
                  </div>
                  <div className="post-info">
                    <span className="post-name">Drashti Dankhara</span>
                    <span className="post-description">
                      Web Developer at Microsoft
                    </span>
                  </div>
                </div>
                <div className="post-option">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className="post-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus molestias non voluptatum nesciunt id. Dolorum tempora
                architecto rem, dignissimos placeat iusto eveniet. Libero cumque
                nobis labore porro tempore totam, non minus asperiores dolor,
                impedit eligendi praesentium. Vitae, recusandae, harum ipsum
                neque alias odio ducimus nam voluptas expedita in architecto
                voluptatibus eligendi magnam, minus quo quisquam corporis
                cumque! Sapiente velit officiis animi eveniet fuga nemo adipisci
                dolorem perferendis qui voluptate soluta blanditiis beatae nisi
                eaque dicta, dolores, explicabo, magnam consectetur accusantium
                distinctio voluptatem maxime earum. Qui reiciendis nihil aliquid
                modi veniam at mollitia nam molestiae tenetur earum, cum
                aspernatur magni. Pariatur.
              </div>
              <div className="likebar">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="home-events-main">
          <div className="event-box">
            <span>Upcoming Events</span>
            <div className="div-line"></div>
            <img src="images/Events-bro.png" alt="" />
            <div className="upcoming-events">
              <div className="upcoming-event">
                <div className="event-img">
                  <img src="images/Event1.jpg" alt="" />
                </div>
                <div className="event-info">
                  <div className="event-name">Sports Day-2022</div>
                  <div className="event-date">
                    <i className="fa-solid fa-calendar-days"></i>2020-09-10
                  </div>
                  <div className="event-time">
                    <i className="fa-regular fa-clock"></i>08:00 AM - 11:00AM
                  </div>
                </div>
              </div>
              <div className="upcoming-event">
                <div className="event-img">
                  <img src="images/Event2.jpg" alt="" />
                </div>
                <div className="event-info">
                  <div className="event-name">Sports Day-2022</div>
                  <div className="event-date">
                    <i className="fa-solid fa-calendar-days"></i>2020-09-10
                  </div>
                  <div className="event-time">
                    <i className="fa-regular fa-clock"></i>08:00 AM - 11:00AM
                  </div>
                </div>
              </div>
              <div className="upcoming-event">
                <div className="event-img">
                  <img src="images/event3.jpeg" alt="" />
                </div>
                <div className="event-info">
                  <div className="event-name">Sports Day-2022</div>
                  <div className="event-date">
                    <i className="fa-solid fa-calendar-days"></i>2020-09-10
                  </div>
                  <div className="event-time">
                    <i className="fa-regular fa-clock"></i>08:00 AM - 11:00AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
