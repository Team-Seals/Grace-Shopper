import { createContext, useEffect, useState } from "react";
import { fetchMe } from "../../api/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null, username: "Guest" });
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getMe() {
      try {
        const user = await fetchMe();
        if (Object.keys(user).length > 0) {
          setUser(user);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        setUser({ username: "Guest", id: null });
        setLoggedIn(false);
      }
    }
    getMe();
  }, [loggedIn]);

  const contextValue = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
