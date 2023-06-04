import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function ViewSearchProfile() {
  const location = useLocation();
  useEffect(() => {
    setUserID(location.state.id);
  }, []);
  const nav=useNavigate();
  const [user, setUser] = useState({});
  const [language, setLanguage] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [contactInfo, setContactInfo] = useState(false);
  const [experience, setExperience] = useState([]);
  const myID = localStorage.getItem("AlmaPlus_Id");
  const [userID, setUserID] = useState("");

  const getUser = () => {
    if (userID !== "") {
      axios({
        method: "get",
        url: `${WEB_URL}/api/searchUserById/${userID}`,
      })
        .then((Response) => {
          // console.log(Response.data.data[0]);
          setLanguage(JSON.parse(Response.data.data[0].languages));
          setUser(Response.data.data[0]);
          setSkills(JSON.parse(Response.data.data[0].skills));
        })
        .catch((error) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  const getEducation = () => {
    if (userID !== "") {
      axios({
        method: "post",
        url: `${WEB_URL}/api/getEducation`,
        data: {
          userid: userID,
        },
      })
        .then((Response) => {
          //   console.log(Response.data.data);
          setEducation(Response.data.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  };

  const getExperience = () => {
    if (userID !== "") {
      axios({
        method: "post",
        url: `${WEB_URL}/api/getExperience`,
        data: {
          userid: userID,
        },
      })
        .then((Response) => {
          // console.log(Response.data.data);
          setExperience(Response.data.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  };

  const handleFollow = () => {
    axios({
        url:`${WEB_URL}/api/follow/${userID}`,
        data:{
            userId:myID
        },
        method:"put"
    }).then((Response)=>{
        // console.log(Response);
        toast(Response.data);
        getUser();
        if(!user.followings.includes(myID.toString())){
            handleConversation();
        }
    }).catch((error)=>{
        console.log(error);
    })
  };

  const handleConversation=()=>{
    axios({
        url:`${WEB_URL}/api/newConversation`,
        data:{
            senderId:myID,
            receiverId:userID
        },
        method:"post"
    }).then((Response)=>{
        // console.log(Response);
    }).catch((error)=>{
        console.log(error.response.data);
    })
  }

  const formatDate = (date) => {
    if (date == "" || date == null) {
      return "Present";
    }
    var year = date.split("-")[0];
    var month = date.split("-")[1];
    switch (month) {
      case "01":
        return `January ${year}`;
      case "02":
        return `February ${year}`;
      case "03":
        return `March ${year}`;
      case "04":
        return `April ${year}`;
      case "05":
        return `May ${year}`;
      case "06":
        return `June ${year}`;
      case "07":
        return `July ${year}`;
      case "08":
        return `August ${year}`;
      case "09":
        return `September ${year}`;
      case "10":
        return `October ${year}`;
      case "11":
        return `November ${year}`;
      case "12":
        return `December ${year}`;
        break;
    }
  };

  useEffect(() => {
    getUser();
    getEducation();
    getExperience();
  }, [userID]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="profile-main">
          <div className="profile-container">
            <div className="profile-cover"></div>
            <div className="profile-container-inner">
              <div>
                <img
                  src={`${WEB_URL}${user.profilepic}`}
                  alt=""
                  className="profile-pic"
                />
                <h1>
                  {user.fname} {user.lname}
                </h1>
                <p>{user.institute && user.institute}</p>
                <p>
                  {user.city && user.city} {user.state && user.state}{" "}
                  {user.nation ? `, ${user.nation} ` : null}
                  <a
                    onClick={() => {
                      setContactInfo(!contactInfo);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Contact info
                  </a>
                </p>
                <div
                  className="contactInfo"
                  style={{ display: `${contactInfo ? "block" : "none"}` }}
                >
                  {user.github !== "" ? (
                    <div>
                      <i class="fa-brands fa-github"></i> {user.github}
                    </div>
                  ) : null}
                  {user.linkedin !== "" ? (
                    <div>
                      <i class="fa-brands fa-linkedin-in"></i> {user.linkedin}
                    </div>
                  ) : null}
                  {user.portfolioweb !== "" ? (
                    <div>
                      <i class="fa-regular fa-id-card"></i> {user.portfolioweb}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                
                  {user.followers && user.followers.includes(myID.toString())
                    ? <button className="view-profile-button1">Followed</button>
                    : <button className="view-profile-button1" onClick={handleFollow}>Follow</button>}
                
                {user.followers && user.followers.includes(myID.toString()) ? (
                  <button className="view-profile-button2" onClick={()=>{nav('/message',{state:user})}}>Message</button>
                ) : null}
              </div>
            </div>
          </div>

          {user.about !== "" ? (
            <div className="profile-description">
              <h2>About</h2>
              <p>{user.about}</p>
            </div>
          ) : null}

          {experience.length > 0 ? (
            <div className="profile-description">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Experience</h2>
              </div>
              {experience.map((elem) => (
                <div className="profile-desc-row">
                  <img src={`${WEB_URL}${elem.companylogo}`} alt="" />
                  <div>
                    <h3>{elem.position}</h3>
                    <b>{elem.companyname} &middot; Full-time</b>
                    <b>
                      {formatDate(elem.joindate)} - {formatDate(elem.enddate)}
                    </b>
                    {elem.description !== "" ? (
                      <p>
                        <strong>Description :</strong> {elem.description}
                      </p>
                    ) : (
                      ""
                    )}
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {education.length > 0 ? (
            <div className="profile-description">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Education</h2>
              </div>
              {education.map((elem) => (
                <div className="profile-desc-row">
                  <img src={`${WEB_URL}${elem.collagelogo}`} alt="" />
                  <div>
                    <h3>{elem.institutename}</h3>
                    <b>{elem.course}</b>
                    <b>
                      {elem.joindate.split("-")[0]} -{" "}
                      {elem.enddate.split("-")[0]}
                    </b>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {skills.length > 0 ? (
            <div className="profile-description">
              <h3>Skills</h3>
              {skills.map((elem) => (
                <a className="skills-btn">{elem}</a>
              ))}
            </div>
          ) : null}

          {language.length > 0 ? (
            <div className="profile-description">
              <h3>Language</h3>
              {language.map((elem) => (
                <a className="language-btn">{elem}</a>
              ))}
            </div>
          ) : null}
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
