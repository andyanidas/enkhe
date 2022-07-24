import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserCtx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/main");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
    navigate("/login", { replace: true });
  };
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
