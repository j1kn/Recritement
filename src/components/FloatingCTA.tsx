import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Message */}
      {isExpanded && (
        <div className="bg-white rounded-card p-4 shadow-card max-w-xs mb-2 animate-fade-in-up">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-sm text-navy font-medium">
              Ready to hire top sales talent?
            </p>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-muted hover:text-navy transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-slate-muted mb-3">
            Get in touch and we'll respond within 24 hours.
          </p>
          <button
            onClick={scrollToContact}
            className="w-full py-2 px-4 bg-coral text-navy text-sm font-semibold rounded-btn hover:bg-coral-light transition-colors"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-coral text-navy shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
