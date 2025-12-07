import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Card from "../components/card/Card";
import PageHeader from "../components/pageHeader/PageHeader";
import useModal from "../hooks/useModal";
import Modal from "../components/modal/Modal";

export default function ViewAllEnquiries() {
  const navigate = useNavigate();
  const { isOpen, config, openModal, confirm, cancel } = useModal();

  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Load all enrollments ---
  const loadEnrollments = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/getAllEnquiries.php");
      const data = await res.json();

      if (data.success) {
        setEnrollments(data.enrollments);
      }
    } catch (err) {
      console.error("Failed to fetch enrollments:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- Delete enrollment ---
  const confirmDelete = (id) => {
    openModal({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this enrollment?",
      onConfirm: () => handleDelete(id),
      onCancel: () => {},
      confirmText: "Delete",
      cancelText: "Cancel",
    });
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/deleteEnrollment.php?id=${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (data.success) {
        setEnrollments((prev) => prev.filter((e) => e.id !== id));
        openModal({
          title: "Deleted",
          message: "Enrollment deleted successfully",
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

  useEffect(() => {
    loadEnrollments();
  }, []);

  return (
    <>
      <PageHeader
        title="All Enrollments"
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Enrollments", to: "/view-all-enquiries" },
          { label: "View All Enquiries" },
        ]}
      />

      <Card>
        {loading ? (
          <p className="loading-text">Loading enrollments...</p>
        ) : enrollments.length === 0 ? (
          <p className="empty-text">No enrollments found.</p>
        ) : (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Course</th>
                  <th>Education</th>
                  <th>Experience</th>
                  <th>Schedule</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {enrollments.map((enroll, index) => (
                  <tr key={enroll.id}>
                    <td>{index + 1}</td>
                    <td>
                      {enroll.first_name} {enroll.last_name}
                    </td>
                    <td>{enroll.email}</td>
                    <td>{enroll.phone || "-"}</td>
                    <td>{enroll.course}</td>
                    <td>{enroll.education || "-"}</td>
                    <td>{enroll.experience || "-"}</td>
                    <td>{enroll.schedule}</td>
                    <td>
                      <span className="badge">{enroll.status}</span>
                    </td>
                    <td>{new Date(enroll.created_at).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn-view"
                        onClick={() => navigate(`/enquiry/${enroll.id}`)}
                      >
                        View
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => confirmDelete(enroll.id)}
                      >
                        Delete
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
