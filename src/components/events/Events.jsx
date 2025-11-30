import "./events.css";

const Events = () => {
  return (
    <section id="events" className="events section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="event-item">
              <div className="event-image">
                <img
                  src="assets/img/events-3.webp"
                  alt="Workshop"
                  className="img-fluid"
                />
                <div className="event-date-overlay">
                  <span className="date">
                    MAR
                    <br />
                    18
                  </span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge academic">Academic</span>
                  <span className="event-time">2:00 PM</span>
                </div>
                <h3>Advanced Mathematics Workshop</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt" />
                    <span>Room 205, Science Building</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people" />
                    <span>25 Participants</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">
                    Register Now
                  </a>
                  <div className="event-share">
                    <i className="bi bi-share" />
                    <i className="bi bi-heart" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="event-item">
              <div className="event-image">
                <img
                  src="assets/img/events-5.webp"
                  alt="Tournament"
                  className="img-fluid"
                />
                <div className="event-date-overlay">
                  <span className="date">
                    APR
                    <br />
                    05
                  </span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge sports">Sports</span>
                  <span className="event-time">9:00 AM</span>
                </div>
                <h3>Inter-School Basketball Championship</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt" />
                    <span>Sports Complex Gym</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people" />
                    <span>8 Teams</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">
                    Register Now
                  </a>
                  <div className="event-share">
                    <i className="bi bi-share" />
                    <i className="bi bi-heart" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="event-item">
              <div className="event-image">
                <img
                  src="assets/img/events-7.webp"
                  alt="Art Exhibition"
                  className="img-fluid"
                />
                <div className="event-date-overlay">
                  <span className="date">
                    APR
                    <br />
                    12
                  </span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge arts">Arts</span>
                  <span className="event-time">6:00 PM</span>
                </div>
                <h3>Student Art Exhibition Opening</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt" />
                    <span>Art Gallery, First Floor</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people" />
                    <span>Open to All</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">
                    Register Now
                  </a>
                  <div className="event-share">
                    <i className="bi bi-share" />
                    <i className="bi bi-heart" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining event items can be converted in the same way */}
        </div>

        <div
          className="events-navigation"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="filter-tabs">
                <button className="filter-tab active" data-filter="all">
                  All Events
                </button>
                <button className="filter-tab" data-filter="academic">
                  Academic
                </button>
                <button className="filter-tab" data-filter="sports">
                  Sports
                </button>
                <button className="filter-tab" data-filter="arts">
                  Arts
                </button>
                <button className="filter-tab" data-filter="community">
                  Community
                </button>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <a href="#" className="view-calendar-btn">
                <i className="bi bi-calendar3" />
                View Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
