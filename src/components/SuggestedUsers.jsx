import { useState } from "react";
import "../css/suggestedusers.css";

const users = [
  {
    id: 1,
    username: "rahul",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 2,
    username: "priya",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    username: "aman",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 4,
    username: "neha",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

function SuggestedUsers() {

  const [following, setFollowing] = useState([]);

  const handleFollow = (id) => {
    setFollowing((previous) => {

      if (previous.includes(id)) {
        // Unfollow
        return previous.filter(
          (userId) => userId !== id
        );
      }

      // Follow
      return [...previous, id];
    });
  };

  return (
    <div className="suggested-users">

      <h3>Suggested for you</h3>

      {users.map((user) => {

        const isFollowing = following.includes(user.id);

        return (
          <div className="suggested-user" key={user.id}>

            <img
              src={user.image}
              alt={user.username}
            />

            <div className="suggested-info">
              <strong>{user.username}</strong>
              <span>Suggested for you</span>
            </div>

            <button
              onClick={() => handleFollow(user.id)}
              className={
                isFollowing
                  ? "following-btn"
                  : "follow-btn"
              }
            >
              {isFollowing ? "Following" : "Follow"}
            </button>

          </div>
        );
      })}

    </div>
  );
}

export default SuggestedUsers;