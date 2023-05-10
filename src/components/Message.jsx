import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ChatUser from './ChatUser'
import ChatMessage from './ChatMessage'
import axios from 'axios';
import { WEB_URL } from '../baseURL';

export default function Message() {
    const userid = localStorage.getItem("AlmaPlus_Id");
    const [conversationID, setConversationID] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const [user, setUser] = useState({});
    const [newMsg, setNewMsg] = useState("");
    const scrollRef = useRef();

    useEffect(() => {
        // console.log("logged in user : " + userid);
        getConversation();
        getUser();
    }, [userid]);

    const getConversation = () => {
        axios({
            url: `${WEB_URL}/api/getConversations/${userid}`,
            method: "get",
        }).then((response) => {
            // console.log(response);
            setConversationID(response.data.data);
            // console.log("conversationID :" + conversationID);
        }).catch((error) => {
            console.log(error);
        })
    }

    const getMessages = () => {
        if (currentId !== "") {
            axios({
                url: `${WEB_URL}/api/getMessages/${currentId}`,
                method: "get",
            }).then((response) => {
                // console.log(response);
                setMessages(response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    useEffect(() => {
        getMessages();
    }, [currentId]);

    const getUser = () => {
        if (userid !== '') {
            axios({
                method: 'get',
                url: `${WEB_URL}/api/searchUserById/${userid}`
            }).then((Response) => {
                setUser(Response.data.data[0]);
                // console.log(Response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    const sendMessage = (e) => {
        e.preventDefault();
        if (newMsg !== '') {
            axios({
                method: 'post',
                url: `${WEB_URL}/api/newMessage`,
                data: {
                    conversationId: currentId,
                    sender: userid,
                    text: newMsg
                }
            }).then((response) => {
                getMessages();
                setNewMsg("");
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
    // }, [messages])

    return (
        <>
            <div className="container-fluid">
                <div className="chat-user-list-box">
                    <div className="chat-profile-box">
                        <Link to="/home">
                            <div className="chat-profile-back"><i className="fa-solid fa-arrow-left"></i></div>
                        </Link>
                        <img src={`${WEB_URL}${user.profilepic}`} alt="" />
                        <div className="chat-profile-name">{`${user.fname} ${user.lname}`}</div>
                        <div className="chat-profile-option"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                    </div>
                    <div className="chat-search-box">
                        <i className="fa-sharp fa-solid fa-magnifying-glass" style={{ color: "#787878" }}></i>
                        <input type="text" placeholder="search" />
                    </div>
                    {conversationID.length > 0 ? <div className="chat-user-list">
                        {
                            conversationID.map((elem) =>
                                <ChatUser userid={elem} setCurrentId={setCurrentId} setName={setName} setProfilepic={setProfilepic} />
                            )
                        }
                    </div> : ''}

                </div>
                {
                    currentId !== '' ?
                        <div className="chat-box">
                            <div className="chat-user-profile">
                                <img src={`${WEB_URL}${profilepic}`} alt="" />
                                <div className="chat-name">{name}</div>
                                <div className="chat-user-option"><i className="fa-solid fa-ellipsis-vertical"></i></div>
                            </div>
                            <div className="user-chat">
                                {
                                    messages.length > 0 ? <div className="msg-box">
                                        {
                                            messages.map((elem) =>
                                                <ChatMessage msg={elem} own={userid === elem.sender ? 'send' : 'received'} />
                                            )
                                        }
                                    </div>
                                        :
                                        ''
                                }

                                <div className="send-msg">
                                    <div className="send-msg-box">
                                        <input type="text" placeholder="Write a message" onChange={(e) => { setNewMsg(e.target.value) }} value={newMsg} />
                                    </div>
                                    <div className="send-img"><i className="fa-regular fa-image"></i></div>
                                    <div className="send-btn" onClick={sendMessage}>Send</div>
                                </div>
                            </div>
                        </div> :
                        <div className="no-chat">
                            <img src="images/Messaging-bro.png" alt="" />
                            <span>Open a conversation to start a chat</span>
                        </div>
                }
                {/* <div className='no-chatbox'>Open a conversation to start a chat</div> */}
            </div>
        </>
    )
}
