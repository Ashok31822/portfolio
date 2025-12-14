import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Timeline />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm bg-black/20">
        <p>© {new Date().getFullYear()} Ashok Mahto. All rights reserved.</p>
        <p className="mt-2">Built with React, TailwindCSS & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
