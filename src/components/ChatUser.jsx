import React, { useEffect, useState } from 'react'
import { WEB_URL } from '../baseURL';
import axios from 'axios';

function ChatUser({ userid, setCurrentId, setName, setProfilepic, setReceiverId }) {
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState('');
    const myid = localStorage.getItem("AlmaPlus_Id");
    const getUser = async() => {
        if (userId !== '') {
            await axios({
                method: 'get',
                url: `${WEB_URL}/api/searchUserById/${userId}`
            }).then((Response) => {
                setUser(Response.data.data[0]);
                // console.log(Response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        setUserId(userid.members.find((m) => m !== myid));
        getUser();
        // console.log(userid);
    }, [userid]);

    return (
        <>
            <div className="chat-user" onClick={() => { setCurrentId(userid._id); setName(user.fname + ' ' + user.lname); setProfilepic(user.profilepic); setReceiverId(user._id) }}>
                <img src={`${WEB_URL}${user.profilepic}`} alt="" />
                <div className="chat-user-info">
                    <div>
                        <span className="chat-user-name">{user.fname} {user.lname}</span><span className="chat-time">03:23 PM</span>
                    </div>
                    <div>
                        <span className="chat-user-msg">Good Morning</span><span className="chat-mark"><i className="fa-solid fa-check"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatUser
