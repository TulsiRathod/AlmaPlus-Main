import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import {toast } from "react-toastify";

export default function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [user,setUser]=useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const getUser=()=>{
    const userID=localStorage.getItem("AlmaPlus_Id");
    axios({
      method:'get',
      url:`${WEB_URL}/api/searchUserById/${userID}`
    }).then((Response)=>{
      setUser(Response.data.data[0]);
    }).catch((error)=>{
      toast.error("Something Went Wrong");
    });
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{color:"#7e7f81"}}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          alignItems: "center",
          fontSize: "30px",
          color:"black"
        }}
      >
        <i class="fa-solid fa-xmark"></i>
        <h4>Menubar</h4>
      </div>
      <Divider />
      <List>
        <ListItem
          key={"home"}
          disablePadding
          onClick={() => {
            nav("/home");
          }}
        >
          <ListItemButton>
            <i class="fa-solid fa-house" style={{ padding: "10px 15px" }}></i>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"events"}
          disablePadding
          onClick={() => {
            nav("/events");
          }}
        >
          <ListItemButton>
            <i
              class="fa-solid fa-calendar"
              style={{ padding: "10px 15px" }}
            ></i>
            <ListItemText primary={"Events"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"message"}
          disablePadding
          onClick={() => {
            nav("/message");
          }}
        >
          <ListItemButton>
            <i class="fa-solid fa-message" style={{ padding: "10px 15px" }}></i>
            <ListItemText primary={"Message"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"notification"}
          disablePadding
          onClick={() => {
            nav("/notification");
          }}
        >
          <ListItemButton>
            <i class="fa-solid fa-bell" style={{ padding: "10px 15px" }}></i>
            <ListItemText primary={"Notification"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          key={"feedback"}
          disablePadding
          onClick={() => {
            nav("/feedback");
          }}
        >
          <ListItemButton>
            <i
              className="fa-solid fa-star"
              style={{ padding: "10px 15px" }}
            ></i>
            <ListItemText primary={"Feedback"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"logout"} disablePadding>
          <ListItemButton>
            <i
              className="fa-solid fa-right-from-bracket"
              style={{ padding: "10px 15px" }}
            ></i>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const nav = useNavigate();
  const [menus, setMenus] = useState(true);
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/register") {
      setMenus(false);
    }
    getUser();
  }, []);

  return (
    <>
      <nav class="navbar">
        <div class="navbar-left">
          <Link to="/" class="logo">
            <img src="/images/Logo.jpg" />
          </Link>
          {menus ? (
            <div class="search-box">
              <i
                class="fa-sharp fa-solid fa-magnifying-glass"
                style={{ color: "#787878" }}
              ></i>
              <input type="text" placeholder="search" />
            </div>
          ) : (
            ""
          )}
        </div>
        {menus ? (
          <div class="navbar-center">
            <ul>
              <Link to="/home">
                <li>
                  <i class="fa-solid fa-house"></i>
                  <span>Home</span>
                </li>
              </Link>
              <Link to="/events">
                <li>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Events</span>
                </li>
              </Link>

              <Link to="/message">
                <li>
                  <i class="fa-solid fa-message"></i>
                  <span>Message</span>
                </li>
              </Link>
              <Link to="/notification">
                <li>
                  <i class="fa-solid fa-bell"></i>
                  <span>Notification</span>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        {menus?
        <div class="navbar-right">
        <div className="nav-profile">
          <img
            src={`${WEB_URL}${user.profilepic}`}
            class="nav-profile-img"
            onClick={() => {
              nav("/view-profile");
            }}
          />
          <div class="user-profile">
            <span>{user.fname} {user.lname}</span>
          </div>
        </div>
        
         <div className="nav-search-bar">
         <i class="fa-solid fa-magnifying-glass" onClick={()=>{nav('/search-profile')}}></i>
         <React.Fragment>
           <Button onClick={toggleDrawer("right", true)}>
             <i class="fa-solid fa-bars"></i>
           </Button>
           <SwipeableDrawer
             anchor="right"
             open={state["right"]}
             onClose={toggleDrawer("right", false)}
             onOpen={toggleDrawer("right", true)}
           >
             {list("right")}
           </SwipeableDrawer>
         </React.Fragment>
       </div>
        <div>
        </div>
      </div>:""  
      }

      </nav>
    </>
  );
}
