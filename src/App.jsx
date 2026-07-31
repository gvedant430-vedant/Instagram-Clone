import{ BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";


function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/explore" element={<Explore />}/>
            </Routes>
            </BrowserRouter>
    );
}

export default App;
