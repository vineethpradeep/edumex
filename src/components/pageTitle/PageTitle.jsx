import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pageTitle.css";

const PageTitle = ({ current }) => {
  const navigate = useNavigate();

  return (
    <div className="page-title light-background py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn d-flex align-items-center"
        >
          <i className="bi bi-arrow-left me-2"></i> Back
        </button>

        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active fw-semibold"
              aria-current="page"
            >
              {current}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
