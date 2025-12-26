import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Card from "../../components/card/Card";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./viewCourse.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
export default function ViewCourse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/getSingleCourse.php?id=${id}`);
        const data = await res.json();
        if (data.success) setCourse(data.course);
      } catch (err) {
        console.error("Failed:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p className="loading-text">Loading course details...</p>;
  if (!course) return <p className="empty-text">Course not found.</p>;

  return (
    <>
      <PageHeader
        title={`Course Details`}
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Courses", to: "/view-all-courses" },
          { label: course.title },
        ]}
        actions={[
          {
            label: "Edit Course",
            icon: <FaEdit />,
            onClick: () => navigate(`/course/${course.id}/edit`),
            show: true,
          },
        ]}
        showBack={true}
      />

      <Card>
        {/* HEADER */}
        <div className="course-header-section modern">
          <img
            src={
              course.image || "https://via.placeholder.com/140?text=No+Image"
            }
            alt={course.title}
            className="single-img modern"
          />
          <div className="header-info">
            <h1>{course.title}</h1>
            <p className="description">{course.description}</p>
            <div className="badges-row modern">
              <span className="badge modern">Category: {course.category}</span>
              <span className="badge modern">Level: {course.level}</span>
              <span className="badge modern">Credits: {course.credits}</span>
              <span className="badge modern">Duration: {course.duration}</span>
            </div>
          </div>
        </div>

        {/* MODES */}
        <section>
          <h2 className="section-title modern">Learning Modes</h2>
          <div className="badge-list modern">
            {course.modes.map((m, i) => (
              <span className="badge modern" key={i}>
                {m}
              </span>
            ))}
          </div>
        </section>

        {/* TAGS */}
        <section>
          <h2 className="section-title modern">Tags</h2>
          <div className="badge-list modern">
            {course.tags.length === 0
              ? "No tags"
              : course.tags.map((t, i) => (
                  <span className="badge tag modern" key={i}>
                    {t}
                  </span>
                ))}
          </div>
        </section>

        {/* WHAT YOU LEARN */}
        <section>
          <h2 className="section-title modern">What You Will Learn</h2>
          <ul className="learn-list modern">
            {course.whatYouLearn.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* COURSE STRUCTURE */}
        <section>
          <h2 className="section-title modern">Course Structure</h2>
          {course.modules.length === 0 ? (
            <p>No modules found</p>
          ) : (
            course.modules.map((mod) => (
              <div key={mod.id} className="module-box modern">
                <h3>{mod.module_name}</h3>
                {mod.units.length === 0 ? (
                  <p>No units</p>
                ) : (
                  <table className="unit-table modern">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Unit Title</th>
                        <th>Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mod.units.map((u, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{u.title}</td>
                          <td>{u.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))
          )}
        </section>

        {/* SUBCOURSES */}
        <section>
          <h2 className="section-title modern">Subcourses</h2>
          {course.subcourses.length === 0 ? (
            <p>No subcourses</p>
          ) : (
            course.subcourses.map((s) => (
              <div key={s.id} className="subcourse-box modern">
                <h3>{s.title}</h3>
                <p className="description">{s.overview}</p>

                {/* Subcourse Modules */}
                {s.modules && s.modules.length > 0 ? (
                  s.modules.map((mod) => (
                    <div
                      key={mod.id}
                      className="module-box subcourse-module modern"
                    >
                      <h4>{mod.module_name}</h4>
                      {mod.units.length === 0 ? (
                        <p>No units</p>
                      ) : (
                        <table className="unit-table modern">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Unit Title</th>
                              <th>Credits</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mod.units.map((u, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{u.title}</td>
                                <td>{u.credits}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No modules found</p>
                )}
              </div>
            ))
          )}
        </section>
      </Card>
    </>
  );
}
