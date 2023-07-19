import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Nav.Link onClick={() => navigate("/")}>
        <p className="navbar_text">Home</p>
      </Nav.Link>
      <Nav.Link className="navbar_add" onClick={() => navigate("/add")}>
        <p className="navbar_text">Add</p>
      </Nav.Link>
    </div>
  );
}

export default Header;
