import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../../pages/Home";
import CardsPage from "../../pages/Cards";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="cards" element={<CardsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
