import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-coral overflow-hidden"
      style={{ zIndex: 65 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 text-center transition-transform duration-300 hover:scale-105"
          >
            <span className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight">
              Book a call today
            </span>
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-navy flex items-center justify-center text-coral transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight size={32} strokeWidth={2.5} className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
