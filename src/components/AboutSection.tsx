import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import aboutBgImg from '../assets/images/about_us_hotel_bg_1786767720146.jpg';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const whoWeAreText =
    "Hotel Grand Guardian is the precious jewel in the city, specialized in weddings, conferences, and corporate events, offering a high level of service with a friendly smile. Its residential neighborhood makes it an ideal place for the MICE market and leisure travellers, with a feeling of home away from home.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center select-none bg-[#0C0C0C] overflow-hidden"
    >
      {/* Fixed Parallax Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed pointer-events-none"
        style={{ backgroundImage: `url('${aboutBgImg}')` }}
      />

      {/* Constant Dark Overlay for Contrast & Readability */}
      <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-[#0C0C0C]/60 via-black/40 to-[#0C0C0C]/60 pointer-events-none" />

      {/* Center Content Block */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-[12%] sm:py-[15%]">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-8 sm:mb-10">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 120px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        {/* Scroll Animated Paragraph */}
        <div className="w-full mb-12 sm:mb-16 text-center bg-black/50 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
          <AnimatedText
            text={whoWeAreText}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Contact Us Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onContactClick} label="Contact Us" />
        </FadeIn>
      </div>
    </section>
  );
};


