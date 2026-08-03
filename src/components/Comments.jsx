import { useState } from "react";
import "../css/comments.css";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="comments">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Post</button>
      </form>

      {comments.length === 0 ? (
        <p className="no-comments">No comments yet.</p>
      ) : (
        comments.map((item, index) => (
          <div className="comment-item" key={index}>
            <span>{item}</span>

            <button onClick={() => deleteComment(index)}>
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default Comments;