import { useParams } from "react-router-dom";
import CurriculumModule from "../components/CurriculumModule";
import SidebarCard from "../components/SidebarCard";
import { coursesData as courses } from "../coursesData";
import PageTitle from "../components/PageTitle";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <p>Course not found</p>;

  const whatYouLearn = course.whatYouLearn || [
    "Learn key concepts",
    "Hands-on practice",
    "Build projects",
  ];
  const curriculum = course.curriculum || [
    {
      title: "Introduction",
      lessons: ["Lesson 1", "Lesson 2", "Lesson 3"],
    },
  ];

  return (
    <main className="main">
      <PageTitle title={course.title} current="Course" />
      <section id="course-details" className="course-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Header */}
              <div
                className="course-header"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="course-image">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="img-fluid"
                  />
                </div>

                <div className="course-meta">
                  <div className="instructor">
                    <img
                      src={course.instructorImg}
                      alt={course.instructorName}
                      className="instructor-avatar"
                    />
                    <div className="instructor-info">
                      <h6>{course.instructorName}</h6>
                      <span>{course.instructorRole}</span>
                    </div>
                  </div>

                  <div className="course-stats">
                    <div className="stat-item">
                      <i className="bi bi-star-fill"></i>
                      <span>{course.rating.toFixed(1)}</span>
                    </div>
                    <div className="stat-item">
                      <i className="bi bi-people-fill"></i>
                      <span>{course.students} students</span>
                    </div>
                    <div className="stat-item">
                      <i className="bi bi-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="stat-item">
                      <i className="bi bi-bar-chart"></i>
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What you learn */}
              <div
                className="what-you-learn"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>What You'll Learn</h3>
                <div className="row">
                  {whatYouLearn.map((item, i) => (
                    <div key={i} className="col-md-6">
                      <ul className="learn-list">
                        <li>
                          <i className="bi bi-check-circle"></i> {item}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div
                className="course-curriculum"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Course Curriculum</h3>
                {curriculum.map((module, i) => (
                  <CurriculumModule key={i} {...module} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <SidebarCard course={course} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
