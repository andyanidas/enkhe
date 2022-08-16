import "./App.css";
import Login from "./components/Login";
import { useUser } from "./contexts/UserCtx";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useUser();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        {/* If you want to restrict to access route use ProtectedRoute component as wrapper */}
        <Route
          path="main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
