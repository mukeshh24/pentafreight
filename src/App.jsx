import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Pentakuhl from "./pages/Pentakuhl";
import Industries from "./pages/Industries";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pentakuhl" element={<Pentakuhl />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
