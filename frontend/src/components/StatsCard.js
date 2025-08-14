import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}
