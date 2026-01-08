// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup"; // if you have signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Role-based Dashboard */}
        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="/dashboard/user" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
