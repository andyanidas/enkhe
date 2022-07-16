import { createContext, useEffect, useState, useContext } from "react";
export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}
export const UserProvider = (props) => {
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const data = JSON.parse(localStorage.getItem("userInfo"));
      setUser({
        userName: data.username,
        email: data.email,
      });
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
