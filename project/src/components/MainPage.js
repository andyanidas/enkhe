import "../styles/mainPage.css";
import Header from "./subComponents/Header";
export default function MainPage() {
  return (
    <div className="main">
      <Header />
      {/* <Navbar>
        <Container>
          <Navbar.Brand href="/">Welcome To Coin Project</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {user ? (
                <DropdownButton
                  variant="outline-secondary"
                  title={user.username}
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
      </Navbar> */}
    </div>
  );
}
