import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS file
import App from './App'; // Main App component
import OutputPage from './OutputPage'; // Import the OutputPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<App />} />
        <Route path="/output" element={<OutputPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
