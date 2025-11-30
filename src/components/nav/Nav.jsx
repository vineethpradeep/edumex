import "./nav.css";
function Nav() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/courses">Courses</a>
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
          <a href="#">Instructors</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>

        <li className="dropdown">
          <a href="#">
            <span>About</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog Details</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* mobile menu icon */}
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}

export default Nav;
