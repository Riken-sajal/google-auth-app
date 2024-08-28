// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleAuthButton from './components/GoogleAuthButton';
import Dashboard from './pages/Dashboard';
import AuthReceiver from './pages/AuthReceiver';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleAuthButton />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth-receiver" element={<AuthReceiver />} />
      </Routes>
    </Router>
  );
};

export default App;
