import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfUsePage from './pages/TermsOfUse';
import CookiePolicyPage from './pages/CookiePolicy';

gsap.registerPlugin(ScrollTrigger);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-navy min-h-screen">
        <div className="grain-overlay" />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#001B3D',
              color: '#F6F7F9',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />

        <Navigation />

        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
          <Footer />
        </main>

        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
