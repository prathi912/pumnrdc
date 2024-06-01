// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginSignup from './components/LoginSignup';
import Booking from './components/Booking';
import Calendar from './components/Calendar';
import Pricing from './components/Pricing';
import { AuthProvider } from './context/AuthContext';

function App () {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
