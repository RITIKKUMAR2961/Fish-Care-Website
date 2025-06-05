import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FishDetailPage from "./pages/FishDetailPage";
import AllFishDetails from "./pages/AllFishDetails";
import TankCalculator from "./pages/TankCalculator";
const App = () => (
  <Router>
    <Box width="100%" m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fish/:id" element={<FishDetailPage />} />
        <Route path="/all-fish" element={<AllFishDetails />} />{" "}
        {/* 👈 New route */}
        <Route path="/tank-calculator" element={<TankCalculator />} />
      </Routes>
      <Footer />
    </Box>
  </Router>
);

export default App;
