import React from 'react';
import { FadeIn } from './FadeIn';
import heroBgImg from '../assets/images/grand_guardian_hero_1786719539689.jpg';

interface HeroSectionProps {
  onContactClick: () => void;
  onNavClick: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onNavClick,
}) => {
  return (
    <section className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Background Image Container with Full Screen Fit */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url('${heroBgImg}')` }}
      />

      {/* Constant Dark Overlay for Contrast & Readability */}
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" />
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 pt-6 md:pt-8 gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onNavClick('home')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => onNavClick('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            About
          </button>
          <button
            onClick={() => onNavClick('facilities')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Facilities
          </button>
          <button
            onClick={() => onNavClick('events')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Events
          </button>
          <button
            onClick={() => onNavClick('rooms')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Rooms
          </button>
          <button
            onClick={() => onNavClick('gallery')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Gallery
          </button>
          <button
            onClick={() => onNavClick('careers')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Careers
          </button>
          <button
            onClick={() => onNavClick('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.2rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading & Subheadline */}
      <div className="w-full overflow-hidden z-10 my-auto py-8 text-center px-4">
        <FadeIn delay={0.15} y={40} className="w-full flex flex-col items-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[7vw] sm:text-[8vw] md:text-[7.5vw] lg:text-[6.5vw] max-w-6xl mx-auto">
            Hotel Grand Guardian
          </h1>
          <p className="text-[#BBCCD7] font-light uppercase tracking-widest text-sm sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mt-4 sm:mt-6 opacity-90 leading-snug">
            King of Hospitality Management & Wedding Supplier in Sabaragamuwa
          </p>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full z-20 flex justify-end items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        {/* Right WhatsApp CTA Button */}
        <FadeIn delay={0.5} y={20}>
          <a
            href="https://wa.me/94728989899?text=Hello%20Hotel%20Grand%20Guardian,%20I%20would%20like%20to%20inquire%20about%20reservations%20and%20events."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#1E2024] hover:bg-[#25D366] hover:text-white text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm border border-[#3A3D45] transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
          >
            contact via whatsapp!
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
