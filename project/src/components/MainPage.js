import React, { useEffect } from "react";
import { useUser } from "../contexts/UserCtx";
import { Container, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { useAuth } from "../contexts/AuthCtx";
export default function MainPage() {
  const [user, setUser] = useUser();
  const { login, logout } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Welcome To Coin Project</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user ? (
              <DropdownButton
                variant="outline-secondary"
                title={user.userName}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
              </DropdownButton>
            ) : (
              <a href="/login">Login</a>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
