import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-navy text-slate-text overflow-hidden"
      style={{ zIndex: 35 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <span className="animate-item text-micro text-coral block mb-4">
            About Us
          </span>
          <h2 className="animate-item font-display font-bold text-h2 mb-8">
            Expertly connecting talent with ambition.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="animate-item">
              <p className="text-lg text-slate-muted leading-relaxed mb-6">
                At Recruit 28, we specialise in connecting exceptional sales talent with ambitious businesses. From entry-level representatives to senior sales leaders, we support professionals at every stage of their journey and help companies build high-performing sales teams.
              </p>
            </div>
            <div className="animate-item">
              <p className="text-lg text-slate-muted leading-relaxed">
                We believe successful recruitment starts with understanding people — their drive, their goals, and what truly motivates them. That’s why we focus on building genuine, long-term relationships based on trust, transparency, and reliability. Whether you’re growing your sales team or looking for your next opportunity, Recruit 28 is here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
