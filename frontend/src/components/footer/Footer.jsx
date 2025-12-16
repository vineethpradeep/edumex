import React from "react";
import {
  footerLinks,
  socialLinks,
  contactInfo,
} from "../../mockdata/footerData";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="EduMex" />
              {/* <span className="sitename">EduMex</span> */}
            </a>
            <p>
              Edumex is a leading provider of online courses and certifications
              in various technologies and industries.
            </p>
            <div className="social-links d-flex mt-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.url}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="col-lg-2 col-6 footer-links">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            {contactInfo.address.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
            <p className="mt-4">
              <strong>Phone:</strong> <span>{contactInfo.phone}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contactInfo.email}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright d-flex justify-content-center align-items-center mt-4">
        <p className="mb-0">
          <span>Copyright</span> © {new Date().getFullYear()}
          <strong className="px-1 sitename">EduMex</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        {/* <div className="credits mb-0">
          Designed by{" "}
          <a href="https://dotseek.co.uk/" target="__blank">
            DotSeek
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
