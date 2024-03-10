import React from "react";
import ExpComp from "./ExpComp";
import { useState } from "react";

export default function App12() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpComp/>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}
