import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/profile.css";
function Profile() {
  return (
    <>
      <Navbar />

      <div className="home-layout">
        <Sidebar />

        <div className="profile-content">
          <img
            src="https://i.pravatar.cc/200?img=10"
            alt="profile"
            className="profile-avatar"
          />

          <h2>vedant</h2>

          <div className="profile-page-stats">
            <span><strong>5</strong> Posts</span>
            <span><strong>100</strong> Followers</span>
            <span><strong>90</strong> Following</span>
          </div>

          <p>Frontend Developer 🚀</p>
        </div>
      </div>
    </>
  );
}

export default Profile;