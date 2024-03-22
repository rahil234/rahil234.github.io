import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/HomePage';
import About from './components/About/About';
import Portfolio from './components/Protfolio/Protfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import TopNavBar from './components/TopNavBar/TopNavBar';

function App() {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
