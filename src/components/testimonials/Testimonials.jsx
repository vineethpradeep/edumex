import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "../../mockdata/testimonialsData";
import "./testimonials.css";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Hear what our students have to say about our courses and learning
          experience
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000 }}
          speed={600}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="testimonial-slider"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-item"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 100}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="rating">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map(
                      (_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      )
                    )}
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>{testimonial.review}</p>
                </div>
                <div className="testimonial-footer">
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.role}</span>
                  <div className="quote-icon">
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons below the slider */}
        <div className="testimonial-navigation">
          <button
            className="btn-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-slider {
          margin-bottom: 50px; /* space for navigation */
        }
        .testimonial-navigation {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 10px;
        }
        .testimonial-navigation button {
          background: var(--accent-color);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .testimonial-navigation button:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
