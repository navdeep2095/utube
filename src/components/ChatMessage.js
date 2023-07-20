import React from 'react'
import logo from '../images/user-3296.svg'

const ChatMessage = ({name, message}) => {
  return (
    <div className='my-2 flex items-center shadow-sm'>
        <img className='h-8' src={logo} alt='user icon'/>
        <span className='px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage