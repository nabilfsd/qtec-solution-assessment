import { useState, useRef, useEffect } from "react";
import moreIcon from "../../assets/images/chat/chat-more.svg";
import playBtnIcon from "../../assets/images/chat/play-btn.svg";
import audioStreamIcon from "../../assets/images/chat/audio-stream.svg";

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


// const chat
const ChatBody = () => {
  const [moreMenuId, setMoreMenuId] = useState('');
  const moreMenuRef = useRef("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current.toString() !== event.target.toString()) {
        setMoreMenuId("");
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [moreMenuRef]);

  return (
    <div id='chat-body-container' className='h-screen p-4.5 overflow-auto'>
      <div className="flex flex-col gap-1">
        {chatList.map((chat, index) => (
          <div key={chat.id} className={`flex items-center relative ${chat.userType === '2' ? 'justify-start' : 'justify-end'}`}>
            <div key={chat.id} id="message" className={`relative flex flex-col gap-2.5 w-max py-4 px-5 bg-container-bg ${chat.userType === '2' ? "order-1 rounded-xl rounded-bl-none" : "order-2 rounded-xl rounded-br-none"}`}>
              {index === 4 ? <div className="flex gap-2">
                <img src={playBtnIcon} alt="play" />
                <img src={audioStreamIcon} alt="audio-stream" />
                <span className="font-inter text-[13px] text-active-bg">01:24</span>
              </div> : (
                <pre className='font-inter text-xs text-primary-fg'>
                  {chat.message}
                </pre>
              )}

              <span className='font-inter text-[11px] text-secondary-fg'>{chat.time}</span>
            </div>

            <button className={`relative h-5 w-5 ${chat.id === '2' ? "order-2" : "order-1"}`} onClick={() => {
              setMoreMenuId(chat.id ?? "");
            }}>
              <img ref={moreMenuRef} className="h-full w-full" src={moreIcon} alt="more" />

              {(moreMenuId === chat?.id) &&
                <div className={`absolute top-0 w-max p-4.5 bg-card-bg border border-border-bg rounded-[10px] isolate z-20 ${chat.userType === "2" ? "left-full" : "right-full"}`}>
                  <ul className="flex flex-col gap-3 font-inter text-sm text-start text-primary-fg">
                    <li className="leading-none">Create Task</li>
                    <li className="leading-none">Create Todo</li>
                    <li className="leading-none">Create Ticket</li>
                  </ul>
                </div>}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatBody