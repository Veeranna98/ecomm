import React from "react";
import Sqr from "./Sqr";
export default function App4() {
  const sqrFunction = (num) => {
    return num * num;
  };
  return <div><Sqr n={5} f={sqrFunction}/></div>;
}
