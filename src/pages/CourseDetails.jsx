import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import CurriculumModule from "../components/CurriculumModule";
import PageTitle from "../components/PageTitle";
import fullCoursesData from "../mockdata/fullCoursesData.json";

const CourseDetails = () => {
  const { id } = useParams();

  // Flatten all courses
  const allCourses = useMemo(() => {
    return fullCoursesData.programmes.flatMap((programme) =>
      programme.classes.flatMap((cls) => cls.courses)
    );
  }, []);

  const course = allCourses.find((c) => c.id === parseInt(id));
  if (!course) return <p>Course not found</p>;

  const whatYouLearn = course.whatYouLearn || [];
  const curriculum =
    course.curriculum?.map((mod) => ({
      module: mod.module,
      lessons: mod.lessons || [],
      lessonsCount: mod.lessonsCount || `${mod.lessons?.length || 0} lessons`,
    })) || [];

  const discount =
    course.price && course.originalPrice
      ? Math.round(
          ((course.originalPrice - course.price) / course.originalPrice) * 100
        )
      : 0;

  const totalLessons = curriculum.reduce(
    (sum, mod) => sum + (mod.lessons?.length || 0),
    0
  );

  return (
    <main className="main bg-light">
      <PageTitle title={course.title} current="Course" />

      <section id="course-details" className="course-details section">
        <div className="container">
          <div className="row g-4">
            {/* Left Side */}
            <div className="col-lg-8">
              {/* Title & Description */}
              <h1 className="fw-bold mb-3">{course.title}</h1>
              <p className="text-muted mb-4">{course.description}</p>

              {/* Instructor Info */}
              <div className="d-flex align-items-start mb-4">
                {/* Instructor Avatar */}
                <img
                  src={course.instructorImg}
                  alt={course.instructorName}
                  className="rounded-circle me-3"
                  style={{ width: "56px", height: "56px", objectFit: "cover" }}
                />

                {/* Instructor Info */}
                <div className="instructor-info">
                  <h6 className="fw-semibold mb-1">{course.instructorName}</h6>
                  <small className="text-muted d-block mb-2">
                    {course.instructorRole}
                  </small>

                  {/* Stats row */}
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-light text-dark d-flex align-items-center px-2 py-1">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      {course.rating?.toFixed(1)}
                    </span>

                    <span className="badge bg-light text-dark d-flex align-items-center px-2 py-1">
                      <i className="bi bi-bar-chart me-1"></i>
                      {course.level}
                    </span>

                    <span className="badge bg-light text-dark d-flex align-items-center px-2 py-1">
                      <i className="bi bi-clock me-1"></i>
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Curriculum */}
              <h3 className="fw-semibold mb-4">Course Structure</h3>
              <div className="curriculum-list">
                {curriculum.map((mod, i) => (
                  <CurriculumModule key={i} {...mod} />
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-card p-4 border rounded shadow-sm bg-white">
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="img-fluid rounded mb-3 fixed-height-img"
                />

                {/* Offer */}
                <div className="offer mb-3 text-danger d-flex align-items-center">
                  <i className="bi bi-clock me-2"></i>
                  <small>5 days left at this price!</small>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <h3 className="d-inline me-2 fw-bold">£ {course.price}</h3>
                  {course.originalPrice > course.price && (
                    <>
                      <span className="text-muted text-decoration-line-through me-2">
                        £ {course.originalPrice}
                      </span>
                      <span className="badge bg-danger">{discount}% Off</span>
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="course-stats d-flex justify-content-between mb-4">
                  <div className="stat-box flex-fill text-center border rounded py-2 mx-1 bg-light">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <span className="fw-semibold">
                      {course.rating?.toFixed(1)}
                    </span>
                    <div className="small text-muted">Rating</div>
                  </div>

                  <div className="stat-box flex-fill text-center border rounded py-2 mx-1 bg-light">
                    <i className="bi bi-clock me-1"></i>
                    <span className="fw-semibold">{course.duration}</span>
                    <div className="small text-muted">Duration</div>
                  </div>

                  <div className="stat-box flex-fill text-center border rounded py-2 mx-1 bg-light">
                    <i className="bi bi-journal-text me-1"></i>
                    <span className="fw-semibold">{totalLessons}</span>
                    <div className="small text-muted">Lessons</div>
                  </div>
                </div>

                {/* Enroll / Buy Buttons */}
                <Link
                  to="/enroll"
                  className="btn w-100 mb-2 fw-semibold enroll-btn"
                >
                  Enroll Now
                </Link>
                <button className="btn w-100 mb-4 fw-semibold buy-btn">
                  Buy Now
                </button>

                {/* Instructor & brief description */}
                <p className="small mb-1">{course.description}</p>
                <small className="text-muted">
                  Course by {course.instructorName}
                </small>

                {/* Sidebar What You'll Learn */}
                <div className="mt-4">
                  <h6 className="fw-semibold mb-3">What you'll learn</h6>
                  <div className="row g-3">
                    {whatYouLearn.slice(0, 5).map((item, idx) => (
                      <div key={idx} className="col-12">
                        <div className="learn-item d-flex align-items-center p-2 border rounded bg-light shadow-sm">
                          <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                          <span className="small">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
