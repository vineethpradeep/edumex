import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        {/* <li className="dropdown">
          <a href="/courses">
            <span>Courses</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li>
              <a href="#">Kids Programming</a>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>Certificates</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>

              <ul>
                <li>
                  <a href="#">Programming Language</a>
                </li>
                <li>
                  <a href="#">Digital Learning</a>
                </li>
                <li>
                  <a href="#">SEO Training</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Lawer Training</a>
            </li>
            <li>
              <a href="#">Teacher Training</a>
            </li>
            <li>
              <a href="#">Skill Development</a>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to="/">Validate Certificate</Link>
        </li>
        <li>
          <Link to="/">Instructors</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>

        <li className="dropdown">
          <Link to="/">
            <span>About</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </Link>
          <ul>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* mobile menu icon */}
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}

export default Nav;
