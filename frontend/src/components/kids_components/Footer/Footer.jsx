import { motion as Motion } from "framer-motion";
import "./Footer.css";
import logo from "../../../assets/images/logo-footer.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="footer-left"
            >
              <img src={logo} alt="Logo" className="footer-logo mb-3" />
              <p className="mb-2">
                <strong>Vision:</strong> Provide versatile learning experiences
                for children.
              </p>
              <p className="mb-4">
                <strong>Mission:</strong> Foster creativity, confidence, and
                lifelong learning.
              </p>
              <div className="social-icons d-flex pt-3 gap-3">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </Motion.div>
          </div>

          <div className="col-lg-4 mb-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-heading mb-3">Pages</h5>
              <ul className="footer-links list-unstyled mb-4">
                <li>
                  <a href="#">About Qualitrust</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">News Feed</a>
                </li>
                <li>
                  <a href="#">Infrastructure</a>
                </li>
              </ul>
              <h5 className="footer-heading mb-3">Help</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="#">Admission</a>
                </li>
                <li>
                  <a href="#">School Tours Request</a>
                </li>
                <li>
                  <a href="#">F.A.Q</a>
                </li>
                <li>
                  <a href="#">Reach Us</a>
                </li>
              </ul>
            </Motion.div>
          </div>

          <div className="col-lg-4 mb-4">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="footer-contact"
            >
              <h5 className="footer-heading mb-3">Contact Us</h5>
              <p className="mb-2">
                <strong>Address:</strong> 19 Mansel Street, Swansea, SA1 5SG. UK
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> 01792 951550
              </p>
              <p className="mb-3">
                <strong>Email:</strong> support@edumex.co.uk
              </p>
              <div className="map-container rounded overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.000000000000!2d-3.933000000000000!3d51.61700000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487074faabcd1234%3A0xabcdef1234567890!2s19%20Mansel%20Street%2C%20Swansea%20SA1%205SG%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4vYYYYYYYYYYYYYYYY!5m2!1sen!2suk"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Motion.div>
          </div>
        </div>
        <div className="footer-bottom py-3 mt-4 border-top">
          <div className="container d-flex justify-content-center align-items-center flex-wrap">
            <div className="footer-bottom-left">
              &copy; {new Date().getFullYear()} Edumex Kids. All rights
              reserved.
            </div>
            {/* <div className="footer-bottom-right">
              Powered by{" "}
              <a
                href="https://dotseek.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dot Seek
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
