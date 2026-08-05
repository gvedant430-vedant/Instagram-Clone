import {NavLink , useNavigate} from "react-router-dom";
import{
    FaHome,
    FaSearch,
    FaCompass,
    FaHeart,
    FaUserCircle,
    FaSignOutAlt,
    FaComments,
} from "react-icons/fa";

import "../css/sidebar.css";

function Sidebar(){
    const navigate=useNavigate();

    const handleLogout =() =>{
        navigate("/");
    };

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
            <NavLink to="/messages" 
            className="menu-item">
    <FaComments />
    <span>Messages</span>
</NavLink>
           <NavLink
            to="/search" 
            className="menu-item">
             <FaSearch />
            <span>Search</span>
               </NavLink>

            <NavLink 
             to="/notifications" 
             className="menu-item">
               <FaHeart />
            <span>Notifications</span>
            </NavLink>

            <div className="menu-item" onClick={handleLogout}>
                <FaSignOutAlt />
                <div>Logout</div>
            </div>
        </div>
    );
}
export default Sidebar;