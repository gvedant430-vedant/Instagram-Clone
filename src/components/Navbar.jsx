import { Link, NavLink } from "react-router-dom";
import{
    FaInstagram,
    FaHome,
    FaSearch,
    FaCompass,
    FaHeart,
    FaUserCircle,
} from "react-icons/fa";

import "../css/navbar.css";

function Navbar(){
    return(
        <nav className="navbar">

            <div className="navbar-logo">
                <FaInstagram className="logo-icon"/>
                <h2>Instagram</h2>
            </div>
            
            <div className="navbar-search">
                <FaSearch className="search-icon"/>
                <input type="text" placeholder="Search" />
                <NavLink/>
            </div>

            <div className="navbar-icons">
                <Link to="/home">
                <FaHome />
                </Link>

                <Link to="/explore">
                <FaCompass />
                </Link>
                
                <Link to="#">
                <FaHeart />
                </Link>

                <Link to="/profile">
                <FaUserCircle />
                </Link>
            </div>
        </nav>
        
    );
}
export default Navbar;