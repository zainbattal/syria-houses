import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./elements/home";
import Uploud_page from "./elements/post opinion";
import Docker from "./elements/docker";
function App() {
  return (
    <>
      <Docker></Docker>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddOpinion" element={<Uploud_page></Uploud_page>} />
      </Routes>
    </>
  );
}

export default App;
