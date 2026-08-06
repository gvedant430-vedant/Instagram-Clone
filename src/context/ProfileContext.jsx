import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {

  const [profile, setProfile] = useState({
    username: "vedant",
    name: "Vedant Gupta",
    bio: "Frontend Developer 🚀",
    website: "",
    image: "https://i.pravatar.cc/200?img=10",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}