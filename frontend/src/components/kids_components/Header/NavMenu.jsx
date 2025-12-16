import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Button from "../Button/Button";
import "./Header.css";
import logo from "../../../assets/images/logo.png";

const NavMenu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Navbar
        expand="lg"
        bg="light"
        className={`py-2 navmenu ${isSticky ? "sticky-nav" : ""}`}
      >
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#" className="logo-auto">
            <img
              src={logo}
              alt="Qualitrust Logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-lg-flex justify-content-between align-items-center w-100"
          >
            <Nav className="mx-lg-auto d-flex flex-column flex-lg-row align-items-center text-center text-lg-start gap-4">
              <Nav.Link href="#">Home</Nav.Link>
              <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item href="#">About</NavDropdown.Item>
                <NavDropdown.Item href="#">Team</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Course" id="course-dropdown">
                <NavDropdown.Item href="#">Math</NavDropdown.Item>
                <NavDropdown.Item href="#">Science</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Event" id="event-dropdown">
                <NavDropdown.Item href="#">Workshops</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>

            <div className="mt-3 mt-lg-0 ms-lg-3 text-center text-lg-start">
              <Button
                variant="primary"
                onClick={() => alert("Booking clicked!")}
              >
                Book a Visit
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavMenu;
