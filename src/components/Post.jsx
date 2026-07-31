import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";

import "../css/post.css";

const posts = [
  {
    id: 1,
    username: "vedant",
    profile: "https://i.pravatar.cc/150?img=10",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    caption: "Learning React 🚀",
  },
  {
    id: 2,
    username: "rahul",
    profile: "https://i.pravatar.cc/150?img=11",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    caption: "Weekend vibes 🌄",
  },
  {
    id: 3,
    username: "aman",
    profile: "https://i.pravatar.cc/150?img=12",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    caption: "Adventure begins 🏔️",
  },
  {
    id: 4,
    username: "rohit",
    profile: "https://i.pravatar.cc/150?img=13",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    caption: "Coffee time ☕",
  },
  {
    id: 5,
    username: "karan",
    profile: "https://i.pravatar.cc/150?img=14",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
    caption: "Coding all day 💻",
  },
];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(125);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="post">
      {/* Header */}
      <div className="post-header">
        <img
          src={post.profile}
          alt={post.username}
          className="profile-img"
        />
        <h4>{post.username}</h4>
      </div>

      {/* Post Image */}
      <img
        src={post.image}
        alt="post"
        className="post-image"
      />

      {/* Icons */}
      <div className="post-icons">
        <div className="left-icons">
          <span onClick={handleLike}>
            {liked ? <FaHeart className="liked" /> : <FaRegHeart />}
          </span>

          <FaRegComment />
          <FaPaperPlane />
        </div>

        <FaRegBookmark />
      </div>

      {/* Likes */}
      <p className="likes">{likes} likes</p>

      {/* Caption */}
      <p className="caption">
        <strong>{post.username}</strong> {post.caption}
      </p>
    </div>
  );
}

function Post() {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default Post;