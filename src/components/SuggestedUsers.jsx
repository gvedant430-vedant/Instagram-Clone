import "../css/suggestedusers.css";

const users = [
  {
    id: 1,
    username: "rahul",
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 2,
    username: "priya",
    name: "Priya Singh",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    username: "aman",
    name: "Aman Verma",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 4,
    username: "neha",
    name: "Neha Gupta",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

function SuggestedUsers() {
  return (
    <div className="suggested-users">

      <div className="suggested-header">
        <h4>Suggested for you</h4>
        <span>See All</span>
      </div>

      {users.map((user) => (
        <div className="suggested-user" key={user.id}>

          <div className="user-info">
            <img src={user.image} alt={user.username} />

            <div>
              <h5>{user.username}</h5>
              <p>{user.name}</p>
            </div>
          </div>

          <button>Follow</button>

        </div>
      ))}

    </div>
  );
}

export default SuggestedUsers;