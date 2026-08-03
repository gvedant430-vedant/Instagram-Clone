import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import users from "../data/users";
import "../css/search.css";

function Search() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <h1>test</h1>
      <Navbar />

      <div className="search-layout">
        <Sidebar />

        <div className="search-page">
          <h2>Search Users</h2>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <img src={user.image} alt={user.username} />
                <span>{user.username}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Search;