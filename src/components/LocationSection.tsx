import React from 'react';
import { FadeIn } from './FadeIn';
import { MapPin, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import locationBgImg from '../assets/images/location_access_bg_1786769374408.jpg';

const MAPS_URL =
  'https://www.google.com/maps/place/Hotel+Grand+Guardian+-+Ratnapura/@6.7430059,80.3767765,1122m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ae3bc1ce53227ff:0xe79d72258a3c1414!8m2!3d6.7430006!4d80.3793568!16s%2Fg%2F11c6t_4fj0?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D';

// Embed URL using coordinate mapping for Hotel Grand Guardian - Ratnapura (6.7430006, 80.3793568)
const EMBED_MAP_URL =
  'https://maps.google.com/maps?q=6.7430006,80.3793568&hl=en&z=15&output=embed';

export const LocationSection: React.FC = () => {
  const bgImageUrl = locationBgImg;

  return (
    <section
      id="location"
      className="relative text-[#D7E2EA] bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 sm:py-32 select-none overflow-hidden z-10"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Constant dark overlay for clear background image visibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="text-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Location & Directions
          </h2>
        </FadeIn>

        {/* Main Grid: Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address Card */}
            <FadeIn delay={0.2} y={30}>
              <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#128C7E]/60 transition-all duration-300 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#128C7E]/20 border border-[#128C7E]/40 flex items-center justify-center mb-4 text-[#128C7E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#128C7E] block mb-2 font-bold">
                  Address
                </span>
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                  18, Bandarawatta, Hidellana, Rathnapura, Sri Lanka
                </p>
              </div>
            </FadeIn>

            {/* Directions Card */}
            <FadeIn delay={0.3} y={30}>
              <div className="bg-black/50 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 hover:border-[#128C7E]/60 transition-all duration-300 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#128C7E]/20 border border-[#128C7E]/40 flex items-center justify-center mb-4 text-[#128C7E]">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#128C7E] block mb-2 font-bold">
                  Directions & Connectivity
                </span>
                <p className="text-base sm:text-lg font-light text-white/85 leading-relaxed mb-4">
                  10 minutes from Rathnapura town (8km), directly connected to the Ceylinco VIP Spot at Edandawala, Kuruwita, near the Ratnapura–Colombo main road.
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#128C7E]" />
                    <span>8 km / ~10 mins drive from Rathnapura town</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#128C7E]" />
                    <span>Adjacent to Ratnapura–Colombo Main Road</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* External Google Maps Button */}
            <FadeIn delay={0.4} y={30}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#128C7E] hover:bg-[#0f776a] text-white font-medium text-base uppercase tracking-wider transition-all duration-300 shadow-2xl cursor-pointer border border-[#128C7E]/50"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </FadeIn>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.3} y={30} className="h-full">
              <div className="w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md relative shadow-2xl group">
                <iframe
                  title="Hotel Grand Guardian Map Location"
                  src={EMBED_MAP_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Subtle top overlay badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-mono text-white pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-pulse" />
                  <span>Hotel Grand Guardian - Ratnapura</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
