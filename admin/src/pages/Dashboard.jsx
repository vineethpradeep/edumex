import React from "react";
// import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your admin panel overview.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Students</h3>
          <p>120</p>
        </div>
        <div className="card">
          <h3>Total Courses</h3>
          <p>25</p>
        </div>
        <div className="card">
          <h3>Pending Approvals</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}
