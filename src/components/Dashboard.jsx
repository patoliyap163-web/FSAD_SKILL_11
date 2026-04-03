import React from "react";

const Dashboard = ({ setPage }) => {
  return (
    <div className="card">
      <h2>Welcome to the News Portal Dashboard</h2>
      <p>Navigate to a section using the links below:</p>

      <div className="btn-group">
        <button className="btn-blue" onClick={() => setPage("local")}>
          Local Users
        </button>

        <button className="btn-green" onClick={() => setPage("api")}>
          Users API
        </button>

        <button className="btn-purple" onClick={() => setPage("posts")}>
          Fake API Posts
        </button>
      </div>
    </div>
  );
};

export default Dashboard;