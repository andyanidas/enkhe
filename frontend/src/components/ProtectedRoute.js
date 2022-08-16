import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserCtx";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  if (user) {
    console.log("navigating");
    return <Navigate to="/login" />;
  }
  return children;
};
