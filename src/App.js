import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProphecyList from "pages/ProphecyList";
import ProphecyDetail from "pages/ProphecyDetail";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prophecy-list" element={<ProphecyList />} />
          <Route path="/create-your-prophecy" element={<ProphecyDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
