import React from "react";
import { Search, User } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="top-header-wrapper">
      <div className="container d-flex justify-content-between align-items-center flex-wrap py-2">
        {/* LEFT LINKS */}
        <div className="d-flex gap-2 small flex-wrap left-links align-items-center">
          <a href="#" className="header-link">
            Site Index
          </a>
          <span className="divider">|</span>

          <a href="#" className="header-link">
            Help
          </a>
          <span className="divider">|</span>

          <a href="#" className="header-link">
            Terms & Conditions
          </a>
          <span className="divider">|</span>

          <a href="#" className="header-link">
            Certificate
          </a>
          <span className="divider">|</span>

          <a href="#" className="header-link">
            Privacy Policy
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
          {/* Search Box */}
          <div className="soft-search-box">
            <input
              type="text"
              className="form-control soft-search-input"
              placeholder="Search programs, courses, news..."
            />
            <button className="soft-search-btn">
              <Search size={18} />
            </button>
          </div>

          {/* Portal Button */}
          <button className="portal-btn d-flex align-items-center gap-1 border">
            <User size={16} /> Student Portal
          </button>
        </div>
      </div>
    </div>
  );
}
