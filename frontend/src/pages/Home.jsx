import React from "react";
import CoursesHero from "../components/coursesHero/CoursesHero";
import About from "../components/about/About";
import FeaturedCourses from "../components/FeaturedCourses";
// import CourseCategories from "../components/CourseCategories";
import Testimonials from "../components/testimonials/Testimonials";
import RecentBlogPosts from "../components/recentBlogPosts/RecentBlogPosts";
import CTA from "../components/cta/CTA";
import Events from "../components/events/Events";

const Home = () => {
  return (
    <>
      <CoursesHero />
      <About />
      <FeaturedCourses />
      {/* <CourseCategories /> */}
      <RecentBlogPosts />
      <CTA />
      <Events />
      <Testimonials />
    </>
  );
};

export default Home;
