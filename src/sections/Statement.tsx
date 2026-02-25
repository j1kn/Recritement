import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Average 14 days to first shortlist',
  '95% placement retention at 12 months',
  'Dedicated account manager',
];

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ zIndex: 30 }}
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/statement_office_walk.jpg"
          alt="Team walking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative w-full px-6 lg:px-[6vw]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="animate-item text-micro text-coral block mb-4">
            Why Choose Recruit 28
          </span>
          <h2 className="animate-item font-display font-bold text-h2 text-slate-text mb-6">
            A smarter way to hire sales and customer talent.
          </h2>
          <p className="animate-item text-lg text-slate-muted mb-10 max-w-2xl mx-auto">
            Briefings that stick. Shortlists that save time. Placements that
            perform. We understand the pressure of sales targets because we've lived them.
          </p>

          {/* Benefits */}
          <div className="animate-item flex flex-wrap justify-center gap-4 lg:gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-slate-text"
              >
                <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                <span className="text-sm lg:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('#contact')}
            className="animate-item btn-primary"
          >
            Book a Call
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
