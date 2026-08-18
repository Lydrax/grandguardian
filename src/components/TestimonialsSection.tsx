import React from 'react';
import { FadeIn } from './FadeIn';
import { Star, Quote } from 'lucide-react';
import testimonialsBgImg from '../assets/images/testimonials_bg_1786770307072.jpg';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Amazing venue for our wedding, the hall and service were perfect.',
    author: '[Guest Name]',
    role: 'Wedding Ceremony Host',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Great location and very professional staff.',
    author: '[Guest Name]',
    role: 'Corporate Conference Delegate',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'The banquet hall exceeded our expectations for our conference.',
    author: '[Guest Name]',
    role: 'Anniversary Banquet Guest',
    rating: 5,
  },
  {
    id: 't4',
    quote: 'Great location and very professional staff.',
    author: '[Guest Name]',
    role: 'Leisure Traveller & Guest',
    rating: 5,
  },
  {
    id: 't5',
    quote: 'Amazing venue for our wedding, the hall and service were perfect.',
    author: '[Guest Name]',
    role: 'Corporate Gala Attendee',
    rating: 5,
  },
  {
    id: 't6',
    quote: 'The banquet hall exceeded our expectations for our conference.',
    author: '[Guest Name]',
    role: 'MICE Event Organizer',
    rating: 5,
  },
  {
    id: 't7',
    quote: 'Great location and very professional staff.',
    author: '[Guest Name]',
    role: 'Birthday Celebration Host',
    rating: 5,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export const TestimonialsSection: React.FC = () => {
  const bgImageUrl = testimonialsBgImg;

  return (
    <section
      id="testimonials"
      className="relative text-white bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 sm:py-32 overflow-hidden w-full select-none z-10"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Constant dark overlay for clear background image visibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" />

      {/* Inline styles for automatic continuous infinite marquee */}
      <style>{`
        @keyframes autoMarqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: autoMarqueeLeft 45s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 mb-12 sm:mb-16 text-center">
        {/* Big Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Testimonials
          </h2>
        </FadeIn>
      </div>

      {/* Single Automatic Marquee Row */}
      <div className="relative z-10 marquee-container w-full">
        <div className="overflow-hidden w-full py-4">
          <div className="animate-marquee-left flex gap-8">
            {marqueeItems.map((item, index) => (
              <div
                key={`testimonial-${index}`}
                className="w-[360px] sm:w-[480px] md:w-[540px] bg-black/60 backdrop-blur-md border border-white/20 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between flex-shrink-0 hover:border-[#128C7E] hover:bg-black/75 transition-all duration-300 group cursor-default shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 text-[#128C7E]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-white/30 group-hover:text-[#128C7E] transition-colors" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed mb-8 drop-shadow-sm">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 flex flex-col">
                  <span className="font-bold text-base sm:text-lg text-white">
                    — {item.author}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#128C7E] font-medium uppercase tracking-wider mt-1">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

