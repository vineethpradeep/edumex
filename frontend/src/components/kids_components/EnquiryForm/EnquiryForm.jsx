import { motion as Motion } from "framer-motion";
import handArt from "../../../assets/icons/hand-arts.svg";
import "./EnquiryForm.css";

import Globe from "../../../assets/icons/globe.svg";

const EnquiryForm = () => {
  return (
    <section className="enquiry-section py-5">
      <div className="container">
        <div className="enquiry-wrapper">
          <Motion.div
            className="enquiry-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="title-header mb-4 text-center">
              <Motion.h6
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="primary mb-2"
              >
                Get in Touch
              </Motion.h6>

              <Motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="color-dark mb-4"
              >
                Send Us Your Enquiry
              </Motion.h1>
            </div>

            <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Your Phone" required />
                <select required>
                  <option value="">Select Subject</option>
                  <option value="admission">Admission</option>
                  <option value="tour">School Tour</option>
                  <option value="career">Career Opportunity</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <textarea rows="4" placeholder="Your Message" required></textarea>

              <Motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary enquiry-btn"
              >
                Send Message
              </Motion.button>
            </form>
          </Motion.div>
          <Motion.div
            className="enquiry-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={handArt} alt="Enquiry Illustration" />
            <div className="image-overlay"></div>
            <Motion.img
              src={Globe}
              alt="Globe"
              className="enquiry-globe"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
