import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Users, Building2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: TrendingUp,
    title: 'Sales',
    description: 'From SDRs to Sales Directors, we place revenue-driving professionals at every level.',
    items: [
      'Business Development',
      'Account Management',
      'Sales Leadership',
      'SaaS Sales',
      'Telesales',
    ],
  },
  {
    icon: Users,
    title: 'Customer & Success',
    description: 'Build lasting customer relationships with the right support and success talent.',
    items: [
      'Customer Service',
      'Onboarding',
      'Customer Success',
      'Account Coordinators',
    ],
  },
  {
    icon: Building2,
    title: 'Industries',
    description: 'Deep expertise across high-growth sectors that demand top sales talent.',
    items: [
      'SaaS',
      'Fintech',
      'Insurtech',
      'Professional Services',
      'Retail',
      'Logistics',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.15,
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
      id="roles"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-offwhite"
      style={{ zIndex: 40 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span className="animate-item text-micro text-coral block mb-3">
            What We Do
          </span>
          <h2 className="animate-item font-display font-bold text-h2 text-navy mb-4">
            What we recruit for
          </h2>
          <p className="animate-item text-body text-[#3D4A5C] max-w-2xl mx-auto">
            Sales and customer-facing roles—end to end. Permanent, contract,
            and high-volume delivery tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white rounded-card p-8 shadow-card border border-[#E8ECF2] hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-navy/5 rounded-btn group-hover:bg-coral/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#3D4A5C]">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-offwhite rounded-full text-sm font-medium text-[#3D4A5C]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-coral transition-colors duration-300"
          >
            Discuss your hiring needs
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
