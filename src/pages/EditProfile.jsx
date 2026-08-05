import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/editprofile.css";

function EditProfile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    username: "vedant",
    name: "Vedant Gupta",
    bio: "Frontend Developer 🚀",
    website: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully!");

    navigate("/profile");
  };

  return (
    <div className="edit-profile-page">

      <Navbar />

      <div className="edit-profile-layout">

        <Sidebar />

        <main className="edit-profile-container">

          <h2>Edit Profile</h2>

          <form onSubmit={handleSubmit}>

            {/* Profile Picture */}

            <div className="edit-profile-picture">

              <img
                src="https://i.pravatar.cc/150?img=10"
                alt="profile"
              />

              <button type="button">
                Change Profile Photo
              </button>

            </div>

            {/* Username */}

            <div className="form-group">

              <label>Username</label>

              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />

            </div>

            {/* Name */}

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />

            </div>

            {/* Website */}

            <div className="form-group">

              <label>Website</label>

              <input
                type="text"
                name="website"
                placeholder="https://example.com"
                value={profile.website}
                onChange={handleChange}
              />

            </div>

            {/* Bio */}

            <div className="form-group">

              <label>Bio</label>

              <textarea
                name="bio"
                rows="4"
                maxLength="150"
                value={profile.bio}
                onChange={handleChange}
              />

            </div>

            {/* Buttons */}

            <div className="edit-buttons">

              <button
                type="submit"
                className="save-profile-btn"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </button>

            </div>

          </form>

        </main>

      </div>

    </div>
  );
}

export default EditProfile;