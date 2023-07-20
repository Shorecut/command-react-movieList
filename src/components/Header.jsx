import Nav from "react-bootstrap/Nav";

import { useNavigate } from "react-router";
import LiveSearch from "./LiveSearch";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Nav.Link onClick={() => navigate("/")}>
        <p className="navbar_text">Home</p>
      </Nav.Link>
      <LiveSearch />
      <Nav.Link className="navbar_add" onClick={() => navigate("/add")}>
        <p className="navbar_text">Add</p>
      </Nav.Link>
    </div>
  );
}

export default Header;
