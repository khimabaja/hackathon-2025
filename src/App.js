import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TermsOfService from "./components/TermsOfService";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
