import "../css/story.css";

function Story({ username }) {
  return (
    <div className="story">
      <div className="story-avatar">
        {username.charAt(0).toUpperCase()}
      </div>

      <p>{username}</p>
    </div>
  );
}

export default Story;