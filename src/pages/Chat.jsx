import ChatList from "../components/chat/ChatList";
import ChatArea from "../components/chat/ChatArea";
const Chat = () => {
  return (
    <div id="chat-wrapper" className="flex m-5 mb-0 bg-card-bg border border-border-bg rounded-xl rounded-b-none">
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default Chat;