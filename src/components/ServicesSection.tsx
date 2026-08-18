import React from 'react';
import { FadeIn } from './FadeIn';
import { Wifi, Droplet, Car, Zap, Shirt, Sparkles, Utensils, Users, Camera, Bed } from 'lucide-react';
import facilitiesBgImg from '../assets/images/facilities_hotel_bg_1786772004550.jpg';

interface Facility {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const FACILITIES: Facility[] = [
  {
    id: '01',
    number: '01',
    title: 'Full A/C Banquet Hall',
    description:
      'Carpeted, LED lighting system, multimedia, projector & screen, podium, PA system & FM mics.',
    icon: Sparkles,
  },
  {
    id: '02',
    number: '02',
    title: 'Restaurant & Bar Area',
    description:
      'Spacious dining and lounge area featuring live BBQ and interactive action corners.',
    icon: Utensils,
  },
  {
    id: '03',
    number: '03',
    title: 'Conference Room',
    description:
      'State-of-the-art corporate gathering spaces tailored for seminars, meetings, and MICE events.',
    icon: Users,
  },
  {
    id: '04',
    number: '04',
    title: 'Beauty Salon & Photo Shooting Area',
    description:
      'On-site bridal dressing rooms, beauty salon services, and curated scenic photo shooting zones.',
    icon: Camera,
  },
  {
    id: '05',
    number: '05',
    title: 'A/C / Non-A/C Rooms',
    description:
      'Luxury residential rooms with modern amenities for leisure travelers and event guests.',
    icon: Bed,
  },
];

const FOOTNOTE_FEATURES = [
  { icon: Wifi, label: 'Complimentary Wi-Fi' },
  { icon: Droplet, label: 'Pure Water' },
  { icon: Car, label: 'Parking for 200 Vehicles' },
  { icon: Zap, label: '24-Hour Standby Generator' },
  { icon: Shirt, label: 'Laundry Facilities' },
];

export const ServicesSection: React.FC = () => {
  const bgImageUrl = facilitiesBgImg;

  return (
    <section
      id="facilities"
      className="relative w-full text-white bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden z-10 -mt-10 sm:-mt-12 md:-mt-14"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* Constant dark overlay for clear background image visibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" />

      <div id="events" className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="font-black uppercase text-white leading-none tracking-tight text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            Facilities
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Facility Items */}
        <div className="flex flex-col gap-4 mb-16 sm:mb-20">
          {FACILITIES.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <FadeIn key={facility.id} delay={index * 0.1} y={30}>
                <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border border-white/15 gap-4 sm:gap-10 transition-all duration-300 hover:border-[#128C7E]/60 hover:bg-black/60 bg-black/40 backdrop-blur-md px-6 sm:px-8 rounded-2xl shadow-2xl">
                  {/* Number & Icon on left */}
                  <div className="flex items-center gap-4 min-w-[100px] sm:min-w-[160px] md:min-w-[200px]">
                    <div
                      className="font-black text-[#128C7E] leading-none drop-shadow-md"
                      style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
                    >
                      {facility.number}
                    </div>
                  </div>

                  {/* Name + Description stacked vertically on right */}
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#128C7E] flex-shrink-0" />
                      <h3
                        className="font-semibold uppercase text-white leading-tight tracking-wide"
                        style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                      >
                        {facility.title}
                      </h3>
                    </div>
                    <p
                      className="font-light text-white/85 leading-relaxed max-w-2xl"
                      style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}
                    >
                      {facility.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Footnote Amenities Strip */}
        <FadeIn delay={0.3} y={20}>
          <div className="p-6 sm:p-8 bg-black/50 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-white/90 font-medium">
            {FOOTNOTE_FEATURES.map((item, idx) => {
              const FeatureIcon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <FeatureIcon className="w-4 h-4 text-[#128C7E]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

