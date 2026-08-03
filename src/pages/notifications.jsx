import "../css/notification.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Notifications() {
  return (
    <>
      <Navbar />

      <div className="notification-layout">
        <Sidebar />

        <div className="notifications-container">

          <h2>Notifications</h2>

          <div className="notification-card">
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Rahul"
              className="notification-avatar"
            />

            <div className="notification-text">
              <p><strong>Rahul</strong> liked your post ❤️</p>
              <span className="notification-time">2 min ago</span>
            </div>
          </div>

          <div className="notification-card">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Priya"
              className="notification-avatar"
            />

            <div className="notification-text">
              <p><strong>Priya</strong> commented: Nice picture 😊</p>
              <span className="notification-time">10 min ago</span>
            </div>
          </div>

          <div className="notification-card">
            <img
              src="https://i.pravatar.cc/150?img=4"
              alt="Aman"
              className="notification-avatar"
            />

            <div className="notification-text">
              <p><strong>Aman</strong> started following you 👤</p>
              <span className="notification-time">1 hour ago</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Notifications;