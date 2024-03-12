import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/" index element={<Feeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}