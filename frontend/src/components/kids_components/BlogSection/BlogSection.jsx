import { motion as Motion } from "framer-motion";
import Button from "../Button/Button";
import "./BlogSection.css";

import image1 from "../../../assets/images/gallry-01.jpg";
import image2 from "../../../assets/images/gallry-02.jpg";
import image3 from "../../../assets/images/gallry-03.jpg";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      image: image1,
      date: "12 Aug 2025",
      category: "Classes",
      title: "How to Keep Children Safe Online In Simple Steps",
      author: "Admin",
    },
    {
      id: 2,
      image: image2,
      date: "10 Sep 2025",
      category: "Education",
      title: "Baby school and other secrets your family doesn’t tell you",
      author: "Admin",
    },
    {
      id: 3,
      image: image3,
      date: "07 Nov 2025",
      category: "Indoor games",
      title: "Why would baby scroll ever be banned worldwide?",
      author: "Admin",
    },
  ];

  return (
    <section className="py-5 bg-light blog-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <div className="title-header ">
            <Motion.h6
              className="primary mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Blogs
            </Motion.h6>

            <Motion.h1
              className="mb-4 default-color"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              News & Articles
            </Motion.h1>
          </div>

          <Button variant="primary" onClick={() => alert("Booking clicked!")}>
            All Articles →
          </Button>
        </div>

        <div className="row g-4">
          {articles.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <Motion.div
                className="card border-0 shadow-sm blog-card h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top rounded-3"
                  />
                  <div className="date-box bg-white text-center shadow-sm">
                    <h4 className="mb-0">{item.date.split(" ")[0]}</h4>
                    <small className="fw-semibold">
                      {item.date.split(" ")[1]} {item.date.split(" ")[2]}
                    </small>
                  </div>
                </div>

                <div className="card-body">
                  <p className="small mb-2">
                    <span className="primary fw-semibold me-2">
                      • {item.category}
                    </span>{" "}
                    <span className="text-muted">{item.author}</span>
                  </p>
                  <h5 className="fw-bold lh-base">{item.title}</h5>
                </div>
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
