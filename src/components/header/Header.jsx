import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt="" />
          {/* <h1 className="sitename">EduMex</h1> */}
        </Link>

        <Nav />
        <Link to="/enroll" className="btn-getstarted">
          Enroll Now
        </Link>
      </div>
    </header>
  );
}

export default Header;
