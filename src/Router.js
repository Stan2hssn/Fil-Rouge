import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './views/Header'
import HomePage from "./pages/Home";
import CardsPage from "./pages/Cards";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cards" element={<CardsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
