import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import ProfileCard from "../components/ProfileCard";
import SuggestedUsers from "../components/SuggestedUsers";

import "../css/home.css";

function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <div className="home-layout">

        <Sidebar />

        {/* Feed */}
        <main className="feed">
          <Post />
        </main>

        {/* RIGHT SIDE */}
        <aside className="profile-section">

          <ProfileCard />

          <SuggestedUsers />

        </aside>

      </div>

    </div>
  );
}

export default Home;