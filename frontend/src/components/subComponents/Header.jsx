import React from "react";
import "../../styles/header.css";
import { useUser } from "../../contexts/UserCtx";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthCtx";

export default function Header() {
  const [user, setUser] = useUser();
  const { login, logout } = useAuth();

  return (
    <div className="header">
      <div className="user">
        {user ? (
          <DropdownButton
            variant="none"
            title={<span className="username">{user.username}</span>}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
          </DropdownButton>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
      <div className="menu">
        <p>MENU1</p>
        <p>MENU2</p>
        <p>MENU3</p>
      </div>
    </div>
  );
}
