import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Register from './components/Register';
import SoilAnalysis from './components/SoilAnalysis';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/soil-analysis" element={<SoilAnalysis />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;