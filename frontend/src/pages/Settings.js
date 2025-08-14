import React from "react";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Settings</h2>
        <p>This is the settings page.</p>
      </div>
    </div>
  );
}
