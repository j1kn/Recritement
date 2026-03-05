import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Star,
    title: 'Curated Shortlists',
    description: '3-5 candidates max, all pre-qualified and ready to interview.',
  },
  {
    icon: Users,
    title: 'Cultural Fit',
    description: 'We match personalities and values, not just skills on paper.',
  },
];

export default function Quality() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 20 },
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

      valuesRef.current.forEach((value, index) => {
        if (!value) return;
        gsap.fromTo(
          value,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 55%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ zIndex: 70 }}
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/quality_handshake_closeup.jpg"
          alt="Professional handshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 lg:px-[6vw]">
        <div ref={contentRef} className="text-center mb-12 lg:mb-16">
          <span className="animate-item text-micro text-coral block mb-4">
            Our Promise
          </span>
          <h2 className="animate-item font-display font-bold text-h2 text-slate-text mb-4">
            Quality over volume.
          </h2>
          <p className="animate-item text-lg text-slate-muted max-w-2xl mx-auto">
            Shortlists you can act on. Candidates who stay. That's the Recruit 28 difference.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => { valuesRef.current[index] = el; }}
              className="card-glass rounded-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-btn bg-coral/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-text mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
