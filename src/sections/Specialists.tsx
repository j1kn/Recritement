import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    icon: Target,
    title: 'Sales-First Focus',
    description: 'We only recruit for sales and customer-facing roles. That singular focus makes us better.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Our network and process mean you see qualified candidates within days, not weeks.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'We stand behind every placement with a comprehensive replacement guarantee.',
  },
];

export default function Specialists() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
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
      style={{ zIndex: 50 }}
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/specialists_team_desk.jpg"
          alt="Team collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 lg:px-[6vw]">
        <div ref={contentRef} className="text-center mb-12 lg:mb-16">
          <span className="animate-item text-micro text-coral block mb-4">
            Our Expertise
          </span>
          <h2 className="animate-item font-display font-bold text-h2 text-slate-text mb-4">
            We're sales recruitment specialists.
          </h2>
          <p className="animate-item text-lg text-slate-muted max-w-2xl mx-auto">
            Not generalists. Not job boards. Just focused delivery from a team that understands sales.
          </p>
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="card-glass rounded-card p-6 lg:p-8 text-center"
            >
              <div className="w-14 h-14 rounded-btn bg-coral/20 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-text mb-3">
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
