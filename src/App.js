import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";
import "./Navbar.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
