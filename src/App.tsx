import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'sonner';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import TwoTile from './sections/TwoTile';
import Statement from './sections/Statement';
import Services from './sections/Services';
import Specialists from './sections/Specialists';

import Stats from './sections/Stats';
import Quality from './sections/Quality';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingCTA from './components/FloatingCTA';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-navy min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#141B26',
            color: '#F6F7F9',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <TwoTile />
        <Statement />
        <Services />
        <Specialists />

        <Stats />
        <Quality />
        <Contact />
        <Footer />
      </main>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}

export default App;
