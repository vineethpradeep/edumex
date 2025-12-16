import {
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Header.css";

const TopHeader = () => {
  return (
    <Container>
      <div className="top-bar d-none d-md-flex justify-content-between align-items-center">
        <div className="contact-info">
          <span className="contact-item">
            <BsFillEnvelopeFill className="icon" />
            <a> support@edumex.co.uk</a>
          </span>
          <span className="contact-item">
            <BsFillGeoAltFill className="icon" />{" "}
            <a>19 Mansel Street, Swansea, SA1 5SG. UK</a>
          </span>
        </div>
        <div className="contact-info">
          <span className="contact-item">
            <BsFillTelephoneFill className="icon" />
            <a>01792 951550</a>
          </span>
          <span className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
