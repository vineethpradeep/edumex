import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopNavbar from "../components/topNavbar/TopNavbar";
import { Outlet } from "react-router-dom";
// import "./dashboardLayout.css";
export default function DashboardLayout() {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="main-content">
        <TopNavbar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
