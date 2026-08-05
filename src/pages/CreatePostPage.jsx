import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";

function CreatePostPage() {

  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts((previousPosts) => [
      newPost,
      ...previousPosts,
    ]);
  };

  return (
    <>
      <Navbar />

      <div className="home-layout">

        <Sidebar />

        <main className="create-page">

          <CreatePost
            onCreatePost={handleCreatePost}
          />

          {posts.map((post) => (
            <div key={post.id}>
              <img
                src={post.image}
                alt="post"
                width="400"
              />

              <p>
                <strong>{post.username}</strong>{" "}
                {post.caption}
              </p>
            </div>
          ))}

        </main>

      </div>
    </>
  );
}

export default CreatePostPage;