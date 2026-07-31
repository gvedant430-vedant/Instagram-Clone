import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import "../css/home.css";

function Home(){
    return(
        <div className="home-container">
            {/* <h1>Home Page</h1> */}
            <Navbar />

            <div className="home-layout">
                <Sidebar />
                <main className="feed">
                    <Stories />
                    <Post/>
                    <Post/>
                </main>
            </div>

        </div>
        
    );
}
export default Home;