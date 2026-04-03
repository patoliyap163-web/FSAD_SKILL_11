import React, { useEffect, useState } from "react";

const UserList = ({ setPage }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="card">
      
      {/* ✅ Back Button FIXED */}
      <button className="btn-green back-btn" onClick={() => setPage("home")}>
        ⬅ Back to Dashboard
      </button>

      <h2>Users from JSONPlaceholder</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 5).map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;