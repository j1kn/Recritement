import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+44 (0) 20 7123 4567' },
  { icon: Mail, label: 'Email', value: 'hello@recruit28.co.uk' },
  { icon: MapPin, label: 'Location', value: 'London, UK' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item') || [],
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will reply within one business day.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-navy"
      style={{ zIndex: 80 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-micro text-coral block mb-3">Get In Touch</span>
          <h2 className="font-display font-bold text-h2 text-slate-text mb-4">
            Ready to hire better?
          </h2>
          <p className="text-body text-slate-muted max-w-2xl mx-auto">
            Let's discuss your hiring needs. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div ref={infoRef} className="card-glass rounded-card p-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="info-item flex items-center gap-3 py-3 first:pt-0 last:pb-0 border-b border-white/5 last:border-0"
                >
                  <div className="w-10 h-10 rounded-btn bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-muted">{item.label}</p>
                    <p className="text-sm text-slate-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            ref={formRef}
            className="lg:col-span-2 card-glass rounded-card p-6 lg:p-8"
          >
            <h3 className="font-display font-bold text-xl text-slate-text mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-muted mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-btn text-slate-text placeholder:text-slate-muted/50 focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-muted mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-btn text-slate-text placeholder:text-slate-muted/50 focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-muted mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-btn text-slate-text placeholder:text-slate-muted/50 focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-muted mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-btn text-slate-text placeholder:text-slate-muted/50 focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="+44..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-muted mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-btn text-slate-text placeholder:text-slate-muted/50 focus:outline-none focus:border-coral/50 transition-colors resize-none"
                  placeholder="Tell us about your hiring needs..."
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
