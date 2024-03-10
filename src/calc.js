import React from "react";

export default function Calc(props) {
  let x = props.a;
  let y = props.b;
  let z = x + y;
  return <div>Result is {z}</div>;
}
