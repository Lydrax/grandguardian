import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, Video, Sparkles, Play } from 'lucide-react';
import { Footer } from './Footer';

interface FullGalleryPageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: 'halls' | 'weddings' | 'rooms' | 'bar' | 'events';
  categoryLabel: string;
  src: string;
}

const ALL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'fg1',
    type: 'image',
    title: 'Grand Banquet Hall & Stage Lighting',
    category: 'halls',
    categoryLabel: 'Halls',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg2',
    type: 'video',
    title: 'Hotel Grand Guardian - Video Showcase',
    category: 'events',
    categoryLabel: 'Videos & Events',
    src: 'https://www.youtube-nocookie.com/embed/videoseries?list=UUvh1Vvj2hGcj7kGDZvUoogA',
  },
  {
    id: 'fg3',
    type: 'image',
    title: 'Royal Wedding Poruwa & Floral Decor',
    category: 'weddings',
    categoryLabel: 'Weddings',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg4',
    type: 'image',
    title: 'Premium Cocktail & Lounge Bar',
    category: 'bar',
    categoryLabel: 'Bar Area',
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg5',
    type: 'image',
    title: 'Luxury A/C Master Guest Suite',
    category: 'rooms',
    categoryLabel: 'Rooms',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg6',
    type: 'image',
    title: 'Corporate Conference & MICE Setup',
    category: 'events',
    categoryLabel: 'Events',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg7',
    type: 'image',
    title: 'Outdoor Garden & Lawn Event Venue',
    category: 'events',
    categoryLabel: 'Events',
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg8',
    type: 'image',
    title: 'Fine Dining Table Setting & Crystal Glassware',
    category: 'weddings',
    categoryLabel: 'Weddings',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg9',
    type: 'image',
    title: 'Contemporary Bar Counter & Spirits Display',
    category: 'bar',
    categoryLabel: 'Bar Area',
    src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg10',
    type: 'image',
    title: 'Deluxe Guest Accommodation Room',
    category: 'rooms',
    categoryLabel: 'Rooms',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg11',
    type: 'image',
    title: 'Evening Illumination & Garden Ambience',
    category: 'events',
    categoryLabel: 'Events',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'fg12',
    type: 'image',
    title: 'Banquet Hall Entrance & Foyer',
    category: 'halls',
    categoryLabel: 'Halls',
    src: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1600&q=80',
  },
];

type CategoryFilter = 'all' | 'weddings' | 'halls' | 'rooms' | 'bar' | 'events';

export const FullGalleryPage: React.FC<FullGalleryPageProps> = ({
  onBackToHome,
  onContactClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = ALL_GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const imagesForLightbox = filteredItems.filter((i) => i.type === 'image');

  const openLightbox = (item: GalleryItem) => {
    if (item.type === 'image') {
      const idx = imagesForLightbox.findIndex((img) => img.id === item.id);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
    }
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
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full selection:bg-[#128C7E] selection:text-white">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#3A3D45]/40 py-4 px-6 md:px-10 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-[#128C7E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="font-black uppercase tracking-wider text-base sm:text-lg text-[#D7E2EA]">
          Hotel Grand Guardian
        </span>

        <ContactButton onClick={onContactClick} label="Enquire Now" className="!px-6 !py-2 !text-xs" />
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16 sm:py-24">
        {/* Title & Tagline */}
        <div className="text-center mb-16">

          <FadeIn delay={0.1} y={30}>
            <h1 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-[#D7E2EA] mb-6">
              Gallery
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="text-base sm:text-lg text-[#8A99A8] font-light max-w-3xl mx-auto">
              Explore Hotel Grand Guardian — our halls, rooms, events, and more
            </p>
          </FadeIn>
        </div>

        {/* Filter Categories */}
        <FadeIn delay={0.25} y={20}>
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            {[
              { id: 'all', label: 'All' },
              { id: 'weddings', label: 'Weddings' },
              { id: 'halls', label: 'Halls' },
              { id: 'rooms', label: 'Rooms' },
              { id: 'bar', label: 'Bar Area' },
              { id: 'events', label: 'Events' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#128C7E] text-white font-medium shadow-lg shadow-[#128C7E]/20'
                      : 'bg-[#121316] text-[#8A99A8] border border-[#3A3D45]/50 hover:text-[#D7E2EA] hover:border-[#128C7E]/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={0.05 * (index % 6)} y={30}>
              <div className="bg-[#121316] border border-[#3A3D45]/60 rounded-3xl overflow-hidden group hover:border-[#128C7E]/60 transition-all duration-300 shadow-xl flex flex-col">
                {item.type === 'image' ? (
                  <div
                    onClick={() => openLightbox(item)}
                    className="relative overflow-hidden cursor-pointer group/img"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-white bg-[#128C7E] px-3 py-1.5 rounded-full shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Expand High-Res Photo</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-64 sm:h-72 bg-black overflow-hidden">
                    <iframe
                      src={item.src}
                      title={item.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow border-t border-[#3A3D45]/30 bg-[#121316]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono text-[#128C7E] uppercase tracking-widest bg-[#128C7E]/10 px-2.5 py-1 rounded-full border border-[#128C7E]/20">
                        {item.categoryLabel}
                      </span>
                      {item.type === 'video' ? (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-[#8A99A8]">
                          <Video className="w-3.5 h-3.5 text-[#128C7E]" /> Video
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-[#8A99A8]">
                          <ImageIcon className="w-3.5 h-3.5 text-[#128C7E]" /> Photo
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#D7E2EA] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* YouTube Channel Callout Banner */}
        <FadeIn delay={0.3} y={30} className="mt-16">
          <div className="bg-[#121316] border border-[#3A3D45]/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 flex-shrink-0">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#D7E2EA]">
                  Official Hotel Grand Guardian YouTube Channel
                </h4>
                <p className="text-sm text-[#8A99A8] font-light mt-1">
                  Explore full video walkthroughs of wedding celebrations, corporate galas, and banquet tours.
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
      </main>

      {/* Lightbox Modal */}
      {currentLightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in select-none">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-[#128C7E] uppercase tracking-widest bg-[#128C7E]/20 px-3 py-1 rounded-full border border-[#128C7E]/40 mb-2 inline-block">
                {currentLightboxImage.categoryLabel}
              </span>
              <h4 className="text-lg sm:text-xl font-medium text-white mt-1">
                {currentLightboxImage.title}
              </h4>
              <p className="text-xs font-mono text-[#8A99A8] mt-1">
                Image {lightboxIndex! + 1} of {imagesForLightbox.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onContactClick={onContactClick} onNavClick={() => onBackToHome()} />
    </div>
  );
};
