import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../css/settings.css";

function Settings() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="settings-layout">

        <Sidebar />

        <main className="settings-container">

          <h2>Settings</h2>

          {/* Account */}
          <div className="settings-section">

            <h3>Account</h3>

            <div
              className="settings-item"
              onClick={() => navigate("/edit-profile")}
            >
              <div>
                <strong>Edit Profile</strong>
                <p>Change your profile information</p>
              </div>

              <span>›</span>
            </div>

            <div className="settings-item">

              <div>
                <strong>Password</strong>
                <p>Change your password</p>
              </div>

              <span>›</span>

            </div>

          </div>

          {/* Privacy */}
          <div className="settings-section">

            <h3>Privacy</h3>

            <div className="settings-item">

              <div>
                <strong>Private Account</strong>
                <p>Make your account private</p>
              </div>

              <label className="switch">

                <input type="checkbox" />

                <span className="slider"></span>

              </label>

            </div>

          </div>

          {/* Notifications */}
          <div className="settings-section">

            <h3>Notifications</h3>

            <div className="settings-item">

              <div>
                <strong>Push Notifications</strong>
                <p>Receive notifications on your device</p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  defaultChecked
                />

                <span className="slider"></span>

              </label>

            </div>

          </div>

          {/* More */}
          <div className="settings-section">

            <h3>More</h3>

            <div className="settings-item">

              <div>
                <strong>Help</strong>
                <p>Get help with your account</p>
              </div>

              <span>›</span>

            </div>

            <div className="settings-item">

              <div>
                <strong>About</strong>
                <p>About this Instagram Clone</p>
              </div>

              <span>›</span>

            </div>

          </div>

          {/* Logout */}

          <button
            className="logout-settings"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>

        </main>

      </div>
    </>
  );
}

export default Settings;