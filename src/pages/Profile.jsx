import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useProfile } from "../context/ProfileContext";

import "../css/profile.css";

function Profile() {

  const navigate = useNavigate();

  const { profile } = useProfile();

  return (
    <>
      <Navbar />

      <div className="home-layout">

        <Sidebar />

        <div className="profile-content">

          <img
            src={profile.image}
            alt="profile"
            className="profile-avatar"
          />

          <h2>{profile.username}</h2>

          <button
            className="edit-profile-btn"
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </button>

          <div className="profile-page-stats">

            <span>
              <strong>5</strong> Posts
            </span>

            <span>
              <strong>100</strong> Followers
            </span>

            <span>
              <strong>90</strong> Following
            </span>

          </div>

          <p>{profile.bio}</p>

          {profile.website && (
            <p>{profile.website}</p>
          )}

        </div>

      </div>
    </>
  );
}

export default Profile;