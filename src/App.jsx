import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';
import CustomCursor from './components/custom-cursor/CustomCursor';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <ScrollAnimations />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
