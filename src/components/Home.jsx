import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const nav=useNavigate();
  const [user,setUser]=useState({});
  const [post,setPost]=useState([]);
  const [newPost,setNewPost]=useState({
    description:"",
    photos:null
  });

  const uploadImg=()=>{
    document.getElementById('myFileInput').click();
  }

  const imgChange = (e) => {
    // var tempArr = new Array();
    // for(var i=0;i<e.target.files.length;i++){
    //     tempArr.push(e.target.files[i]);
    // }
    setNewPost({...newPost,photos:e.target.files});
  }
  

  const getUser=()=>{
    axios({
      method:'get',
      url:`${WEB_URL}/api/searchUserById/6453988d61453953bfc177e5`
    }).then((Response)=>{
      setUser(Response.data.data[0]);
    }).catch((error)=>{
      toast.error("Something Went Wrong");
    });
  }

  const getPost = () =>{
    axios({
      method:'get',
      url:`${WEB_URL}/api/getPost`
    }).then((Response)=>{
      setPost(Response.data.data);
    }).catch((error)=>{
      toast.error("Something Went Wrong");
    });
  }

  const addPost = () =>{
    var body=new FormData();
    body.append("userid",localStorage.getItem("AlmaPlus_Id"));
    body.append("description",newPost.description);
    body.append("date",new Date());
    body.append("photos",newPost.photos);
    body.append("fname",user.fname);
    body.append("lname",user.lname);
    body.append("designation",user.designation);
    body.append("uscompanyname",user.companyname);
    body.append("profilepic",user.profilepic);
    axios({
      url:`${WEB_URL}/api/addPost`,
      method:'post',
      headers: {
        "Content-type": "multipart/form-data"
      },
      data:body
    }).then((Response)=>{
      toast.success("Post Uploaded!!");
      setNewPost({
        description:"",
        photos:[]
      })
    }).catch((error)=>{
      toast.error("Something went wrong!!");
    })
  }

  const handleChange=(e)=>{
    setNewPost({...newPost,[e.target.name]:e.target.value});
  }

  useEffect(()=>{
   getUser();
   getPost();
   },[])

  return (
    <>
    <ToastContainer/>
      <Navbar />
      <div className="home-container">
        <div className="profile-card-main">
          <div className="profile-card">
            <div className="profile-card-imgbox">
              <img
                src={`${WEB_URL}${user.profilepic}`}
                alt=""
                className="profile-card-img"
              />
            </div>

            <div className="profile-card-info">
              <span className="profile-card-name">{user.fname} {user.lname}</span>
              <span>{user.designation} {user.companyname?`at ${user.companyname}`:''}</span>
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
                <input type="text" placeholder="Write Here" name="description" value={newPost.description} onChange={handleChange}/>
                <input type="file" onChange={imgChange} id="myFileInput" hidden multiple={true}/>
                <i className="fa-regular fa-image" onClick={uploadImg}></i>
              </div>
              {/* {newPost.photos.length>0?
              <div className="selected-img">
               
                {newPost.photos.map((elem)=>
                  <div>
                    <img src="" alt="" />
                  </div>
                )}
              
                <div className="more-image">+</div>
              </div>
               
               :""} */}
            </div>
            <button type="submit" className="new-post-btn" onClick={addPost}>
              Post
            </button>
          </div>

          <div className="post-box">
            {post.length>0?
            <>
              {post.map((elem)=>
                <div className="post">
                <div className="post-header">
                  <div className="post-profile">
                    <div>
                      <img
                        src={`${WEB_URL}${elem.profilepic}`}
                        alt=""
                        className="post-profile-img"
                      />
                    </div>
                    <div className="post-info">
                      <span className="post-name">{elem.fname} {elem.lname}</span>
                      <span className="post-description">
                        {elem.designation} {elem.companyname?`at ${elem.companyname}`:''}
                      </span>
                    </div>
                  </div>
                  <div className="post-option">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <div className="post-message">
                  {elem.description}
                </div>
                {elem.photos.length>0?
                <div className="post-images">
                <Slider {...settings}>
                  {elem.photos.map((el)=>
                  <img src={`${WEB_URL}${el}`} alt="" className="post-image"/>
                  )}
                </Slider>
              </div>:""
                }     
                <div className="likebar">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
              </div>
              )}
            </>:''}
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
