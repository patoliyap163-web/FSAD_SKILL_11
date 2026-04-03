import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LocalUserList from "./components/LocalUserList";
import UserList from "./components/UserList";
import FakePostList from "./components/FakePostList";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <div className="header">📰 News Portal</div>

      <div className="container">
        {page === "home" && <Dashboard setPage={setPage} />}
        {page === "local" && <LocalUserList setPage={setPage} />}
        {page === "api" && <UserList setPage={setPage} />}
        {page === "posts" && <FakePostList setPage={setPage} />}
      </div>
    </>
  );
}

export default App;