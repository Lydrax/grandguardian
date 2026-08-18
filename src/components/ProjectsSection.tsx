import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import signatureEventsBgImg from '../assets/images/signature_events_bg_1786770293402.jpg';

export interface SignatureEvent {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const SIGNATURE_EVENTS: SignatureEvent[] = [
  {
    id: '01',
    number: '01',
    name: 'Weddings',
    category: 'Full Wedding Hosting',
    description:
      'Full wedding hosting with opulent banquet hall, custom floral decor, gourmet multi-course catering, and grand ceremonial stage.',
    col1Img1:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    col2Img:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '02',
    number: '02',
    name: 'Conferences',
    category: 'Corporate & MICE',
    description:
      'Corporate and MICE-ready conference facilities equipped with LED lighting, multimedia projectors, crisp PA system & FM mics.',
    col1Img1:
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    col2Img:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '03',
    number: '03',
    name: 'Birthday Parties',
    category: 'Celebrations & Galas',
    description:
      'Memorable birthday galas featuring festive lighting, custom cake setups, live action food corners, and lively music arrangements.',
    col1Img1:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    col2Img:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    number: '04',
    name: 'Anniversaries',
    category: 'Jubilees & Receptions',
    description:
      'Elegantly crafted anniversary banquets with romantic table settings, ambient chandelier lighting, and bespoke dining menus.',
    col1Img1:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    col2Img:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '05',
    number: '05',
    name: 'Other Events',
    category: 'Social & Special Gatherings',
    description:
      'Versatile venue hosting for batch reunions, corporate dinners, cocktail galas, and special social occasions in Sabaragamuwa.',
    col1Img1:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    col2Img:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
];

interface EventCardProps {
  eventItem: SignatureEvent;
  index: number;
  totalCards: number;
}

const EventCard: React.FC<EventCardProps> = ({
  eventItem,
  index,
  totalCards,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - index) * 0.025]
  );

  return (
    <div
      ref={containerRef}
      className="sticky w-full mb-16 sm:mb-24 md:mb-32"
      style={{
        top: `calc(3.5rem + ${index * 32}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border border-white/25 bg-black/92 backdrop-blur-2xl p-6 sm:p-8 md:p-11 lg:p-12 flex flex-col gap-6 sm:gap-8 md:gap-10 shadow-2xl overflow-hidden relative transition-colors duration-300 hover:border-[#128C7E]/50 hover:bg-black/95"
      >
        {/* Top Row Header */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-[#D7E2EA]/20 pb-5 sm:pb-7">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 90px)' }}
            >
              {eventItem.number}
            </span>

            {/* Event Name */}
            <h3 className="font-semibold uppercase text-[#D7E2EA] tracking-wide text-2xl sm:text-3xl md:text-4xl">
              {eventItem.name}
            </h3>
          </div>

          {/* Full-width description paragraph */}
          <p className="w-full text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed">
            {eventItem.description}
          </p>
        </div>

        {/* Bottom Row Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch">
          {/* Left Column (40% width on md) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-5 sm:gap-7">
            {/* Top image */}
            <div
              className="w-full overflow-hidden rounded-[26px] sm:rounded-[34px] bg-black/40 group border border-white/15 shadow-inner"
              style={{ height: 'clamp(160px, 18vw, 260px)' }}
            >
              <img
                src={eventItem.col1Img1}
                alt={`${eventItem.name} detail 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom image */}
            <div
              className="w-full overflow-hidden rounded-[26px] sm:rounded-[34px] bg-black/40 group border border-white/15 shadow-inner"
              style={{ height: 'clamp(180px, 22vw, 340px)' }}
            >
              <img
                src={eventItem.col1Img2}
                alt={`${eventItem.name} detail 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width on md) - 1 main tall image */}
          <div className="md:col-span-7 w-full h-[300px] sm:h-[420px] md:h-auto md:min-h-[460px] lg:min-h-[540px] overflow-hidden rounded-[26px] sm:rounded-[34px] md:rounded-[44px] bg-black/40 group border border-white/15 shadow-inner">
            <img
              src={eventItem.col2Img}
              alt={`${eventItem.name} main view`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onProjectSelect?: (project: any) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const bgImageUrl = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80';

  return (
    <section
      id="projects"
      className="text-[#D7E2EA] bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-6 md:px-10 lg:px-14 pt-20 sm:pt-24 md:pt-32 pb-48 sm:pb-64 md:pb-80 w-full select-none"
    >
      {/* Fixed Parallax Background Image Container with overflow-hidden for rounded top clip */}
      <div className="absolute inset-0 pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />
        {/* Constant dark overlay for clear background image visibility */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div id="gallery" className="max-w-[1400px] mx-auto relative z-10">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
          >
            Signature Events
          </h2>
        </FadeIn>

        {/* 5 Sticky Stacking Cards */}
        <div className="relative w-full">
          {SIGNATURE_EVENTS.map((eventItem, index) => (
            <EventCard
              key={eventItem.id}
              eventItem={eventItem}
              index={index}
              totalCards={SIGNATURE_EVENTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
