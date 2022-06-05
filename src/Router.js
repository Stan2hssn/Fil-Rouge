import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CardsPage from "./pages/SectionCards";
import CardPage from "./pages/Card";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="cards" element={<CardsPage />} />
        <Route exact path="/card/:name" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
