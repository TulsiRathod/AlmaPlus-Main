import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { toast } from "react-toastify";
import EditProfileModal from "./EditProfileModal";


export default function ViewProfile() {
  const [user,setUser]=useState({});
  const [add,setAdd]=useState();
  const [language,setLanguage]=useState([]);
  const [skills,setSkills]=useState([]);
  const [education,setEducation]=useState([]);
  
  const[showModal,setshowmodal]=useState(false);
  const closeModal =()=>setshowmodal(false);
  const getUser=()=>{
    const userID=localStorage.getItem("AlmaPlus_Id");
   axios({
      method:'get',
      url:`${WEB_URL}/api/searchUserById/${userID}`
    }).then((Response)=>{
      console.log(Response.data.data[0]);
      setLanguage(JSON.parse(Response.data.data[0].languages));
      setUser(Response.data.data[0]);
      setAdd(Response.data.data[0].address);
      setSkills(JSON.parse(Response.data.data[0].skills));
    }).catch((error)=>{
      toast.error("Something Went Wrong");
    });
  }

  const getEducation=()=>{
    const userID=localStorage.getItem("AlmaPlus_Id");
    console.log(userID);
    axios({
      method:'post',
      url:`${WEB_URL}/api/getEducation`,
      data:{
        "userid":"6465b03595266219d3036fa2",
      },
    }).then((Response)=>{
      console.log(Response.data.data);
      setEducation(Response.data.data);
    }).catch((Error)=>{
      console.log(Error);
    })
  }

  

  useEffect(()=>{
    getUser();
    getEducation();
  },[])

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="profile-main">
          <div className="profile-container">
            <div className="profile-cover"></div>
            <div className="profile-container-inner">
              <div><img src={`${WEB_URL}${user.profilepic}`} alt="" className="profile-pic" />
              <h1>{user.fname} {user.lname}</h1>
              <b>
                {user.designation} {user.companyname?`at ${user.companyname}`:""}
              </b>
              <p>
                {user.institute}
              </p>
              <p>
               Surat, Gujarat, India  &middot; <a>Contact info</a>
              </p></div>
              <div className="edit-icon"><i class="fa-solid fa-pencil" onClick={()=> setshowmodal(true)}></i></div>
            </div>
            
          </div>

          {user.about!==""?<div className="profile-description">
            <h2>About</h2>
            <p>
              {user.about}
            </p>
          </div>:null}

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

          {education.length>0?<div className="profile-description">
            <h2>Education</h2>
            {education.map((elem)=>
               <div className="profile-desc-row">
               <img src={`${WEB_URL}${elem.collagelogo}`} alt="" />
               <div>
                 <h3>
                   {elem.institutename}
                 </h3>
                 <b>{elem.course}</b>
                 <b>{elem.joinyear.split("-")[0]} - {elem.endyear.split("-")[0]}</b>
                 <hr />
               </div>
             </div>
            )}
          </div>:null}

          {skills.length>0?<div className="profile-description">
            <h3>Skills</h3>
            {skills.map((elem)=>
            <a className="skills-btn">
              {elem}
            </a>)}
          </div>:null}

          {language.length>0?<div className="profile-description">
            <h3>Language</h3>
          {language.map((elem)=>
            <a className="language-btn">
              {elem}
            </a>
          )}
          </div>:null}
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
      {showModal &&<EditProfileModal closeModal={closeModal} user={user} setUser={setUser}/>}
    </>
  );
}
