import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import chats from "../data/chats";

import "../css/messages.css";

function Messages() {

  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const [message, setMessage] = useState("");
const handleSend = (e) => {
  e.preventDefault();

  if (message.trim() === "") return;

  const newMessage = {
    id: Date.now(),
    text: message,
    sender: "me",
  };

  selectedChat.messages.push(newMessage);

  setSelectedChat({
    ...selectedChat,
  });

  setMessage("");
};
  return (
    <>
      <Navbar />

      <div className="messages-layout">

        <Sidebar />

        <ChatList
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />

        <ChatWindow
          chat={selectedChat}
          message={message}
          setMessage={setMessage}
          handleSend={handleSend}
        />

      </div>
    </>
  );
}

export default Messages;