import "../styles/mainPage.css";
import Header from "./subComponents/Header";
import { useEffect, useState } from "react";
import "./index.css";

export default function MainPage() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/wallet-info")
      .then((response) => response.json())
      .then((json) => {
        if (json.balance) setBalance(json.balance);
        if (json.address) setAddress(json.address);
      });
  }, []);
  return (
    <div className="main">
      <Header />

      <div className="block">
        <br />
        <h1>Welcome to the blockchain...</h1>
        <br />
        <div className="walletInfo">
          <div>
            <span style={{ fontWeight: 700, fontSize: "30px" }}>Address:</span>{" "}
            {address}
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: "30px" }}>Balance: </span>
            {balance}
          </div>
        </div>
      </div>
    </div>
  );
}
