import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import Card from "../../components/card/Card";
import "./viewSingleEnquiry.css";

export default function ViewSingleEnquiry() {
  const { id } = useParams();

  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadEnquiry = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/getSingleEnquiry.php?id=${id}`
      );
      const data = await res.json();
      if (data.success) setEnquiry(data.enquiry);
    } catch (err) {
      console.error("Failed to load enquiry:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiry();
  }, [id]);

  const handleAcceptAndMail = async () => {
    alert("✔ Mail sent to user (demo) — backend email API needed.");
  };

  if (loading)
    return <p className="loading-text text-center py-5">Loading enquiry...</p>;

  if (!enquiry)
    return <p className="empty-text text-center py-5">Enquiry not found.</p>;

  return (
    <>
      <PageHeader
        title="Enquiry Details"
        breadcrumbs={[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Enquiries", to: "/view-enquiries" },
          { label: `Enquiry #${id}` },
        ]}
        showBack={true}
      />

      <Card
        title={`Enquiry Person - ${enquiry.first_name} ${enquiry.last_name}`}
        actions={
          <span
            className={`status-badge status-${enquiry.status.toLowerCase()}`}
          >
            {enquiry.status}
          </span>
        }
      >
        <div className="enquiry-grid">
          <div className="enquiry-section">
            <h5 className="section-title">Personal Info</h5>

            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">{enquiry.email}</span>
            </div>

            <div className="info-row">
              <span className="label">Phone:</span>
              <span className="value">{enquiry.phone || "—"}</span>
            </div>

            <div className="info-row">
              <span className="label">Location:</span>
              <span className="value">{enquiry.location || "—"}</span>
            </div>

            <div className="info-row">
              <span className="label">Date of Birth:</span>
              <span className="value">{enquiry.dob || "—"}</span>
            </div>

            <div className="info-row">
              <span className="label">Created:</span>
              <span className="value">
                {new Date(enquiry.created_at).toLocaleString()}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="enquiry-section">
            <h5 className="section-title">Course Details</h5>

            <div className="info-row">
              <span className="label">Course:</span>
              <span className="value">{enquiry.course}</span>
            </div>

            <div className="info-row">
              <span className="label">Education:</span>
              <span className="value">{enquiry.education || "—"}</span>
            </div>

            <div className="info-row">
              <span className="label">Experience:</span>
              <span className="value">{enquiry.experience || "—"}</span>
            </div>

            <div className="info-row">
              <span className="label">Schedule:</span>
              <span className="value text-capitalize">{enquiry.schedule}</span>
            </div>

            <div className="info-row">
              <span className="label">Newsletter:</span>
              <span className="value">
                {enquiry.newsletter ? "Subscribed" : "No"}
              </span>
            </div>

            <div className="info-row motivation-box">
              <span className="label">Motivation:</span>
              <div className="motivation-text">
                {enquiry.motivation || "No motivation provided."}
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons text-center mt-4">
          <button className="btn-accept" onClick={handleAcceptAndMail}>
            <i className="bi bi-send-check me-2"></i> Accept & Send Mail
          </button>
        </div>
      </Card>
    </>
  );
}
