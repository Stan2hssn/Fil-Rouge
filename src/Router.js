import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CardsPage from "./pages/SectionCards";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
