import {NavLink} from "react-router-dom";
import{
    FaHome,
    FaSearch,
    FaCompass,
    FaHeart,
    FaUserCircle,
    FaSignOutAlt,
} from "react-icons/fa";

import "../css/Sidebar.css";

function Sidebar(){
    return(
        <div className="sidebar">

            <NavLink to="/home" className="menu-item">
            <FaHome />
            <div>Home</div>
            </NavLink>

            <NavLink to="/explore" className="menu-item">
            <FaCompass/>
            <div>Explore</div>
            </NavLink>

            <NavLink to="/profile" className="menu-item">
            <FaUserCircle />
            <div>Profile</div>
            </NavLink>

            <div className="menu-item">
                <FaSearch />
                <div>Search</div>
            </div>

            <div className="menu-item">
                <FaHeart />
                <div>Notification</div>
            </div>

            <div className="menu-item">
                <FaSignOutAlt />
                <div>Logout</div>
            </div>
        </div>
    );
}
export default Sidebar;