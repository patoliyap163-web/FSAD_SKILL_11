import React, { useEffect, useState } from "react";
import axios from "axios";

const FakePostList = ({ setPage }) => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("all");

  const fetchPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filtered =
    userId === "all"
      ? posts
      : posts.filter(p => p.userId == userId);

  return (
    <div className="card">

      {/* ✅ Back Button FIXED */}
      <button className="btn-purple back-btn" onClick={() => setPage("home")}>
        ⬅ Back to Dashboard
      </button>

      <h2>Fake API Posts</h2>

      <div className="controls">
        <select onChange={(e) => setUserId(e.target.value)}>
          <option value="all">All Users</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>

        <button className="btn-refresh" onClick={fetchPosts}>
          Refresh
        </button>
      </div>

      {filtered.slice(0, 5).map((p) => (
        <div key={p.id} className="post">
          <small>User {p.userId}</small>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FakePostList;