import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import Card from "../components/card/Card";
import PageHeader from "../components/pageHeader/PageHeader";
import useModal from "../hooks/useModal";
import Modal from "../components/modal/Modal";

export default function ViewAllEnquiries() {
  const navigate = useNavigate();
  const { isOpen, config, openModal, confirm, cancel } = useModal();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Load all enquiries ---
  const loadEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/getAllEnquiries.php");
      const data = await res.json();

      if (data.success) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- Delete enquiry ---
  const confirmDelete = (id) => {
    openModal({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this enquiry?",
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
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
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
    loadEnquiries();
  }, []);

  return (
    <>
      <PageHeader
        title="All Enquiries"
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Enquiries", to: "/view-all-enquiries" },
          { label: "View All Enquiries" },
        ]}
      />

      <Card>
        {loading ? (
          <p className="loading-text">Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p className="empty-text">No enquiries found.</p>
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
                {enquiries.map((enroll, index) => (
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
                    <td className="action-icons">
                      <button
                        className="icon-btn view"
                        onClick={() => navigate(`/enquiry/${enroll.id}`)}
                        title="View Enquiry"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="icon-btn delete"
                        onClick={() => confirmDelete(enroll.id)}
                        title="Delete Enquiry"
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
