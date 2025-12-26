import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
const EnrollmentForm = () => {
  const location = useLocation();
  const prefillCourseId = location.state?.courseId || "";
  const prefillCourseTitle = location.state?.courseTitle || "";
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(prefillCourseTitle);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: prefillCourseTitle || "",
    education: "",
    dob: "",
    location: "",
    experience: "",
    motivation: "",
    schedule: "flexible",
    terms: false,
    newsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load courses
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch(`${API_URL}/getAllCourses.php`);
        const data = await res.json();
        if (data.success) setCourses(data.courses);
      } catch (err) {
        console.error("Error loading courses:", err);
      }
    };
    loadCourses();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "course") setSelectedCourse(value);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_URL}/enquiries.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage(
          "Application enquiry enrollment form submitted successfully. "
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          course: "",
          education: "",
          experience: "",
          motivation: "",
          schedule: "flexible",
          terms: false,
          newsletter: false,
        });
        setSelectedCourse("");
      } else {
        setErrorMessage(data.message || "Failed to submit enrollment.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-8 mx-auto">
      <div className="enrollment-form-wrapper">
        <div
          className="enrollment-header text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2>Enrollment Enquiry Form</h2>
          <p>
            Take the next step in your educational journey. Complete the form
            below to secure your spot in our comprehensive online learning
            program.
          </p>
        </div>

        <form
          className="enrollment-form"
          data-aos="fade-up"
          data-aos-delay="300"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            {/* Date of Birth */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dob" className="form-label">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="form-control modern-date"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Location */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="Enter your city / country"
                  required
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="course" className="form-label">
                  Select Course *
                </label>
                {/* <select
                  id="course"
                  name="course"
                  className="form-select"
                  required
                >
                  <option value="">Choose a course...</option>
                  <option value="web-development">
                    Full Stack Web Development
                  </option>
                  <option value="data-science">
                    Data Science &amp; Analytics
                  </option>
                  <option value="digital-marketing">
                    Digital Marketing Mastery
                  </option>
                  <option value="ui-ux-design">
                    UI/UX Design Fundamentals
                  </option>
                  <option value="cybersecurity">
                    Cybersecurity Essentials
                  </option>
                  <option value="mobile-development">
                    Mobile App Development
                  </option>
                </select> */}
                <select
                  id="course"
                  name="course"
                  className="form-select"
                  required
                  value={selectedCourse}
                  onChange={handleChange}
                >
                  {/* Default option */}
                  {!selectedCourse && (
                    <option value="">Choose a course...</option>
                  )}

                  {/* Pre-selected course (if coming from Register Now) */}
                  {selectedCourse && (
                    <option value={selectedCourse}>{selectedCourse}</option>
                  )}

                  {/* Show ALL courses except pre-selected one */}
                  {courses
                    .filter((c) => c.title !== selectedCourse)
                    .map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="education" className="form-label">
                  Education Level
                </label>
                <select
                  id="education"
                  name="education"
                  className="form-select"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="">Select your education level...</option>
                  <option value="high-school">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="experience" className="form-label">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="form-select"
                >
                  <option value="">Select your experience...</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="motivation" className="form-label">
                  What motivates you to take this course?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  className="form-control"
                  rows="4"
                  placeholder="Share your goals and what you hope to achieve..."
                  value={formData.motivation}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="form-group">
                <label className="form-label">
                  Preferred Learning Schedule
                </label>
                <div className="schedule-options">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="schedule"
                      id="weekdays"
                      value="weekdays"
                      checked={formData.schedule === "weekdays"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="weekdays">
                      Weekdays (Monday - Friday)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="weekends"
                      name="schedule"
                      value="weekends"
                      checked={formData.schedule === "weekends"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="weekends">
                      Weekends (Saturday - Sunday)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="schedule"
                      id="flexible"
                      value="flexible"
                      checked={formData.schedule === "flexible"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexible">
                      Flexible (Self-paced)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="form-group">
                <div className="agreement-section">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a> *
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="newsletter">
                      I would like to receive course updates and educational
                      content via email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Success / Error Messages */}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          {/* Submit */}
          <div className="row">
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-enroll"
                disabled={loading}
              >
                <i className="bi bi-check-circle me-2"></i>
                {loading ? "Submitting..." : "Enquiry Now"}
              </button>
              <p className="enrollment-note mt-3">
                <i className="bi bi-shield-check"></i>
                Your information is secure and will never be shared with third
                parties
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
