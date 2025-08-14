import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Users from "./pages/Users"; // ✅ import
import Settings from "./pages/Settings";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} /> {/* ✅ route baru */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
