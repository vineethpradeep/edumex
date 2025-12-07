import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogCard from "../BlogCard";
import { blogPostsData } from "../../mockdata/blogData";
import "./recentBlogPosts.css";

const RecentBlogPosts = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="recent-blog-posts" className="recent-blog-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Blog Posts</h2>
        <p>Explore our latest articles and updates</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {blogPostsData.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
