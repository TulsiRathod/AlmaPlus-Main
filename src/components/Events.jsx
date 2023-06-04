import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { WEB_URL } from '../baseURL';
import { toast } from 'react-toastify';
import EventModal from './EventModal';

export default function Events() {
    const [events,setEvents]=useState([]);
    const [modal,setModal]=useState(false);
    const closeModal=()=>setModal(false);
    const [event,setEvent]=useState({});

    const getEvents=()=>{
        axios({
          method:'get',
          url:`${WEB_URL}/api/getEvents`
        }).then((Response)=>{
          setEvents(Response.data.data);
        }).catch((error)=>{
          toast.error("Something Went Wrong");
        });
      }

      useEffect(()=>{
        getEvents();
      },[])
  return (
    <>
    <Navbar/>
      <div className="container-2">
        <div className="events-cover">
            <div className="content">
                <h1>Events</h1>
                <b>Find The Best Event</b>
            </div>
            <img src="/images/Events-amico.png" alt=""/>
        </div>
        <div className="container">
            <div className="events-links">
                <ul>
                    <li>
                        <a className="active-link">All</a>
                    </li>
                    <li>
                        <a>Upcomming</a>
                    </li>
                    <li>
                        <a>Past</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="container">
            {events.length>0?
            <div className="events-list">
                {events.map((elem)=>
                    <div className="card">
                        {elem.photos.length>0?<img src={`${WEB_URL}${elem.photos[0]}`} alt=""/>:<img src='images/event1.png'></img>}
                    <div className="intro">
                        <h2>{elem.title}</h2>
                        <ul>
                            <li><i className="fa-regular fa-calendar-days" style={{color: "#919090"}}></i><span>{elem.date.split("T")[0]}</span></li>
                            <li><i className="fa-regular fa-clock" style={{color: "#919090"}}></i><span>{elem.date.split("T")[1].split(".")[0]}</span></li>
                            <li><i className="fa-solid fa-location-dot" style={{color: "#919090"}}></i><span>{elem.venue}</span></li>
                        </ul>
                        <a onClick={()=>{setModal(true);setEvent(elem)}}>View More</a>
                    </div>
                </div> 
                )}    
            </div>  
            :null}
            

        </div>
    </div>
    {modal&&<EventModal closeModal={closeModal} event={event}/>}
    </>
  )
}
