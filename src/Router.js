import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './views/Header'
import Footer from './views/Footer'
import Home from "./pages/Home";
import About from "./pages/About";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
