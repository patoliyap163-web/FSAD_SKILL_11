import React, { useEffect, useState } from "react";

const LocalUserList = ({ setPage }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="card">
        <button className="btn-blue" onClick={() => setPage("home")}>
            ⬅ Back to Dashboard
        </button>
      <h2>Local Users</h2>
      <p>Loaded from public/users.json</p>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td style={{color:"#2d8cff"}}>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocalUserList;