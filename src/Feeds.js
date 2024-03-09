import React from "react";
import { useEffect, useState } from "react";
export default function Feeds() {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount((prev) => prev + 1);
    console.log("Count incremented and component Updated")
  };
  const decrement = () => {
    setcount((prev) => prev - 1);
    console.log("Count decremented and component Updated")
  };
  useEffect(() => {
    console.log("Feeds Component Mounted", Date());
    return () => {
      console.log("Feeds Component Unmounted");
    };
  }, []);
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => decrement()}>-</button>
      {count}
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
