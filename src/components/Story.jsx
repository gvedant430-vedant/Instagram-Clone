import { Link } from "react-router-dom";
import "../css/story.css";

function Story({ id,username }) {
  return (
    <Link to={`/story/${id}`}classname="story-link">
    <div className="story">
      <div className="story-avatar">
        {username.charAt(0).toUpperCase()}
      </div>

      <p>{username}</p>
    </div>
    </Link>
  );
}

export default Story;