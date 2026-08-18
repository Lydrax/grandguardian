import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AccommodationSection } from './components/AccommodationSection';
import { GallerySection } from './components/GallerySection';
import { FullGalleryPage } from './components/FullGalleryPage';
import { CareersPage } from './components/CareersPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'careers') {
      navigateTo('/careers');
      return;
    }

    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const idMap: Record<string, string> = {
          facilities: 'services',
          events: 'projects',
          rooms: 'accommodation',
          gallery: 'gallery',
        };
        const targetId = idMap[sectionId] || sectionId;
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'careers') {
      navigateTo('/careers');
      return;
    }
    if (sectionId === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    const idMap: Record<string, string> = {
      facilities: 'services',
      events: 'projects',
      rooms: 'accommodation',
      gallery: 'gallery',
    };
    const targetId = idMap[sectionId] || sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPath === '/gallery') {
    return (
      <>
        <FullGalleryPage
          onBackToHome={() => navigateTo('/')}
          onContactClick={() => setIsContactModalOpen(true)}
        />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </>
    );
  }

  if (currentPath === '/careers') {
    return (
      <>
        <CareersPage
          onBackToHome={() => navigateTo('/')}
          onContactClick={() => setIsContactModalOpen(true)}
        />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full overflow-x-clip">
      {/* 1. HERO SECTION */}
      <HeroSection
        onContactClick={() => setIsContactModalOpen(true)}
        onNavClick={handleNavClick}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactModalOpen(true)} />

      {/* 4. SERVICES / FACILITIES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS / SIGNATURE EVENTS SECTION */}
      <ProjectsSection
        onProjectSelect={(project) => setSelectedProject(project)}
      />

      {/* 6. ACCOMMODATION / ROOMS & STAY SECTION */}
      <AccommodationSection />

      {/* 7. GALLERY & MEDIA SECTION */}
      <GallerySection onViewFullGallery={() => navigateTo('/gallery')} />

      {/* 8. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 9. LOCATION & DIRECTIONS SECTION */}
      <LocationSection />

      {/* 10. FOOTER SECTION */}
      <Footer
        onContactClick={() => setIsContactModalOpen(true)}
        onNavClick={handleNavClick}
        onCareersClick={() => navigateTo('/careers')}
      />

      {/* MODALS */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactModalOpen(true)}
      />
    </div>
  );
}
