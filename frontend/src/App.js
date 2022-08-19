import "./App.css";
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import { useUser } from "./contexts/UserCtx";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import history from "./history";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";

function App() {
  const [user, setUser] = useUser();
  return (
    <div className="App">
      <Routes history={history}>
        <Route
          path="/"
          element={user ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/conduct-transaction" element={<ConductTransaction />} />
        <Route path="/transaction-pool" element={<TransactionPool />} />
      </Routes>
    </div>
  );
}

export default App;
