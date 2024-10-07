import React, { useState } from "react";

function Counter() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("");

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="counter">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2>{value}</h2>
    </div>
  );
}
export { Counter };
