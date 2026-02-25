import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Search, UserCheck, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Brief',
    description: 'We learn your goals, culture, and targets. The better we understand, the better we match.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Source',
    description: 'Headhunting + curated search—no spray-and-pray. We tap our network and beyond.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Screen',
    description: 'Competency interviews, evidence, and reference-ready packs. Only the best pass.',
    icon: UserCheck,
  },
  {
    number: '04',
    title: 'Place',
    description: 'Offer support, onboarding check-ins, and a guarantee. We stay with you.',
    icon: Handshake,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.2 + index * 0.12,
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
      className="relative py-20 lg:py-28 bg-navy"
      style={{ zIndex: 60 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span className="animate-item text-micro text-coral block mb-3">
            How We Work
          </span>
          <h2 className="animate-item font-display font-bold text-h2 text-slate-text mb-4">
            Our process
          </h2>
          <p className="animate-item text-body text-slate-muted max-w-2xl mx-auto">
            A simple, repeatable system—built to reduce time-to-hire and
            improve retention.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index !== steps.length - 1 ? 'lg:pb-12' : ''
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? 'lg:pr-12 lg:text-right'
                        : 'lg:col-start-2 lg:pl-12'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-3 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-navy" />
                      </div>
                      <div>
                        <span className="text-micro text-coral block mb-1">
                          Step {step.number}
                        </span>
                        <h3 className="font-display font-bold text-xl text-slate-text">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-muted pl-16 lg:pl-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-coral border-4 border-navy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
