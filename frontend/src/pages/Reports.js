import React from "react";
import Sidebar from "../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataTable from "../components/DataTable";

const reportData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 4500 },
  { month: "Apr", revenue: 6000 },
  { month: "May", revenue: 7000 },
];

export default function Reports() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Sales Reports</h2>

        <div className="chart-section">
          <h3>Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#27ae60" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="table-section">
          <h3>Detailed Sales Data</h3>
          <DataTable />
        </div>
      </div>
    </div>
  );
}
