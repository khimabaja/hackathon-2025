// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Matches from './components/Matches'; // <-- Import the new Matches component
import TermsOfService from "./components/TermsOfService";
import LikedProfiles from './components/LikedProfiles';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/home" element={<Home />} />
          <Route path="/likes" element={<LikedProfiles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/matches" element={<Matches />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
