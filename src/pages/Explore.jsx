import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/explore.css";
function Explore() {
  const images = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3",
    "https://picsum.photos/300?4",
    "https://picsum.photos/300?5",
    "https://picsum.photos/300?6",
  ];

  return (
    <>
      <Navbar />

      <div className="home-layout">
        <Sidebar />

        <div className="explore-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt="explore" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;