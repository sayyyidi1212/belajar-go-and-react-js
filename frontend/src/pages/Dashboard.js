import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ChartSection from "../components/ChartSection";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="stats-grid">
          <StatsCard title="Total Sales" value="$5,000" />
          <StatsCard title="Orders" value="120" />
          <StatsCard title="Customers" value="80" />
        </div>
        <ChartSection />
        <div className="table-section">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
