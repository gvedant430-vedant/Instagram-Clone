import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    navigate("/home");
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1 className="logo">Instagram</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username, email or phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Log In
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;