import { Mail, MapPin, Linkedin, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative py-12 lg:py-16 bg-navy border-t border-white/10"
      style={{ zIndex: 90 }}
    >
      <div className="w-full px-6 lg:px-[6vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="font-display font-bold text-2xl text-slate-text tracking-tight inline-block mb-4"
            >
              Recruit<span className="text-coral">28</span>
            </a>
            <p className="text-sm text-slate-muted mb-6">
              Sales and customer recruitment—done right. We place the people who move the needle.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-muted hover:text-coral hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-muted hover:text-coral hover:bg-white/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-text mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              <button
                onClick={() => scrollToSection('#employers')}
                className="block text-sm text-slate-muted hover:text-slate-text transition-colors duration-300"
              >
                For Employers
              </button>
              <button
                onClick={() => scrollToSection('#candidates')}
                className="block text-sm text-slate-muted hover:text-slate-text transition-colors duration-300"
              >
                For Candidates
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="block text-sm text-slate-muted hover:text-slate-text transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-slate-text mb-4">
              Services
            </h4>
            <nav className="space-y-2.5">
              <span className="block text-sm text-slate-muted">Sales Recruitment</span>
              <span className="block text-sm text-slate-muted">Customer Success</span>
              <span className="block text-sm text-slate-muted">Executive Search</span>

            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-slate-text mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+442071234567"
                className="flex items-center gap-2 text-sm text-slate-muted hover:text-slate-text transition-colors duration-300"
              >
                <Phone size={14} className="text-coral" />
                +44 (0) 20 7123 4567
              </a>
              <a
                href="mailto:hello@recruit28.co.uk"
                className="flex items-center gap-2 text-sm text-slate-muted hover:text-slate-text transition-colors duration-300"
              >
                <Mail size={14} className="text-coral" />
                hello@recruit28.co.uk
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-muted">
                <MapPin size={14} className="text-coral" />
                London, UK
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-muted">
            © {currentYear} Recruit 28 Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-muted hover:text-slate-text transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-muted hover:text-slate-text transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-slate-muted hover:text-slate-text transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
