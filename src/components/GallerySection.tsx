import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { X, ChevronLeft, ChevronRight, Play, Maximize2, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onViewFullGallery?: () => void;
}

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: 'hall' | 'weddings' | 'rooms' | 'bar' | 'events';
  categoryLabel: string;
  src: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    title: 'Grand Banquet Hall & Stage Setup',
    category: 'hall',
    categoryLabel: 'Grand Hall',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g2',
    type: 'image',
    title: 'Hotel Grand Guardian Venue Entrance',
    category: 'events',
    categoryLabel: 'Venue',
    src: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g3',
    type: 'image',
    title: 'Elegant Wedding Reception Setup',
    category: 'weddings',
    categoryLabel: 'Weddings',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g4',
    type: 'image',
    title: 'Premium Cocktail & Lounge Bar',
    category: 'bar',
    categoryLabel: 'Bar Lounge',
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g5',
    type: 'image',
    title: 'Luxury A/C Guest Suite',
    category: 'rooms',
    categoryLabel: 'Luxury Rooms',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g6',
    type: 'image',
    title: 'Corporate Conference & MICE Hall',
    category: 'events',
    categoryLabel: 'Conferences',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g7',
    type: 'image',
    title: 'Fine Dining & Banquet Table Decor',
    category: 'weddings',
    categoryLabel: 'Banquet Dining',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g8',
    type: 'image',
    title: 'Contemporary Bar Counter & Lounge',
    category: 'bar',
    categoryLabel: 'Bar Area',
    src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g9',
    type: 'image',
    title: 'Deluxe Guest Accommodation Suite',
    category: 'rooms',
    categoryLabel: 'Deluxe Suite',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g10',
    type: 'image',
    title: 'Outdoor Garden Lawn Event Setup',
    category: 'events',
    categoryLabel: 'Outdoor Lawn',
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g11',
    type: 'image',
    title: 'Grand Ballroom Crystal Chandelier',
    category: 'hall',
    categoryLabel: 'Grand Hall',
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g12',
    type: 'image',
    title: 'Floral Wedding Arch Arrangement',
    category: 'weddings',
    categoryLabel: 'Wedding Decor',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g13',
    type: 'image',
    title: 'Executive VIP Boardroom Space',
    category: 'events',
    categoryLabel: 'Boardroom',
    src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g14',
    type: 'image',
    title: 'Spacious Lounge Bar Seating',
    category: 'bar',
    categoryLabel: 'Lounge Bar',
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g15',
    type: 'image',
    title: 'Premium Non-A/C Guest Room',
    category: 'rooms',
    categoryLabel: 'Guest Rooms',
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g16',
    type: 'image',
    title: 'Warm Banquet Dining Illumination',
    category: 'hall',
    categoryLabel: 'Grand Hall',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g17',
    type: 'image',
    title: 'Fairy Light Lawn Reception Ambient',
    category: 'weddings',
    categoryLabel: 'Lawn Party',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g18',
    type: 'image',
    title: 'Traditional Wedding Poruwa Stage',
    category: 'weddings',
    categoryLabel: 'Poruwa Stage',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g19',
    type: 'image',
    title: 'En-Suite Bathroom & Hygiene Amenities',
    category: 'rooms',
    categoryLabel: 'Room Amenities',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g20',
    type: 'image',
    title: 'Craft Cocktails & Beverage Bar',
    category: 'bar',
    categoryLabel: 'Bar Area',
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g21',
    type: 'image',
    title: 'Hotel Entrance & Lobby Lounge',
    category: 'events',
    categoryLabel: 'Lobby',
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g22',
    type: 'image',
    title: 'Gala Evening Table Setting & Glassware',
    category: 'hall',
    categoryLabel: 'Gala Dinner',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g23',
    type: 'image',
    title: 'Interactive Corporate Seminar Space',
    category: 'events',
    categoryLabel: 'Seminars',
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g24',
    type: 'image',
    title: 'Grand Ballroom & Event Lighting',
    category: 'events',
    categoryLabel: 'Lighting',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g25',
    type: 'image',
    title: 'Bridal Dressing Suite Arrangement',
    category: 'rooms',
    categoryLabel: 'Bridal Suite',
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
  },
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewFullGallery }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Updated new background image for Moments & Venue section
  const bgImageUrl = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80';

  const imagesForLightbox = GALLERY_ITEMS;

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % imagesForLightbox.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + imagesForLightbox.length) % imagesForLightbox.length);
    }
  };

  const currentLightboxImage = lightboxIndex !== null ? imagesForLightbox[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="text-[#D7E2EA] bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 sm:py-32 select-none relative z-10 overflow-hidden"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Constant dark overlay for clear background image visibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" />

      <div className="max-w-[1850px] w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header (Tag removed) */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn delay={0.1} y={30}>
            <h2 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mb-6">
              Moments & Venue
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Explore our grand ballroom, elegant dining areas, luxury suites, and memorable event setups.
            </p>
          </FadeIn>
        </div>

        {/* 5x5 Seamless Wall Grid Layout (25 items, zero gap, large format) */}
        <FadeIn delay={0.25} y={30}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/90">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative group w-full aspect-square overflow-hidden bg-black/40 cursor-pointer transition-all duration-300 border border-white/5 hover:border-white/40 hover:z-10"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover overlay with badge and icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4">
                  <span className="self-start px-2.5 py-1 rounded-full bg-[#128C7E]/80 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
                    {item.categoryLabel}
                  </span>

                  <div className="flex items-end justify-between gap-2">
                    <p className="text-xs sm:text-sm font-medium text-white line-clamp-2 leading-tight">
                      {item.title}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white flex-shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* YouTube Channel Callout Banner */}
        <FadeIn delay={0.3} y={30} className="mt-16">
          <div className="bg-[#121316] border border-[#3A3D45]/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 flex-shrink-0">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#D7E2EA]">
                  Watch More Event Videos On YouTube
                </h4>
                <p className="text-sm text-[#8A99A8] font-light mt-1">
                  Subscribe to our official channel for wedding walkthroughs and event highlights.
                </p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/channel/UCvh1Vvj2hGcj7kGDZvUoogA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg flex-shrink-0 cursor-pointer"
            >
              <span>Visit YouTube Channel</span>
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* View Full Gallery CTA Button */}
        <FadeIn delay={0.4} y={30} className="mt-14 text-center flex flex-col items-center">
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              if (onViewFullGallery) {
                onViewFullGallery();
              } else {
                window.history.pushState({}, '', '/gallery');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#128C7E] hover:bg-[#0f7569] text-white font-medium text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          >
            <span>Explore Full Photo & Video Gallery</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="px-3 py-1 rounded-full bg-[#128C7E]/30 text-[#128C7E] font-mono text-xs uppercase tracking-widest border border-[#128C7E]/40 inline-block mb-2">
                {currentLightboxImage.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentLightboxImage.title}
              </h3>
              <p className="text-xs text-white/50 font-mono mt-1">
                Image {lightboxIndex! + 1} of {imagesForLightbox.length}
              </p>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
