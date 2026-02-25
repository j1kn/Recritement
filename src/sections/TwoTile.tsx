import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TwoTile() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTileRef = useRef<HTMLDivElement>(null);
  const rightTileRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Simple fade-in animations
      gsap.fromTo(
        leftTileRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightTileRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        leftContentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightContentRef.current?.querySelectorAll('.animate-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
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
      id="employers"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-navy overflow-hidden"
      style={{ zIndex: 20 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-micro text-coral block mb-3">Our Approach</span>
          <h2 className="font-display font-bold text-h2 text-slate-text mb-4">
            Two Paths, One Goal
          </h2>
          <p className="text-body text-slate-muted max-w-2xl mx-auto">
            Whether you're hiring top talent or seeking your next opportunity, we've got you covered.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Employers */}
          <div
            ref={leftTileRef}
            className="relative rounded-card overflow-hidden min-h-[400px] lg:min-h-[500px] group"
          >
            <img
              src="/images/tile_recruiter_meeting.jpg"
              alt="Recruiter meeting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
            
            <div
              ref={leftContentRef}
              className="relative h-full flex flex-col justify-end p-8 lg:p-10"
            >
              <div className="animate-item w-14 h-14 rounded-btn bg-coral/20 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-coral" />
              </div>
              <h3 className="animate-item font-display font-bold text-2xl lg:text-3xl text-slate-text mb-3">
                For Employers
              </h3>
              <p className="animate-item text-slate-muted mb-6 max-w-md">
                We deliver sales and customer professionals who are screened for
                impact—so you hit target faster. Quality candidates, not volume.
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="animate-item btn-primary w-fit"
              >
                Hire Talent
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Card - Candidates */}
          <div
            id="candidates"
            ref={rightTileRef}
            className="relative rounded-card overflow-hidden min-h-[400px] lg:min-h-[500px] group"
          >
            <img
              src="/images/tile_candidate_laptop.jpg"
              alt="Candidate working"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
            
            <div
              ref={rightContentRef}
              className="relative h-full flex flex-col justify-end p-8 lg:p-10"
            >
              <div className="animate-item w-14 h-14 rounded-btn bg-coral/20 flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-coral" />
              </div>
              <h3 className="animate-item font-display font-bold text-2xl lg:text-3xl text-slate-text mb-3">
                For Candidates
              </h3>
              <p className="animate-item text-slate-muted mb-6 max-w-md">
                Access roles that match your skills—and advisors who actually
                return your calls. Your career growth is our priority.
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="animate-item btn-secondary w-fit"
              >
                Register Your CV
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
