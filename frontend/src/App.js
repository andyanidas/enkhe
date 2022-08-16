import "./App.css";
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import { useUser } from "./contexts/UserCtx";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  const [user, setUser] = useUser();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
