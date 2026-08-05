import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../css/profile.css";

function Profile() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home-layout">

        <Sidebar />

        <div className="profile-content">

          {/* Profile Image */}
          <img
            src="https://i.pravatar.cc/200?img=10"
            alt="profile"
            className="profile-avatar"
          />

          {/* Username */}
          <h2>vedant</h2>

          {/* Edit Profile Button */}
          <button
            className="edit-profile-btn"
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </button>

          {/* Stats */}
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

          {/* Bio */}
          <p>Frontend Developer 🚀</p>

        </div>

      </div>
    </>
  );
}

export default Profile;