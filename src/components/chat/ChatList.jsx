import user1Img from "../../assets/images/chat/chat-list-avatar-1.svg";
import user2Img from "../../assets/images/chat/chat-list-avatar-2.svg";
import user3Img from "../../assets/images/chat/chat-list-avatar-3.svg";
import user4Img from "../../assets/images/chat/chat-list-avatar-4.svg";
import user5Img from "../../assets/images/chat/chat-list-avatar-5.svg";
import user6Img from "../../assets/images/chat/chat-list-avatar-6.svg";
import user7Img from "../../assets/images/chat/chat-list-avatar-7.svg";
import user8Img from "../../assets/images/chat/chat-list-avatar-8.svg";
import user9Img from "../../assets/images/chat/chat-list-avatar-9.svg";
import user10Img from "../../assets/images/chat/chat-list-avatar-10.svg";

const tabList = [
  { id: 1, title: "All Chat" },
  { id: 2, title: "Group Chat" },
  { id: 3, title: "Contacts" },
];

const contactList = [
  {
    id: crypto.randomUUID(),
    imgUrl: user1Img,
    userName: "Ethan Rodriguez",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 2,
    active: true,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user2Img,
    userName: "Olivia Williams",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: false,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user3Img,
    userName: "Liam Martinez",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: true,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user4Img,
    userName: "Ava Davis",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: false,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user5Img,
    userName: "Noah Johnson",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: true,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user6Img,
    userName: "Sophia Anderson",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: true,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user7Img,
    userName: "Mason Brown",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: false,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user8Img,
    userName: "Harper Taylor",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: false,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user9Img,
    userName: "Benjamin Hernandez",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: false,
  }, {
    id: crypto.randomUUID(),
    imgUrl: user10Img,
    userName: "Emma Smith",
    message: "Messenger in which functionally you ca ...",
    time: '4:37 pm',
    msgCount: 0,
    active: true,
  },
];

const ChatList = () => {
  return (
    <div className="min-w-[398px] w-[398px] border-r border-border-bg">
      <h2 className="font-sora font-semibold text-[22px] pl-5.5 pt-5.5 pb-5.5">Chat</h2>

      {/* tab list */}
      <nav className="w-full">
        <ul className="flex text-center border-b border-border-bg">
          {tabList.map((tab, index) => (<li key={tab.id} className={`flex-1 py-3 text-center font-inter font-semibold text-sm cursor-pointer ${index === 0 ? 'text-active-bg border-b-4' : 'text-inactive-fg'}`}>{tab.title}</li>))}
        </ul>
      </nav>

      {/* chat contact list */}
      <div id="contact-list-wrapper" className="h-screen overflow-y-auto">
        {
          contactList.map((contact, index) => (
            <div key={contact.id} className="flex gap-3 w-full px-[14px] pt-[14px] pb-4 border-b border-border-bg">

              {/* images */}
              <div id="image-wrapper" className="min-h-[50px] h-[50px] min-w-[50px] w-[50px] relative isolate">
                <img className="h-full w-full rounded-full" src={contact.imgUrl} alt={contact.userName} />

                <div className={`h-2.5 w-2.5 absolute z-20 bottom-0 right-0 -translate-y-[4px] -translate-x-[2px] rounded-full ${contact.active ? 'bg-active-bg-contact' : 'bg-inactive-bg-contact'}`} />
              </div>

              {/* messages and info wrapper */}
              <div id="message-info-wrapper" className="flex flex-col flex-auto gap-2">
                {/* user name and time */}
                <div className="flex justify-between items-center relative">
                  <span className={`font-inter text-sm leading-4 ${index === 0 ? 'text-primary-fg font-semibold' : 'text-secondary-fg font-medium '}`}>{contact.userName}</span>
                  <span className="font-inter text-xs text-secondary-fg absolute right-0">{contact.time}</span>
                </div>

                {/* message and count  */}
                <div className="flex justify-between items-center">

                  <span className={`font-inter text-sm ${index === 0 ? 'font-medium text-primary-fg' : 'text-secondary-fg'}`}>{contact.message}</span>

                  {contact.msgCount > 0
                    &&
                    <div>
                      <div className="h-4.5 w-4.5 bg-active-bg font-inter font-bold text-[10px] text-card-bg text-center flex justify-center items-center rounded-full">
                        {contact.msgCount}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>)
          )
        }
      </div>
    </div>
  )
}

export default ChatList