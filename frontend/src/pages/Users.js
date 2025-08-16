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
    if (!form.name || !form.email || !form.role) return alert("Please fill all fields");
    setUsers([...users, { ...form, id: Date.now() }]);
    resetForm();
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
    resetForm();
    setIsEditing(false);
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  // Reset form
  const resetForm = () => {
    setForm({ id: null, name: "", email: "", role: "", status: "Active" });
    setIsEditing(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>User Management</h2>

        {/* Form Create / Update */}
        <form className="user-form" onSubmit={isEditing ? handleUpdate : handleAdd}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" name="role" value={form.role} onChange={handleChange} />
          </div>
          <div>
            <label>Status:</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div style={{ marginTop: "10px" }}>
            <button type="submit">{isEditing ? "Update" : "Add"} User</button>
            {isEditing && (
              <button type="button" onClick={resetForm} style={{ marginLeft: "5px", backgroundColor: "gray" }}>
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Table */}
        <table className="data-table" style={{ marginTop: "20px", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Role</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.role}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px", color: user.status === "Active" ? "green" : "red" }}>
                  {user.status}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{ marginLeft: "5px", backgroundColor: "red", color: "white" }}
                  >
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
