import "./about.css";
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <img
              src="assets/img/education-square-2.webp"
              alt="About Us"
              className="img-fluid rounded-4"
            />
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="about-content">
              <span className="subtitle">About Us</span>
              <h2>Empowering Future Leaders Through Quality Education</h2>
              <p>
                Edumex is dedicated to shaping the next generation of leaders by
                providing high-quality education and skill-building programmes.
                We focus on nurturing creativity, critical thinking, and
                practical skills that prepare students for global challenges.
                Our curriculum blends academic excellence with real-world
                applications, ensuring learners develop both knowledge and
                confidence. With experienced instructors, innovative teaching
                methods, and a supportive learning environment, Edumex empowers
                students to reach their full potential and thrive in their
                chosen fields.
              </p>
              <div className="stats-row">
                <div className="stats-item">
                  <span className="count">15</span>
                  <p>Years of Experience</p>
                </div>
                <div className="stats-item">
                  <span className="count">200+</span>
                  <p>Expert Instructors</p>
                </div>
                <div className="stats-item">
                  <span className="count">50k+</span>
                  <p>Students Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
