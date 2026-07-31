import Story from "./Story";
import "../css/stories.css";

const stories = [
  {
    id: 1,
    username: "vedant",
  },
  {
    id: 2,
    username: "rahul",
  },
  {
    id: 3,
    username: "swapnil",
  },
  {
    id: 4,
    username: "aman",
  },
  {
    id: 5,
    username: "mohit",
  },
];

function Stories() {
  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          key={story.id}
        
          username={story.username}
        />
      ))}
    </div>
  );
}

export default Stories;