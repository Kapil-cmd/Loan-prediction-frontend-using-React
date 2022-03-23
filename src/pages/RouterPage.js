import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Prediction from "./Prediction";
export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/predict" exact element={<Prediction />} />
        </Routes>
      </Router>
    </div>
  );
}
