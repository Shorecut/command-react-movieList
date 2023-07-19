import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="https://freesvg.org/storage/img/thumb/mix2.png"></Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex justify-content-between"
            style={{
              maxHeight: "80px",
              width: "100%",
            }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/")}>
              <p className="navbar_text">Home</p>
            </Nav.Link>
            <Nav.Link className="navbar_add" onClick={() => navigate("/add")}>
              <p className="navbar_text">addMovie</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
