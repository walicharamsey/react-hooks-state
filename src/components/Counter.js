import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment}>I have been clicked {count} times</button>
    </div>
  );
}

export default Counter;
