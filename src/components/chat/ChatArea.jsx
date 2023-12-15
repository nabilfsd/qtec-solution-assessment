import ChatAction from "./ChatAction"
import ChatBody from "./ChatBody"
import ChatHeader from "./ChatHeader"

const ChatArea = () => {
  return (
    <section id="chat-container" className="h-screen w-full flex flex-col overflow-y-auto">
      <ChatHeader/>
      <ChatBody/>
      <ChatAction/>
    </section>
  )
}

export default ChatArea