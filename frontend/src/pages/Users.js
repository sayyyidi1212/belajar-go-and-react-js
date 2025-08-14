import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Michael Lee", email: "michael@example.com", role: "Viewer", status: "Inactive" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", email: "", role: "", status: "Active" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new user
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill all fields");
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ id: null, name: "", email: "", role: "", status: "Active" });
  };

  // Edit user
  const handleEdit = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  // Update user
  const handleUpdate = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setForm({ id: null, name: "", email: "", role: "", status: "Active" });
    setIsEditing(false);
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>User Management</h2>

        {/* Form Create / Update */}
        <form className="user-form" onSubmit={isEditing ? handleUpdate : handleAdd}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit">{isEditing ? "Update" : "Add"} User</button>
        </form>

        {/* Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td style={{ color: user.status === "Active" ? "green" : "red" }}>
                  {user.status}
                </td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)} style={{ marginLeft: "5px" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
