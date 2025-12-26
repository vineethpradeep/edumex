import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/pageTitle/PageTitle";
import CurriculumModule from "../components/CurriculumModule";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  console.log(course);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`${API_URL}/getSingleCourse.php?id=${id}`);
        const data = await res.json();
        if (data.success) {
          setCourse(data.course);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p className="text-center mt-5">Loading...</p>;

  const hasSubcourses = course.subcourses?.length > 0;
  const tags = course.tags || [];
  const whatYouLearn = course.whatYouLearn || [];

  // MAIN COURSE MODULES
  const curriculum =
    course.modules?.map((mod) => ({
      module: mod.module_name,
      lessons: mod.units || [],
      lessonsCount: `${mod.units?.length || 0} lessons`,
    })) || [];

  return (
    <main className="main bg-light">
      <PageTitle title={course.title} current="Course" />

      <section id="course-details" className="course-details section">
        <div className="container">
          <div className="row g-4">
            {/* LEFT SECTION */}
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">{course.title}</h1>
              <p className="text-muted mb-4">{course.description}</p>

              {/* MAIN COURSE MODULES */}
              {course.modules && (
                <>
                  <h3 className="fw-semibold mb-4">Modules</h3>
                  {curriculum.length > 0 ? (
                    <div className="curriculum-list">
                      {curriculum.map((mod, i) => (
                        <CurriculumModule key={i} {...mod} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">No modules available.</p>
                  )}
                </>
              )}

              {/* SUBCOURSES */}
              {hasSubcourses && (
                <>
                  <h3 className="fw-semibold mb-4">Sub Courses</h3>
                  <ul className="nav nav-tabs mb-4">
                    {course.subcourses.map((sub, idx) => (
                      <li className="nav-item" key={idx}>
                        <button
                          className={`nav-link ${
                            activeTab === idx ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(idx)}
                        >
                          {sub.title}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {course.subcourses.map((sub, idx) =>
                    activeTab === idx ? (
                      <div
                        key={idx}
                        className="p-3 border rounded bg-white shadow-sm"
                      >
                        <h4 className="fw-bold">{sub.title}</h4>
                        <p className="text-muted">{sub.overview}</p>

                        {/* Subcourse What you'll learn */}
                        {sub.whatYouLearn?.length > 0 && (
                          <>
                            <h5 className="fw-semibold mt-4 mb-3">
                              What you'll learn
                            </h5>
                            <ul className="list-unstyled ms-2">
                              {sub.whatYouLearn.map((item, i) => (
                                <li key={i} className="d-flex mb-2">
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        <h5 className="fw-semibold mt-4 mb-3">Modules</h5>

                        {sub.modules?.length > 0 ? (
                          sub.modules.map((mod, i) => (
                            <CurriculumModule
                              key={i}
                              module={mod.module_name}
                              lessons={mod.units || []}
                              lessonsCount={`${mod.units?.length || 0} lessons`}
                            />
                          ))
                        ) : (
                          <p className="text-muted">No modules available.</p>
                        )}
                      </div>
                    ) : null
                  )}
                </>
              )}

              {/* ENTRY REQUIREMENTS */}
              {course.entry_requirements && (
                <>
                  <h3 className="fw-semibold mb-4 mt-4">Entry Requirements</h3>
                  <p className="text-muted mb-4">{course.entry_requirements}</p>
                </>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div className="sidebar-card p-4 border rounded shadow-sm bg-white">
                <img
                  src={course.image}
                  alt={course.title}
                  className="img-fluid rounded mb-3 fixed-height-img"
                />

                {/* Duration */}
                {course.duration && (
                  <div className="rounded bg-light shadow-sm p-3 mb-3 text-center">
                    <h6 className="fw-semibold mb-2">Duration</h6>
                    <p className="text-muted mb-0">{course.duration}</p>
                  </div>
                )}

                <Link
                  to="/enroll"
                  state={{ courseId: course.id, courseTitle: course.title }}
                  className="btn w-100 mb-2 fw-semibold enroll-btn"
                >
                  Register Now
                </Link>

                {/* Modes */}
                {course.modes?.length > 0 && (
                  <div className="mt-3">
                    <h6 className="fw-semibold mb-1">Mode</h6>
                    <p className="text-muted mb-3">{course.modes.join(", ")}</p>
                  </div>
                )}

                {/* Assessments */}
                {course.assessments && (
                  <div className="mt-3">
                    <h6 className="fw-semibold mb-1">Assessments</h6>
                    <p className="text-muted mb-3">{course.assessments}</p>
                  </div>
                )}

                {/* What you learn */}
                {whatYouLearn.length > 0 && (
                  <div className="mt-3">
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
                )}

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="mt-3">
                    <h6 className="fw-semibold mb-3">Tags</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="badge rounded-pill bg-light text-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
