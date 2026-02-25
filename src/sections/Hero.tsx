import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        microLabelRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          headlineRef.current?.querySelectorAll('.word') || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.04 },
          '-=0.2'
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          '-=0.2'
        )
        .fromTo(
          portraitRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.7 },
          '-=0.5'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Simple fade on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      gsap.to(portraitRef.current, {
        opacity: 0,
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineWords = 'Hire the people who move the needle.'.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-navy flex items-center"
      style={{ zIndex: 10 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero_office_collaboration.jpg"
          alt="Office collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 lg:px-[6vw] pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
          {/* Left Content */}
          <div ref={contentRef} className="lg:w-[50vw] max-w-2xl">
            {/* Micro Label */}
            <span
              ref={microLabelRef}
              className="text-micro text-coral block mb-4"
            >
              UK Sales & Customer Recruitment
            </span>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display font-bold text-hero text-slate-text mb-5"
            >
              {headlineWords.map((word, index) => (
                <span key={index} className="word inline-block mr-[0.25em]">
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-lg text-slate-muted max-w-xl mb-8"
            >
              Sales and customer-facing talent—sourced, screened, and matched to
              your revenue goals. We specialize in placing high-performing professionals who drive results.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Hire Talent
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                <Phone size={16} className="mr-2" />
                Speak to a Consultant
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-muted mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="text-lg font-display font-semibold text-slate-text/60">SaaS</span>
                <span className="text-lg font-display font-semibold text-slate-text/60">Fintech</span>
                <span className="text-lg font-display font-semibold text-slate-text/60">Insurtech</span>
                <span className="text-lg font-display font-semibold text-slate-text/60">B2B</span>
              </div>
            </div>
          </div>

          {/* Portrait Card */}
          <div
            ref={portraitRef}
            className="hidden lg:block lg:w-[32vw] lg:h-[55vh] rounded-card overflow-hidden shadow-card"
          >
            <img
              src="/images/hero_professional_portrait.jpg"
              alt="Professional portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
