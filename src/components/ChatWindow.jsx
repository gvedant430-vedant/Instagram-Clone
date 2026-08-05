import MessageBubble from "./MessageBubble";
import "../css/chatwindow.css";

function ChatWindow({ chat }) {

  if (!chat) {
    return (
      <div className="chat-window">
        <h2>Select a chat</h2>
      </div>
    );
  }

  return (
    <div className="chat-window">

      <div className="chat-header">
        <img src={chat.image} alt={chat.username} />
        <h3>{chat.username}</h3>
      </div>

      <div className="chat-messages">
        {chat.messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
      </div>

    </div>
  );
}

export default ChatWindow;