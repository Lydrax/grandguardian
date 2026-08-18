import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#101012] border border-[#D7E2EA]/20 rounded-[36px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 overflow-y-auto text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[#D7E2EA] z-20"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-sm px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 font-semibold uppercase tracking-wider">
                  Project {project.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium px-3 py-1 rounded-full bg-white/5">
                  {project.category} Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
                {project.name}
              </h2>
            </div>

            {/* Image Gallery Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="rounded-[28px] overflow-hidden bg-[#1A1A1E] border border-white/10 aspect-video md:aspect-auto md:h-[380px]">
                <img
                  src={project.col2Img}
                  alt={`${project.name} main showcase`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="rounded-[28px] overflow-hidden bg-[#1A1A1E] border border-white/10 h-[180px] sm:h-[200px]">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} detail 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[28px] overflow-hidden bg-[#1A1A1E] border border-white/10 h-[180px] sm:h-[200px]">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} detail 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="text-xs sm:text-sm text-[#D7E2EA]/60 max-w-md">
                Custom 3D modeling, material shading, lighting composition, and real-time interactive design crafted for {project.name}.
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium uppercase text-xs sm:text-sm tracking-widest transition-all cursor-pointer"
                >
                  Request Similar Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
