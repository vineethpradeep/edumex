import React from "react";

const benefits = [
  {
    icon: "bi bi-trophy",
    title: "Expert Instructors",
    desc: "Learn from industry professionals with years of real-world experience",
  },
  {
    icon: "bi bi-clock",
    title: "Flexible Learning",
    desc: "Study at your own pace with 24/7 access to course materials",
  },
  {
    icon: "bi bi-award",
    title: "Certification",
    desc: "Earn industry-recognized certificates upon course completion",
  },
  {
    icon: "bi bi-people",
    title: "Community Support",
    desc: "Connect with fellow students and get help when you need it",
  },
];

const stats = [
  { number: "15,000+", label: "Students Enrolled" },
  { number: "98%", label: "Completion Rate" },
  { number: "4.9/5", label: "Average Rating" },
];

const WhyChooseCourses = () => {
  return (
    <div className="col-lg-4 d-none d-lg-block">
      <div
        className="enrollment-benefits"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h3>Why Choose Our Courses?</h3>

        {benefits.map((item, i) => (
          <div className="benefit-item" key={i}>
            <div className="benefit-icon">
              <i className={item.icon}></i>
            </div>
            <div className="benefit-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="enrollment-stats mt-4">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCourses;
