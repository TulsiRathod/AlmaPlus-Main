import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { toast } from "react-toastify";

export default function ViewProfile() {
  const [user,setUser]=useState({});
  const [add,setAdd]=useState();
  const getUser=async()=>{
    const userID=localStorage.getItem("AlmaPlus_Id");
   await axios({
      method:'get',
      url:`${WEB_URL}/api/searchUserById/${userID}`
    }).then((Response)=>{
      console.log(Response.data.data[0]);
      setUser(Response.data.data[0]);
      setAdd(Response.data.data[0].address);
    }).catch((error)=>{
      toast.error("Something Went Wrong");
    });
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="profile-main">
          <div className="profile-container">
            <div className="profile-cover"></div>
            <div className="profile-container-inner">
              <img src={`${WEB_URL}${user.profilepic}`} alt="" className="profile-pic" />
              <h1>{user.fname} {user.lname}</h1>
              <b>
                {user.designation} {user.companyname?`at ${user.companyname}`:""}
              </b>
              <p>
               Surat, Gujarat, India &middot; <a href="#">Contact info</a>
              </p>
              <div className="mutual-connection">
                <img src="/images/profile2.jpg" alt="" />
                <span>1 mutual connection : Mansi Patel</span>
              </div>
              <div className="profile-btn">
                <a href="#" className="primary-btn">
                  <i className="fa-solid fa-plus"></i>Connect
                </a>
                <a href="#">
                  <i className="fa-solid fa-lock"></i>Message
                </a>
              </div>
            </div>
          </div>

          <div className="profile-description">
            <h2>About</h2>
            <p>
              The Success of every website depends on search engine optimisation
              and digital marketing strategy. if you are on first page of all
              major search engines then you are ahead among your competitors on
              first page of all major search engines then you are ahead among
              your competitors.
            </p>
          </div>

          <div className="profile-description">
            <h2>Experience</h2>
            <div className="profile-desc-row">
              <img src="images/Microsoft.png" alt="" />
              <div>
                <h3>Lead Front-End Developer</h3>
                <b>Microsoft &middot; Full-time</b>
                <b>Feb 2021 - Present &middot;</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation usually by designing and building an executable
                  computer program.
                </p>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src="images/Slack.png" alt="" />
              <div>
                <h3>Full Stack Developer</h3>
                <b>Slack &middot; Full-time</b>
                <b>June 2018 - Jan 2021 &middot; 2.6 years</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation usually by designing and building an executable
                  computer program.
                </p>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src="images/Google.png" alt="" />
              <div>
                <h3>Web Developer</h3>
                <b>Google Inc &middot; Full-time</b>
                <b>Sept 2015 - May 2018 | &middot; 1.5 years</b>
                <p>
                  Computer programming is the process of performing a particular
                  computation usually by designing and building an executable
                  computer program.
                </p>
              </div>
            </div>
            <hr />
            <a href="#" className="experience-link">
              Show all experiences
              <i className="fa-solid fa-arrow-right" style={{color: "#4d4d4d"}}></i>
            </a>
          </div>

          <div className="profile-description">
            <h2>Education</h2>
            <div className="profile-desc-row">
              <img src="/images/DAIICT-LOGO.jpg" alt="" />
              <div>
                <h3>
                  Dhirubhai Ambani Insitute of Information and Communication
                  Technology
                </h3>
                <b>MSC, Information Technology</b>
                <b>2021 - 2023</b>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src="/images/VNSGU-LOGO.jpg" alt="" />
              <div>
                <h3>Veer Narmad South Gujarat Univercity</h3>
                <b>BSC, Information Technology</b>
                <b>2018 - 2021</b>
                <hr />
              </div>
            </div>
          </div>

          <div className="profile-description">
            <h3>Skills</h3>
            <a href="#" className="skills-btn">
              Leadership
            </a>
            <a href="#" className="skills-btn">
              Web Design
            </a>
            <a href="#" className="skills-btn">
              Development
            </a>
            <a href="#" className="skills-btn">
              UI/UX
            </a>
            <a href="#" className="skills-btn">
              Communication
            </a>
            <a href="#" className="skills-btn">
              Planning
            </a>
            <a href="#" className="skills-btn">
              C/C++
            </a>
            <a href="#" className="skills-btn">
              Python
            </a>
            <a href="#" className="skills-btn">
              Javascript
            </a>
            <a href="#" className="skills-btn">
              Html/css
            </a>
            <a href="#" className="skills-btn">
              Java
            </a>
            <a href="#" className="skills-btn">
              ASP.NET
            </a>
          </div>

          <div className="profile-description">
            <h3>Language</h3>
            <a href="#" className="language-btn">
              English
            </a>
            <a href="#" className="language-btn">
              Hindi
            </a>
            <a href="#" className="language-btn">
              Gujarati
            </a>
          </div>
        </div>
        <div className="profile-sidebar">
          <div className="sidebar-people">
            <h3>People you may know</h3>

            <div className="sidebar-people-row">
              <img src="images/user2.jpg" alt="" />
              <div>
                <h2>Aryan Patel</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <hr />

            <div className="sidebar-people-row">
              <img src="images/user3.png" alt="" />
              <div>
                <h2>Drashti Dankhara</h2>
                <p>Web Developer at Microsoft</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <hr />

            <div className="sidebar-people-row">
              <img src="images/user1.png" alt="" />
              <div>
                <h2>Mansi Patel</h2>
                <p>Designer at Amazon</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
