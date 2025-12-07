import React from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import EnrollmentForm from "../components/EnrollmentForm";
import WhyChooseCourses from "../components/WhyChooseCourses";

const Enroll = () => {
  return (
    <main className="main">
      <PageTitle title="Enrollment" current="Enroll" />

      <section id="enroll" className="enroll section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <EnrollmentForm />
            <WhyChooseCourses />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Enroll;
