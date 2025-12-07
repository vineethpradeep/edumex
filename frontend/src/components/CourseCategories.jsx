import React from "react";
import CategoryCard from "../components/categoryCard/CategoryCard";
import coursesData from "../mockdata/fullCoursesData.json";

const iconMap = {
  "Kids Programmes": "bi bi-emoji-smile",
  "Short Courses": "bi bi-lightning-charge",
  "Certificate Programmes": "bi bi-patch-check",
  "Diploma Programmes": "bi bi-mortarboard",
  "Higher Diploma Programmes": "bi bi-award",
  "Top Up Degree Courses": "bi bi-journal-bookmark",
  "Masters Programmes": "bi bi-book-half",
};

const colorMap = {
  "Kids Programmes": "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  "Short Courses": "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "Certificate Programmes": "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "Diploma Programmes": "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  "Higher Diploma Programmes":
    "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
  "Top Up Degree Courses": "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
  "Masters Programmes": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
};

const ProgrammesSection = () => {
  // console.log("coursesData", coursesData);
  const programmes = coursesData?.programmes || [];

  const programmesWithCounts = programmes.map((programme) => {
    const totalCourses = programme?.classes?.reduce((sum, cls) => {
      return sum + (cls?.courses?.length || 0);
    }, 0);

    return {
      ...programme,
      courseCount: totalCourses,
    };
  });

  return (
    <section id="course-categories" className="course-categories section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Course Categories</h2>
        <p>Explore courses in different categories</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {programmesWithCounts.map((programme, index) => (
            <CategoryCard
              key={programme.id}
              iconClass={iconMap[programme.title]}
              title={programme.title}
              courseCount={programme.courseCount}
              link={`/programmes/${programme.slug}`}
              color={colorMap[programme.title]}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
