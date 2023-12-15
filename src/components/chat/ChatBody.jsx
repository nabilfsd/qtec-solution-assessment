import React from 'react'

const chatList = [
  {
    id: crypto.randomUUID(),
    userType: '2',
    message: `Oh, hello! All perfectly.
I will check it and get back to you soon`,
    time: 'Today, 04:45 PM',
  }, {
    id: crypto.randomUUID(),
    userType: '1',
    message: `Oh, hello! All perfectly.
I will check it and get back to you soon`,
    time: 'Today, 04:45 PM',
  }, {
    id: crypto.randomUUID(),
    userType: '2',
    message: `Oh, hello! All perfectly.
I will check it and get back to you soon`,
    time: 'Today, 04:45 PM',
  }, {
    id: crypto.randomUUID(),
    userType: '1',
    message: `Oh, hello! All perfectly.
I will check it and get back to you soon`,
    time: 'Today, 04:45 PM',
  }, {
    id: crypto.randomUUID(),
    userType: '2',
    message: `Oh, hello! All perfectly.
I will check it and get back to you soon`,
    time: 'Today, 04:45 PM',
  },
];

const ChatBody = () => {
  return (
    <div id='chat-body-container' className='h-screen p-4.5 overflow-auto'>
      <div className="flex flex-col gap-1">
        {chatList.map(chat => (
          <div key={chat.id} className={`flex ${chat.userType === '2' ? 'justify-start' : 'justify-end'}`}>
          <div key={chat.id} id="message" className={`w-max py-4 px-5 bg-container-bg ${chat.userType === '2' ? "rounded-xl rounded-bl-none" : "rounded-xl rounded-br-none"}`}>
            <pre className='font-inter text-xs text-primary-fg'>{chat.message}</pre>
            <span className='font-inter text-[11px] text-secondary-fg'>{chat.time}</span>
          </div>
          </div>
        ))}
      </div></div>
  )
}

export default ChatBody