import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Career from './components/sections/Career';
import Roadmap from './components/sections/Roadmap';
import Contact from './components/sections/Contact';
import Blog from './pages/Blog';

const Portfolio = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Roadmap />
    <Career />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <div className="app bg-[#030014]/30 min-h-screen text-white pt-20 md:pt-28">
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
