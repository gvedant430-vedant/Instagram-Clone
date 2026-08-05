import "../css/messagebubble.css";

function MessageBubble({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
}

export default MessageBubble;