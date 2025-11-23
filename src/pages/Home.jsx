import React from "react";
import CoursesHero from "../components/CoursesHero";
import FeaturedCourses from "../components/FeaturedCourses";
import CourseCategories from "../components/CourseCategories";
import Testimonials from "../components/Testimonials";
import RecentBlogPosts from "../components/RecentBlogPosts";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <CoursesHero />
      <FeaturedCourses />
      <CourseCategories />
      <Testimonials />
      <RecentBlogPosts />
      <CTA />
    </>
  );
};

export default Home;
