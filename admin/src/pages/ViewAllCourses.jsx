import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash, FaEye, FaEdit } from "react-icons/fa";
import Card from "../components/card/Card";
import PageHeader from "../components/pageHeader/PageHeader";
import useModal from "../hooks/useModal";
import Modal from "../components/modal/Modal";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
export default function ViewAllCourses() {
  const { isOpen, config, openModal, confirm, cancel } = useModal();
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Load all courses ---
  const loadCourses = async () => {
    try {
      const res = await fetch(`${API_URL}/getAllCourses.php`);
      const data = await res.json();

      if (data.success) {
        setCourses(data.courses);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Show confirmation modal
  const confirmDelete = (courseId) => {
    openModal({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this course?",
      onConfirm: () => handleDelete(courseId),
      onCancel: () => {},
      confirmText: "Delete",
      cancelText: "Cancel",
    });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // --- Delete course handler ---
  const handleDelete = async (courseId) => {
    try {
      const res = await fetch(`${API_URL}/delete_course.php?id=${courseId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setCourses((prev) => prev.filter((c) => c.id !== courseId));
        openModal({
          title: "Deleted",
          message: "Course deleted successfully",
          confirmText: "OK",
        });
      } else {
        openModal({
          title: "Error",
          message: data.message || "Failed to delete",
          confirmText: "OK",
        });
      }
    } catch (err) {
      openModal({
        title: "Error",
        message: err.message || "An error occurred",
        confirmText: "OK",
      });
    }
  };

  return (
    <>
      <PageHeader
        title="All Courses"
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Courses", to: "/view-all-courses" },
          { label: "View All Courses" },
        ]}
        actions={[
          {
            label: "Add Course",
            icon: <FaPlus />,
            onClick: () => navigate("/add-course"),
            show: true,
          },
        ]}
      />

      <Card>
        {loading ? (
          <p className="loading-text">Loading courses...</p>
        ) : courses.length === 0 ? (
          <p className="empty-text">No courses found.</p>
        ) : (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Level</th>
                  <th>Modes</th>
                  <th>Subcourses</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course, index) => (
                  <tr key={course.id}>
                    <td>{index + 1}</td>

                    <td className="course-info">
                      {course.image ? (
                        <img
                          src={course.image}
                          alt={course.title}
                          className="course-img"
                        />
                      ) : (
                        <div className="no-img">No Image</div>
                      )}
                      <div>
                        <strong>{course.title}</strong>
                        <p className="desc">
                          {course.description.slice(0, 60)}...
                        </p>
                      </div>
                    </td>

                    <td>{course.category}</td>
                    <td>
                      {/* {(() => {
                        let levels = [];

                        try {
                          levels = Array.isArray(course.level)
                            ? course.level
                            : JSON.parse(course.level || "[]");
                        } catch {
                          levels = [];
                        }

                        return levels.length > 0 ? levels.join(", ") : "N/A";
                      })()} */}
                      {Array.isArray(course.level)
                        ? course.level.join(", ")
                        : (() => {
                            try {
                              return JSON.parse(course.level || "[]").join(
                                ", "
                              );
                            } catch {
                              return "N/A";
                            }
                          })()}
                    </td>

                    <td>
                      {course.modes?.map((m, i) => (
                        <span key={i} className="badge">
                          {m}
                        </span>
                      ))}
                    </td>

                    <td>{course.subcourses?.length || 0}</td>
                    <td className="action-icons">
                      <button
                        className="icon-btn view"
                        onClick={() => navigate(`/course/${course.id}`)}
                        title="View Course"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="icon-btn edit"
                        onClick={() => navigate(`/course/${course.id}/edit`)}
                        title="Edit Course"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="icon-btn delete"
                        onClick={() => confirmDelete(course.id)}
                        title="Delete Course"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <Modal
        isOpen={isOpen}
        title={config.title}
        message={config.message}
        onConfirm={confirm}
        onCancel={cancel}
        confirmText={config.confirmText}
        cancelText={config.cancelText}
      />
    </>
  );
}
