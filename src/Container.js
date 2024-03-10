import React from "react";
import Feeds from "./Feeds"
import Post from "./Post"
export default function Container(props) {
  if (props.flag === 1) return <Feeds />;
  else if (props.flag === 2) return <Post />;
}