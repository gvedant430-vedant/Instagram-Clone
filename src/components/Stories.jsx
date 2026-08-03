import Story from "./Story";
import stories from "../data/stories";
import "../css/stories.css";

function Stories() {
  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          key={story.id}
          id={story.id}
          username={story.username}
        />
      ))}
    </div>
  );
}

export default Stories;