import React from 'react'
import "./Chatbot.css"
const Chatbot = () => {
  return (
    <div>
        <div className="whatsapp-logo ">
        <a href=' https://wa.me/916282396562 ' className='pb-2'>
        <img src="/images/chatbot/whatsapp.png" className='md:w-20 w-10' />
        </a>
        <a href='tel:+916282396562'>
           <img className='mt-2 md:w-20 w-10' src='/images/chatbot/call.png' />
        </a>

    </div>
    </div>
  )
}

export default Chatbot
