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
            selectedChat?.id === chat.id
              ? "active"
              : ""
          }`}
          onClick={() => setSelectedChat(chat)}
        >

          <img
            src={chat.image}
            alt={chat.username}
          />

          <div>
            <strong>{chat.username}</strong>

            <p>
              {chat.messages.length > 0
                ? chat.messages[
                    chat.messages.length - 1
                  ].text
                : "No messages yet"}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default ChatList;