import MicrophoneImg from "../../assets/images/chat/microphone.svg";
import ClipboardImg from "../../assets/images/chat/clipboard.svg";
import EmojiImg from "../../assets/images/chat/emoji.svg";

const chatActionBtnList = [
  { id: 1, imgUrl: MicrophoneImg, alt: 'microphone' },
  { id: 2, imgUrl: ClipboardImg, alt: 'clipboard' },
  { id: 3, imgUrl: EmojiImg, alt: 'emoji' },
];

const ChatAction = () => {
  return (
    <div id='chat-action-container' className=' h-[125px] max-h-[125px] flex justify-between gap-5 p-4.5 pt-3 bg-card-bg border-t border-border-bg'>
    {/*  */}
      <div id="chat-action-content" className='flex flex-col flex-auto gap-5'>
        <input className='outline-none text-primary-fg placeholder:font-inter placeholder:text-sm placeholder:text-secondary-fg caret-secondary-fg' placeholder='Type something ...' />

        <div className="flex gap-3 ">
          {chatActionBtnList.map(item => (
            <button key={item.id} className="h-4.5 w-4.5">
              <img className="h-full w-full object-cover" src={item.imgUrl} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>

      <div id="action-btn-wrapper" className="pt-5.5">
        <button className="h-auto w-auto bg-active-bg font-inter font-semibold text-card-bg text-sm py-2.5 px-5 rounded-lg">Send</button>
      </div>
    </div>
  )
}

export default ChatAction