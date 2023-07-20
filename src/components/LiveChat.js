import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { appendMessage } from '../utils/chatSlice';
import store from '../utils/store';

const LiveChat = () => {
    const timerID = useRef(null);
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chatSlice.messages);

    useEffect(()=>{
        timerID.current = setInterval(()=> {
        dispatch(appendMessage({
            name: "User",
            message: "I'm going to be awesome 🔥"
        }));
    }, 200);

        return () => clearInterval(timerID.current);
    }, []); 

    return (
    <div className='ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll'>
        {
            messages.map(({name, message}, index) => (
                <ChatMessage key={index} name={name} message={message} />
            ))
        }

    </div>
    )
}

export default LiveChat