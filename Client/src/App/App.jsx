import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Create from "../Components/Create/Create";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div className="home">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
