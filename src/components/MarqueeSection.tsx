import React, { useRef, useState, useEffect } from 'react';

// Top Marquee: Banquet hall & wedding decor photos
const BANQUET_WEDDING_IMAGES = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80', // Grand wedding hall
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80', // Wedding floral decor
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80', // Banquet table setup
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80', // Romantic stage setup
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80', // Ballroom event setting
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80', // Flower entrance arch
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80', // Table centerpiece & dining
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80', // Event stage lighting
];

// Bottom Marquee: Rooms, bar area & food photos
const ROOMS_BAR_FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80', // Luxury hotel room
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', // Lounge & Bar area
  'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80', // Catering & gourmet spread
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', // Deluxe suite bedroom
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80', // Hotel cocktail bar
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // Fine dining food presentation
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', // Executive suite
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80', // Hotel restaurant
];

const row1Images = [...BANQUET_WEDDING_IMAGES, ...BANQUET_WEDDING_IMAGES, ...BANQUET_WEDDING_IMAGES];
const row2Images = [...ROOMS_BAR_FOOD_IMAGES, ...ROOMS_BAR_FOOD_IMAGES, ...ROOMS_BAR_FOOD_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const computedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(computedOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Transform = offset - 200;
  const row2Transform = -(offset - 200);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 w-max"
            style={{
              transform: `translateX(${row1Transform}px)`,
              willChange: 'transform',
            }}
          >
            {row1Images.map((src, index) => (
              <div
                key={`r1-${index}`}
                className="w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#1A1A1A]"
              >
                <img
                  src={src}
                  alt={`Hotel Grand Guardian Banquet & Wedding Decor ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-3 w-max"
            style={{
              transform: `translateX(${row2Transform}px)`,
              willChange: 'transform',
            }}
          >
            {row2Images.map((src, index) => (
              <div
                key={`r2-${index}`}
                className="w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#1A1A1A]"
              >
                <img
                  src={src}
                  alt={`Hotel Grand Guardian Rooms & Dining ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
