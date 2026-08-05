import "../css/chatwindow.css";

function ChatWindow({
  chat,
  message,
  setMessage,
  handleSend,
}) {

  if (!chat) {
    return (
      <div className="chat-window">
        <h2>Select a chat</h2>
      </div>
    );
  }

  return (
    <div className="chat-window">

      {/* Header */}
      <div className="chat-header">

        <img
          src={chat.image}
          alt={chat.username}
        />

        <h3>{chat.username}</h3>

      </div>

      {/* Messages */}
      <div className="chat-messages">

        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input */}
      <form
        className="message-input"
        onSubmit={handleSend}
      >

        <input
          type="text"
          placeholder={`Message ${chat.username}...`}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button type="submit">
          Send
        </button>

      </form>

    </div>
  );
}

export default ChatWindow;