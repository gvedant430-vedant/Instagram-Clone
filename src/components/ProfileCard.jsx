import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

import "../css/profile.css";

function ProfileCard() {

  const navigate = useNavigate();

  const { profile } = useProfile();

  return (
    <div className="profile-card">

      {/* Profile Header */}
      <div className="profile-header">

        <img
          src={profile.image}
          alt="profile"
          className="profile-image"
        />

        <div>
          <h4>{profile.username}</h4>
          <p>{profile.bio}</p>
        </div>

      </div>


      {/* Stats */}
      <div className="profile-stats">

        <div>
          <h4>5</h4>
          <span>Posts</span>
        </div>

        <div>
          <h4>100</h4>
          <span>Followers</span>
        </div>

        <div>
          <h4>90</h4>
          <span>Following</span>
        </div>

      </div>


      {/* View Profile */}
      <button
        className="profile-btn"
        onClick={() => navigate("/profile")}
      >
        View Profile
      </button>

    </div>
  );
}

export default ProfileCard;
