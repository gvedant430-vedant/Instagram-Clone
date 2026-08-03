import{ BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Search from "./pages/search";
import Notifications from "./pages/notifications";
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            </Routes>
            </BrowserRouter>
    );
}

export default App;
