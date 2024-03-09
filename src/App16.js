import React from "react";
import { useState } from "react";
import Container from "./container";
export default function App16() {
  const [flag, setflag] = useState(0);
  const disp = () => {};
  return (
    <div>
      <button onClick={() => setflag((prev) => 1)}>Feeds</button>
      <button onClick={() => setflag((prev) => 2)}>Post</button>
      <container flag={flag} />
    </div>
  );
}