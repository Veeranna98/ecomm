import React from "react";
import { memo } from "react";
function ExpComp(props) {
  let i
  for (i = 0; i < 1000; i++) {}
  console.log(i);
  // console.log("ExpComp Rendered", props.count, "times");

  return <div>ExpComp</div>;
}
export default memo(ExpComp)
