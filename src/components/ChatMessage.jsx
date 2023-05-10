import React, { useEffect } from 'react'

function ChatMessage({ msg, own }) {

    return (
        <>
            <div className={`msg-${own}`}>
                <div className="msg">{msg.text}</div>
                <div className="msg-time">12:34 PM</div>
            </div>
        </>
    )
}

export default ChatMessage
