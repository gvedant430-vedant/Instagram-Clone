import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import chatsData from "../data/chats";

import "../css/messages.css";

function Messages() {

  // Saari chats React state me
  const [chats, setChats] = useState(chatsData);

  // Currently selected user
  const [selectedChatId, setSelectedChatId] = useState(
    chatsData[0]?.id
  );

  // Input message
  const [message, setMessage] = useState("");

  // Selected chat find karo
  const selectedChat = chats.find(
    (chat) => chat.id === selectedChatId
  );

  // Send Message
  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "me",
    };

    setChats((previousChats) =>
      previousChats.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                newMessage,
              ],
            }
          : chat
      )
    );

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
          setSelectedChat={(chat) =>
            setSelectedChatId(chat.id)
          }
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