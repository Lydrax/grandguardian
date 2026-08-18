import React from 'react';
import { FadeIn } from './FadeIn';
import { Wind, Sparkles, Utensils, Shirt, CheckCircle2 } from 'lucide-react';

interface RoomType {
  id: string;
  title: string;
  typeBadge: string;
  caption: string;
  image: string;
  features: string[];
}

const ROOM_TYPES: RoomType[] = [
  {
    id: 'ac-room',
    title: 'A/C Room',
    typeBadge: 'A/C Room',
    caption: 'Air-conditioned room with bed linen and cutlery provided, and daily cleaning service.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    features: ['Air Conditioning', 'Bed Linen & Cutlery', 'Daily Cleaning'],
  },
  {
    id: 'non-ac-room',
    title: 'Non-A/C Room',
    typeBadge: 'Non-A/C Room',
    caption: 'Comfortable room with bed linen and cutlery provided, and daily cleaning service.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    features: ['Bed Linen & Cutlery', 'Daily Cleaning', 'Natural Ventilation'],
  },
];

const HIGHLIGHTS = [
  {
    icon: Wind,
    title: 'A/C & Non-A/C Options',
    desc: 'Choose climate-controlled cooling or breezy natural ventilation based on your preference.',
  },
  {
    icon: Utensils,
    title: 'Bed Linen & Cutlery',
    desc: 'Every room is fully furnished with clean bed linen, towels, and dining cutlery provided.',
  },
  {
    icon: Sparkles,
    title: 'Daily Cleaning Service',
    desc: 'Professional housekeeping keeps your living space spotless and refreshed every single day.',
  },
  {
    icon: Shirt,
    title: 'Utility Room & Laundry',
    desc: 'Full access to a dedicated utility room equipped with washing machine and laundry facilities.',
  },
];

export const AccommodationSection: React.FC = () => {
  const bgImageUrl =
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80';

  return (
    <section
      id="accommodation"
      className="relative w-full text-white bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 py-24 sm:py-32 md:py-40 select-none overflow-hidden"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Constant dark overlay for clear background image visibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-8">
          <h2
            className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          >
            Rooms & Stay
          </h2>
        </FadeIn>

        {/* Main Content Statement */}
        <FadeIn delay={0.2} y={30} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed">
              Hotel Grand Guardian offers both <span className="text-white font-semibold">A/C and Non-A/C rooms</span>.
              Each room comes with <span className="text-white font-semibold">bed linen and cutlery provided</span>,
              <span className="text-white font-semibold"> daily cleaning service</span>, and access to a
              <span className="text-white font-semibold"> utility room with washing machine and laundry facilities</span>.
            </p>
          </div>
        </FadeIn>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={idx} delay={0.25 + idx * 0.1} y={30}>
                <div className="h-full bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[#128C7E]/60 hover:bg-black/60 transition-all duration-300 shadow-2xl">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#128C7E]/20 border border-[#128C7E]/40 flex items-center justify-center mb-4 text-[#128C7E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-white mb-2 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light text-white/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Room Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ROOM_TYPES.map((room, index) => (
            <FadeIn key={room.id} delay={0.3 + index * 0.12} y={30}>
              <div className="group bg-black/50 backdrop-blur-md border border-white/15 rounded-3xl overflow-hidden hover:border-[#128C7E] transition-all duration-300 shadow-2xl flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge overlay */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full shadow-md">
                    <span className="text-[#128C7E] font-mono text-xs font-semibold uppercase tracking-wider">
                      {room.typeBadge}
                    </span>
                  </div>
                </div>

                {/* Text & Features Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                      {room.title}
                    </h3>
                    <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed mb-4">
                      {room.caption}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-white/85">
                    {room.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#128C7E]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
