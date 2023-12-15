import ChatAvatar from "../../assets/images/chat/chat-avatar.svg";
import AudioCallImg from '../../assets/images/chat/audio-call.svg';
import VideoCallImg from '../../assets/images/chat/video-call.svg';
import TranslateImg from '../../assets/images/chat/translate.svg';

const chatHeaderActions = [
  {id: 1, imgUrl: AudioCallImg, alt: 'audio-call'},
  {id: 2, imgUrl: VideoCallImg, alt: 'video-call'},
  {id: 3, imgUrl: TranslateImg, alt: 'translate'},
];

const ChatHeader = () => {
  return (
    <div id="chat-header-container"
      className="h-[76px] flex justify-between items-center gap-6 bg-card-bg border-b p-4.5 border-border-bg rounded-tr-xl"
    >
      {/* chat profile info */}
      <div id="chat-profile-info-container" className="flex items-center gap-[9px]">
        <div id="chat-profile-img-container" className="w-[34px] h-[34px] rounded-full relative isolate">
          <img className="w-full h-full object-cover" src={ChatAvatar} alt="chat-avatar" />

          <div className="h-[7px] w-[7px] absolute z-20 bottom-0 right-0 -translate-y-[3px] translate-x-0 rounded-full bg-active-bg-contact" />
        </div>

        <div className="flex flex-col gap-[7px]">
          <h6 className="font-inter font-semibold text-base text-primary leading-none">Liam Martinez</h6>

          <span className="font-inter text-xs font-normal text-secondary-fg leading-none">Last seen: 15 minutes ago</span>
        </div>
      </div>

      {/* chat profile action */}
      <div id="chat-profile-action-container" className="flex gap-4">
        {chatHeaderActions.map(item => (
          <button className="h-4.5 w-4.5" key={item.id} >
          <img className="h-full w-full object-cover" src={item.imgUrl} alt={item.alt} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChatHeader