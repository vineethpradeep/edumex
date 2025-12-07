import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaBook,
  FaUsers,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import "./sidebar.css";

export default function Sidebar() {
  const [courseDropdown, setCourseDropdown] = useState(false);

  function handleLogout() {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin-login";
  }

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>EDUMEX</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <FaUserShield className="icon" />
            <span className="link-text">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/" className="sidebar-link">
            <FaUsers className="icon" />
            <span className="link-text">Students</span>
          </Link>
        </li>

        {/* Courses Dropdown */}
        <li>
          <div
            className="sidebar-link dropdown-toggle"
            onClick={() => setCourseDropdown(!courseDropdown)}
          >
            <FaBook className="icon" />
            <span className="link-text">Courses</span>
            <FaChevronDown
              className="dropdown-icon"
              style={{
                transform: courseDropdown ? "rotate(0deg)" : "rotate(-90deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>

          <ul className={`dropdown-menu ${courseDropdown ? "show" : ""}`}>
            <li>
              <Link to="/add-course" className="sub-link">
                Add Course
              </Link>
            </li>
            <li>
              <Link to="/view-all-courses" className="sub-link">
                View All Courses
              </Link>
            </li>
          </ul>
        </li>

        <li className="sidebar-logout">
          <div className="sidebar-link logout" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span className="link-text">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
