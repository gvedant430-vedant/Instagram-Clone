import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import chats from "../data/chats";

import "../css/messages.css";

function Messages() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);

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
        />

      </div>
    </>
  );
}

export default Messages;    