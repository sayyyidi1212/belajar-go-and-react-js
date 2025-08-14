import React from "react";

const rows = [
  { id: 1, name: "Product A", price: "$100", stock: 20 },
  { id: 2, name: "Product B", price: "$150", stock: 15 },
  { id: 3, name: "Product C", price: "$200", stock: 8 },
];

export default function DataTable() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>{row.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
