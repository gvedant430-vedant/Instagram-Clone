import "../css/chatlist.css";

function ChatList({
  chats,
  selectedChat,
  setSelectedChat,
}) {
  return (
    <div className="chat-list">

      <h2>Messages</h2>

      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-item ${
            selectedChat?.id === chat.id ? "active" : ""
          }`}
          onClick={() => setSelectedChat(chat)}
        >
          <img
            src={chat.image}
            alt={chat.username}
          />

          <span>{chat.username}</span>
        </div>
      ))}

    </div>
  );
}

export default ChatList;