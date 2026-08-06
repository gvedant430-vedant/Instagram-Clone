import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useProfile } from "../context/ProfileContext";

import "../css/editprofile.css";

function EditProfile() {

  const navigate = useNavigate();

  const { profile, setProfile } = useProfile();

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setProfile(formData);

    navigate("/profile");
  };

  return (
    <>
      <Navbar />

      <div className="edit-profile-layout">

        <Sidebar />

        <main className="edit-profile-container">

          <h2>Edit Profile</h2>

          <form onSubmit={handleSubmit}>

            <div className="edit-profile-picture">

              <img
                src={formData.image}
                alt="profile"
              />

            </div>

            <div className="form-group">

              <label>Username</label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Website</label>

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Bio</label>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />

            </div>

            <button
              type="submit"
              className="save-profile-btn"
            >
              Save Changes
            </button>

          </form>

        </main>

      </div>
    </>
  );
}

export default EditProfile;