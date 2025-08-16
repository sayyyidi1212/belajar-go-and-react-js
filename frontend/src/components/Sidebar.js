import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Dashboard</h2>
      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/reports">📈 Reports</Link></li>
        <li><Link to="/users">👤 Users</Link></li> {/* ✅ menu baru */}
          <li><Link to="/barangs">✅ Barang</Link></li>
        <li><Link to="/settings">⚙ Settings</Link></li>
       
      </ul>
    </div>
  );
}
