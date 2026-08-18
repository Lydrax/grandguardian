import React from 'react';
import { ArrowUp, Sparkles, Phone, Mail, MapPin, ExternalLink, Youtube, Facebook } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onContactClick: () => void;
  onNavClick: (sectionId: string) => void;
  onCareersClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick, onNavClick, onCareersClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#08080A] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-12 px-6 md:px-10 select-none relative z-20 overflow-hidden">
      {/* Background Pattern, Image & Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]">
        {/* Luxury Hotel Exterior Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 filter contrast-125 saturate-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`
          }}
        />

        {/* Elegant SVG Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="footer-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(215, 226, 234, 0.15)" strokeWidth="0.8" />
              <circle cx="48" cy="48" r="1.5" fill="rgba(18, 140, 126, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid-pattern)" />
        </svg>

        {/* Radial Emerald Glow at Top Center */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#128C7E]/25 via-transparent to-transparent pointer-events-none blur-2xl" />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/90 via-[#08080A]/95 to-[#08080A]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Navigation & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1: Quick Nav Links Matching Navbar */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Quick Links</span>
            <button onClick={() => onNavClick('home')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Home</button>
            <button onClick={() => onNavClick('about')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">About</button>
            <button onClick={() => onNavClick('facilities')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Facilities</button>
            <button onClick={() => onNavClick('events')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Events</button>
            <button onClick={() => onNavClick('rooms')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Rooms</button>
            <button onClick={() => onNavClick('gallery')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Gallery</button>
            <button onClick={() => onNavClick('careers')} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Careers</button>
            <button onClick={onContactClick} className="text-left text-sm font-medium hover:text-[#128C7E] transition-colors cursor-pointer uppercase">Contact</button>
          </div>

          {/* Col 2: Contact Details */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Contact Info</span>
            
            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-[#D7E2EA]/40 font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#128C7E]" /> Address
              </span>
              <p className="text-sm text-[#D7E2EA]/80 font-light leading-snug">
                18, Bandarawatta, Hidellana, Rathnapura, Sri Lanka
              </p>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xs text-[#D7E2EA]/40 font-mono flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#128C7E]" /> Hotline / Phone
              </span>
              <a href="tel:0453467505" className="text-sm text-[#D7E2EA]/80 hover:text-[#128C7E] transition-colors">
                045 346 7505
              </a>
              <a href="tel:0453467510" className="text-sm text-[#D7E2EA]/80 hover:text-[#128C7E] transition-colors">
                045 346 7510
              </a>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xs text-[#D7E2EA]/40 font-mono flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#128C7E]" /> Email
              </span>
              <a href="mailto:info@grandguardian.lk" className="text-sm text-[#D7E2EA]/80 hover:text-[#128C7E] transition-colors break-all">
                info@grandguardian.lk
              </a>
            </div>
          </div>

          {/* Col 3: Key Facilities */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Key Facilities</span>
            <span className="text-sm text-[#D7E2EA]/70">01. Full A/C Banquet Hall</span>
            <span className="text-sm text-[#D7E2EA]/70">02. Restaurant & Bar Area</span>
            <span className="text-sm text-[#D7E2EA]/70">03. Conference Room</span>
            <span className="text-sm text-[#D7E2EA]/70">04. Beauty Salon & Photo Area</span>
            <span className="text-sm text-[#D7E2EA]/70">05. A/C & Non-A/C Rooms</span>
          </div>

          {/* Col 4: Social & Connectivity */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono">Social & Media</span>
            
            <a
              href="https://web.facebook.com/p/Hotel-Grand-Guardian-61554049222808"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-[#D7E2EA]/80 hover:text-[#128C7E] transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#128C7E]/50 group-hover:bg-[#128C7E]/10">
                <Facebook className="w-3.5 h-3.5 text-[#128C7E]" />
              </div>
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 text-[#D7E2EA]/40 group-hover:text-[#128C7E]" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCvh1Vvj2hGcj7kGDZvUoogA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-[#D7E2EA]/80 hover:text-[#128C7E] transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#128C7E]/50 group-hover:bg-[#128C7E]/10">
                <Youtube className="w-3.5 h-3.5 text-[#128C7E]" />
              </div>
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 text-[#D7E2EA]/40 group-hover:text-[#128C7E]" />
            </a>

            <div className="mt-4 pt-4 border-t border-[#D7E2EA]/10 inline-flex items-center gap-2 text-xs text-[#128C7E] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-pulse" />
              24/7 Desk Available
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#D7E2EA]/10 text-xs text-[#D7E2EA]/50">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} HOTEL GRAND GUARDIAN. All rights reserved.</span>
            <a
              href="/careers"
              onClick={(e) => {
                e.preventDefault();
                if (onCareersClick) {
                  onCareersClick();
                } else {
                  window.history.pushState({}, '', '/careers');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="text-[#D7E2EA]/60 hover:text-[#128C7E] transition-colors cursor-pointer uppercase font-mono text-[11px]"
            >
              Careers
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-[#D7E2EA] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
