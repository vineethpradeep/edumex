import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/dashboard.php");
      const data = await res.json();
      if (data.success) setStats(data.data);
    } catch (err) {
      console.error("Dashboard load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading)
    return <p className="loading-text text-center py-5">Loading...</p>;

  return (
    <>
      <PageHeader title="Dashboard" breadcrumbs={[{ label: "Dashboard" }]} />

      <div className="dashboard-grid">
        <Card title="Total Courses">
          <div className="stat-number">{stats.courseCount}</div>
          <p className="stat-label">Courses currently available</p>
        </Card>

        <Card title="Total Enquiries">
          <div className="stat-number">{stats.enquiryCount}</div>
          <p className="stat-label">Students submitted enquiries</p>
        </Card>

        <Card title="New Enquiries">
          <div className="stat-number">{stats.newEnquiries}</div>
          <p className="stat-label">Awaiting follow-up</p>
        </Card>
      </div>

      {/* Recent Enquiries Section */}
      <Card title="Recent Enquiries">
        {stats.recentEnquiries.length === 0 ? (
          <p>No recent enquiries.</p>
        ) : (
          <div className="recent-list">
            {stats.recentEnquiries.map((enq) => (
              <div key={enq.id} className="recent-item">
                <div>
                  <strong>
                    {enq.first_name} {enq.last_name}
                  </strong>
                  <p className="email">{enq.email}</p>
                </div>

                <div className="recent-meta">
                  <span className="course">{enq.course}</span>
                  <span className="date">
                    {new Date(enq.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}
