// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuoteGeneratorForm from './components/QuoteGeneratorForm';
import AIDubbingRequirement from './components/AIDubbingRequirement';
import ClientQuoteRequirement from './components/ClientQuoteRequirement';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuoteGeneratorForm />} />
        <Route path="/ai-dubbing-requirement" element={<AIDubbingRequirement />} />
        <Route path="/client-quote-requirement" element={<ClientQuoteRequirement />} />
      </Routes>
    </Router>
  );
}

export default App;
