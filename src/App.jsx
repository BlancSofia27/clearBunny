import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./views/Landing";
import BarberShop from "./views/BarberShop";
import Consulting from "./views/Consulting";
import Tourism from "./views/Tourism";

function App() {
  return (
    <Router basename="/Landing">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/BarberShop" element={<BarberShop />} />
        <Route path="/Consulting" element={<Consulting />} />
        <Route path="/Tourism" element={<Tourism />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

