import { useState } from "react";
import { FaSearch, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./topnav.css";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="topnav">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="right-section">
        <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
          <img src="https://i.pravatar.cc/40" alt="Admin" className="avatar" />
        </div>

        {open && (
          <div className="dropdown-menu-custom">
            <div className="dropdown-header">
              <strong>Admin User</strong>
            </div>

            <div className="dropdown-item">
              <FaUser className="icon" /> My Profile
            </div>

            <div className="dropdown-item">
              <FaCog className="icon" /> Settings
            </div>

            <div className="dropdown-divider"></div>

            <div
              className="dropdown-item logout-item"
              onClick={() => {
                localStorage.removeItem("admin_token");
                window.location.href = "/";
              }}
            >
              <FaSignOutAlt className="icon" /> Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
