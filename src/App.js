import React, { useState } from "react";
import LandingPage from "./Landingpage";
import TattooPage from "./Tatoopage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tattoo" element={<TattooPage />} />
    </Routes>
  </Router>
);
const App = () => {
  return router;
};

export default App;
