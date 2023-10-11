import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { refreshToken } from "../Services/Auth/AuthServices";
import { getUser } from "../Services/Auth/AuthServices";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuth = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setUser(null);
  };

  useEffect(() => {
    if (isAuth) {
      getUser()
        .then((user) => setUser(user))
        .catch(() => {
          refreshToken()
            .then((user) => setUser(user))
            .catch(() => {
              localStorage.removeItem("loggedIn");
              navigate("/");
            });
        })
        .finally(() => console.log("done"));
    }
  }, [isAuth, navigate]);

  const value = {
    user,
    setUser,
    isAuth,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
