import { useParams, useNavigate } from "react-router-dom";
import stories from "../data/stories";
import "../css/storyviewer.css";

function StoryViewer() {
  const { id } = useParams();
  console.log("Clickked ID:",id);
  console.log("Stories:",stories);

  const navigate = useNavigate();

  const currentIndex = stories.findIndex(
    (item) => item.id === Number(id)
  );

  const story = stories[currentIndex];

  if (!story) {
    return <h2>Story Not Found</h2>;
  }

  const prevStory = stories[currentIndex - 1];
  const nextStory = stories[currentIndex + 1];

  return (
    <div className="story-viewer">

      {/* Close */}
      <button
        className="close-btn"
        onClick={() => navigate("/home")}
      >
        ✖
      </button>

      {/* Previous */}
      {prevStory && (
        <button
          className="prev-btn"
          onClick={() => navigate(`/story/${prevStory.id}`)}
        >
          ⬅
        </button>
      )}

      {/* Next */}
      {nextStory && (
        <button
          className="next-btn"
          onClick={() => navigate(`/story/${nextStory.id}`)}
        >
          ➡
        </button>
      )}

      <div className="story-card">

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <h2>{story.username}</h2>

        <img
          src={story.image}
          alt={story.username}
        />

        <p>{story.caption}</p>

      </div>

    </div>
  );
}

export default StoryViewer;