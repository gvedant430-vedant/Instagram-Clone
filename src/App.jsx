import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Search from "./pages/search";
import Notifications from "./pages/notifications";
import StoryViewer from "./pages/StoryViewer";
import Messages from "./pages/Messages";
import CreatePostPage from "./pages/CreatePostPage";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/search" element={<Search />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route
          path="/story/:id"
          element={<StoryViewer />}
        />

        <Route
          path="/messages"
          element={<Messages />}
        />

        <Route
        path="/create"
        element={<CreatePostPage />}
        />
        <Route
        path="/edit-profile"
        element={<EditProfile />}
        />

        <Route
         path="/settings"
         element={<Settings />}
         />

      </Routes>
    </BrowserRouter>
  );
}

export default App;