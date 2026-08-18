import React, { useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Footer } from './Footer';
import { ArrowLeft, UserCheck, Briefcase, UtensilsCrossed, Mail, Send, Sparkles, MapPin, Clock } from 'lucide-react';

interface CareersPageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

interface JobOpening {
  id: string;
  number: string;
  title: string;
  department: string;
  type: string;
  description: string;
  icon: React.ElementType;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'receptionist',
    number: '01',
    title: 'Receptionist',
    department: 'Front Office',
    type: 'Full-time',
    description:
      'First point of contact for guests, handling check-ins, reservations, and enquiries with a professional, friendly manner.',
    icon: UserCheck,
  },
  {
    id: 'manager',
    number: '02',
    title: 'Manager',
    department: 'Operations',
    type: 'Full-time',
    description:
      'Oversee day-to-day hotel operations, staff coordination, and guest satisfaction across departments.',
    icon: Briefcase,
  },
  {
    id: 'chef',
    number: '03',
    title: 'Chef',
    department: 'Kitchen / F&B',
    type: 'Full-time',
    description:
      'Prepare menus and dishes for events, weddings, and daily restaurant service; experience with large-scale catering preferred.',
    icon: UtensilsCrossed,
  },
];

export const CareersPage: React.FC<CareersPageProps> = ({
  onBackToHome,
  onContactClick,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">

          <FadeIn delay={0.1} y={30}>
            <h1 className="hero-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-[#D7E2EA] mb-6">
              Join the Team at Hotel Grand Guardian
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="text-base sm:text-lg text-[#8A99A8] font-light max-w-2xl mx-auto leading-relaxed">
              Be part of Sabaragamuwa's leading hospitality and wedding venue, and help us deliver a worthwhile experience for every guest.
            </p>
          </FadeIn>
        </div>

        {/* Current Openings Title */}
        <FadeIn delay={0.25} y={20} className="mb-8">
          <div className="flex items-center justify-between border-b border-[#3A3D45]/50 pb-4">
            <h2 className="text-xs uppercase tracking-widest text-[#8A99A8] font-mono">
              Current Openings ({JOB_OPENINGS.length})
            </h2>
            <div className="flex items-center gap-2 text-xs font-mono text-[#128C7E]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Rathnapura, Sri Lanka</span>
            </div>
          </div>
        </FadeIn>

        {/* 3 Job Cards (Facilities style: sleek dark containers with numbers and teal accents) */}
        <div className="flex flex-col gap-6 mb-20">
          {JOB_OPENINGS.map((job, index) => {
            const Icon = job.icon;
            return (
              <FadeIn key={job.id} delay={index * 0.1} y={30}>
                <div className="group bg-[#121316] border border-[#3A3D45]/60 rounded-3xl p-6 sm:p-8 hover:border-[#128C7E]/60 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* Left: Number & Department Badge */}
                  <div className="flex items-center gap-6 min-w-[120px] sm:min-w-[160px]">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#128C7E]/80">
                      {job.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#128C7E]/10 border border-[#128C7E]/30 flex items-center justify-center text-[#128C7E]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Middle: Title, Badges, & Description */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA] group-hover:text-white transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#128C7E] uppercase tracking-wider bg-[#128C7E]/10 px-3 py-1 rounded-full border border-[#128C7E]/30">
                        {job.department}
                      </span>
                      <span className="text-[11px] font-mono text-[#8A99A8] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#128C7E]" />
                        {job.type}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#8A99A8] font-light leading-relaxed mt-1">
                      {job.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* How to Apply Section */}
        <FadeIn delay={0.3} y={30}>
          <div className="bg-[#121316] border border-[#128C7E]/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#128C7E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128C7E]/10 border border-[#128C7E]/30 text-xs font-mono uppercase tracking-widest text-[#128C7E] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#128C7E]" /> Application Instructions
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#D7E2EA] mb-3 uppercase">
                  How to Apply
                </h3>

                <p className="text-sm sm:text-base text-[#8A99A8] font-light leading-relaxed">
                  Email your CV to{' '}
                  <a
                    href="mailto:info@grandguardian.lk"
                    className="text-[#D7E2EA] font-medium underline underline-offset-4 hover:text-[#128C7E] transition-colors"
                  >
                    info@grandguardian.lk
                  </a>{' '}
                  with the role title in the subject line (e.g.{' '}
                  <span className="text-[#128C7E] font-mono">"Application — Chef"</span>).
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="mailto:info@grandguardian.lk?subject=Application%20—%20"
                  className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 rounded-full bg-[#128C7E] hover:bg-[#128C7E]/90 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#128C7E]/20 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Your CV</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>

      {/* Footer */}
      <Footer onContactClick={onContactClick} onNavClick={() => onBackToHome()} />
    </div>
  );
};
