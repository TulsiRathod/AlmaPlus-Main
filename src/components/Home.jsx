import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

export default function Home() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const nav = useNavigate();
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);
  const [description, setDescription] = useState("");
  const [events, setEvents] = useState([]);
  const socket = useRef();
  const [fileList, setFileList] = useState(null);
  const files = fileList ? [...fileList] : [];
  const userid = localStorage.getItem("AlmaPlus_Id");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getNotification", (data) => {
      setNotification({
        sender: data.senderid,
        type: data.type,
        createdAt: Date.now(),
      });
    });
    getUser();
    getPost();
    getEvents();
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", userid);
    // socket.current.on("getUsers", users => {
    //   // console.log(users);
    // })
  }, [userid]);

  const uploadImg = () => {
    document.getElementById("myFileInput").click();
  };

  const imgChange = (e) => {
    setFileList(e.target.files);
  };

  const getUser = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/searchUserById/${userid}`,
    })
      .then((Response) => {
        setUser(Response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPost = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/getPost`,
    })
      .then((Response) => {
        setPost(Response.data.data.reverse());
        // console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addPost = () => {
    var body = new FormData();
    body.append("userid", localStorage.getItem("AlmaPlus_Id"));
    body.append("description", description);
    body.append("date", new Date());
    files.forEach((file, i) => {
      body.append(`photos`, file, file.name);
    });
    body.append("fname", user.fname);
    body.append("lname", user.lname);
    body.append("designation", user.designation);
    body.append("uscompanyname", user.companyname);
    body.append("profilepic", user.profilepic);
    axios({
      url: `${WEB_URL}/api/addPost`,
      method: "post",
      headers: {
        "Content-type": "multipart/form-data",
      },
      data: body,
    })
      .then((Response) => {
        toast.success("Post Uploaded!!");
        setFileList(null);
        setDescription("");
        getPost();
      })
      .catch((error) => {
        toast.error("Something went wrong!!");
      });
  };

  const getEvents = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/getEvents`,
    })
      .then((Response) => {
        setEvents(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Logout = () => {
    localStorage.clear();
    nav("/");
  };

  const handleLike = async (elem) => {
    socket.current.emit("sendNotification", {
      senderid: userid,
      receiverid: elem.userid,
      type: 1,
    });
    await axios({
      method: "put",
      url: `${WEB_URL}/api/like/${elem._id}`,
      data: {
        userId: userid,
      },
    })
      .then((response) => {
        // elem.likes.includes(userid) ?  elem.likes.pop(userid):elem.likes.push(userid);  
        getPost();
        console.log(elem.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="profile-card-main">
          <div className="profile-card">
            <div className="profile-card-imgbox">
              {user.profilepic ? (
                <img
                  src={`${WEB_URL}${user.profilepic}`}
                  alt=""
                  className="profile-card-img"
                />
              ) : (
                <img
                  src="images/profile1.png"
                  className="profile-card-img"
                ></img>
              )}
            </div>

            <div className="profile-card-info">
              <span className="profile-card-name">
                {user.fname} {user.lname}
              </span>
              {/* <span>{user.designation} {user.companyname?`at ${user.companyname}`:''}</span> */}
            </div>
            <div
              className="profile-card-button"
              onClick={() => {
                nav("/view-profile");
                window.scrollTo(0, 0);
              }}
            >
              <button>View Profile</button>
            </div>
          </div>

          <div className="menu-container">
            <div
              className="menu"
              onClick={() => {
                nav("/events");
              }}
            >
              <i className="fa-solid fa-calendar"></i>Events
            </div>
            <div
              className="menu"
              onClick={() => {
                nav("/feedback");
              }}
            >
              <i className="fa-solid fa-star"></i>FeedBack & Rating
            </div>
            <hr className="hr-line" />
            <div className="menu" onClick={Logout}>
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </div>
          </div>
        </div>

        <div className="home-post-main">
          <div className="new-post-box">
            {user.profilepic ? (
              <img src={`${WEB_URL}${user.profilepic}`} alt="" />
            ) : (
              <img src="images/profile1.png"></img>
            )}
            <div className="new-post-content">
              <div className="new-post-text">
                <input
                  type="text"
                  placeholder="Write Here"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <input
                  type="file"
                  onChange={imgChange}
                  id="myFileInput"
                  hidden
                  multiple={true}
                />
                <i className="fa-regular fa-image" onClick={uploadImg}></i>
              </div>
              {files.length > 0 ? (
                <div className="selected-img">
                  {files.map((elem) => (
                    <div>
                      <img src={window.URL.createObjectURL(elem)} alt="" />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="new-post-btn" onClick={addPost}>
              Post
            </button>
          </div>

          <div className="post-box">
            {post.length > 0 ? (
              <>
                {post.map((elem) => (
                  <div className="post">
                    <div className="post-header">
                      <div className="post-profile">
                        <div>
                          <img
                            src={
                              elem.profilepic === "" ||
                              user.profilepic === "undefined" ||
                              user.profilepic === null
                                ? "images/profile1.png"
                                : `${WEB_URL}${elem.profilepic}`
                            }
                            alt=""
                            className="post-profile-img"
                          />
                        </div>
                        <div className="post-info">
                          <span className="post-name">
                            {elem.fname} {elem.lname}
                          </span>
                          <span className="post-description">
                            {elem.date.split("T")[0]}{" "}
                            {elem.date.split("T")[1].split(".")[0]}
                          </span>
                        </div>
                      </div>
                      <div className="post-option">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                    <div className="post-message">{elem.description}</div>
                    {elem.photos.length > 0 ? (
                      <div className="post-images">
                        <Slider {...settings}>
                          {elem.photos.map((el) => (
                            <img
                              src={`${WEB_URL}${el}`}
                              alt=""
                              className="post-image"
                              onDoubleClick={() => {
                                handleLike(elem._id);
                              }}
                            />
                          ))}
                        </Slider>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="likebar">
                      <i
                        className={`${
                          elem.likes.includes(userid.toString())
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                        }`}
                        style={{
                          color: `${
                            elem.likes.includes(userid.toString())
                              ? "#FF0000"
                              : "#000000"
                          }`,
                        }}
                        onClick={() => {
                          handleLike(elem);
                        }}
                      ></i>
                      <span>{elem.likes.length}</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="home-events-main">
          <div className="event-box">
            <span>Upcoming Events</span>
            <div className="div-line"></div>
            <img src="images/Events-bro.png" alt="" />
            <div className="upcoming-events">
              {events.map((elem) => (
                <div className="upcoming-event">
                  <div className="event-img">
                    {elem.photos.length > 0 ? (
                      <img
                        src={`${WEB_URL}${elem.photos[0]}`}
                        alt=""
                        className="post-image"
                      />
                    ) : (
                      <img src="images/event1.png" className="post-image"></img>
                    )}
                  </div>
                  <div className="event-info">
                    <div className="event-name">{elem.title}</div>
                    <div className="event-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      {elem.date.split("T")[0]}
                    </div>
                    <div className="event-time">
                      <i className="fa-regular fa-clock"></i>
                      {elem.date.split("T")[1].split(".")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
