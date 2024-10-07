import React, { useState } from "react";
import { Counter } from "./Components/Counter.jsx";
import PostList from "./Components/PostItem.jsx";
import "./Components/Styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 56", body: "Description" },
    { id: 3, title: "Javascript 78", body: "Description" },
  ]);

  return (
    <div className="app">
      <Counter />
      <br></br>
      <PostList posts={posts} title="TITLE POST"/>
    </div>
  );
}
export default App;
