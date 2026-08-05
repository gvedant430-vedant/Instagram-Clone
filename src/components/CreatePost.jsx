import { useState } from "react";
import "../css/createpost.css";

function CreatePost({ onCreatePost }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const newPost = {
      id: Date.now(),
      username: "vedant",
      profile: "https://i.pravatar.cc/150?img=10",
      image: image,
      caption: caption,
    };

    onCreatePost(newPost);

    setImage("");
    setCaption("");
  };

  return (
    <div className="create-post">

      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>

        {/* Image */}
        <label className="upload-box">
          {image ? (
            <img
              src={image}
              alt="preview"
              className="image-preview"
            />
          ) : (
            <>
              <span>📸</span>
              <p>Select Photo</p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button type="submit">
          Share Post
        </button>

      </form>

    </div>
  );
}

export default CreatePost;