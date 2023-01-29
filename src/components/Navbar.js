import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Navbar.Brand>Story Teller</Navbar.Brand>
          </NavLink>

          <Nav className="me-auto">
            <NavLink to="/post" className="nav-link">
              Post your story
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
