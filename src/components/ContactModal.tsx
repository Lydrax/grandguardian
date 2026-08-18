import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Check, Sparkles, Calendar, Users } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Wedding / Poruwa Ceremony',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@grandguardian.lk');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121316] border border-[#3A3D45]/60 rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-[#D7E2EA] max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer text-[#D7E2EA] z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#128C7E]/20 border border-[#128C7E]/50 text-[#128C7E] flex items-center justify-center mb-2">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  Inquiry Sent!
                </h3>
                <p className="text-[#D7E2EA]/80 max-w-sm text-sm sm:text-base leading-relaxed">
                  Thank you for reaching out! The Hotel Grand Guardian reservations team will contact you shortly.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#128C7E]/15 border border-[#128C7E]/30 text-xs font-mono uppercase tracking-widest text-[#128C7E] mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" /> Hotel Grand Guardian
                  </div>
                  <h3 className="hero-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                    Contact & Reservations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                    Planning a wedding, corporate conference, or accommodation stay in Rathnapura? Send us an inquiry below.
                  </p>
                </div>

                {/* Direct Contact Quick Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#128C7E]/15 text-[#128C7E]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider font-mono">Email Us</div>
                        <div className="font-mono text-xs sm:text-sm font-medium text-white truncate">info@grandguardian.lk</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-[11px] font-medium cursor-pointer flex-shrink-0"
                    >
                      {copiedEmail ? <span className="text-[#128C7E]">Copied</span> : <span>Copy</span>}
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-xl bg-[#128C7E]/15 text-[#128C7E]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider font-mono">Direct Hotline</div>
                      <a href="tel:0453467505" className="font-mono text-xs sm:text-sm font-medium text-white hover:text-[#128C7E] transition-colors">
                        045 346 7505 / 045 346 7510
                      </a>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-1">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kasun Perera"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 077 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kasun@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1A1E] border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white transition-colors"
                      >
                        <option value="Wedding / Poruwa Ceremony">Wedding / Poruwa Ceremony</option>
                        <option value="Banquet Hall Booking">Banquet Hall Booking</option>
                        <option value="Corporate Conference / MICE">Corporate Conference / MICE</option>
                        <option value="Room & Accommodation Stay">Room & Accommodation Stay</option>
                        <option value="Dining / Restaurant & Bar">Dining / Restaurant & Bar</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Event Date & Expected Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#128C7E]" /> Event / Check-in Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white transition-colors color-scheme-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#128C7E]" /> Expected Guests (Optional)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        placeholder="e.g. 250"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white placeholder-[#D7E2EA]/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message / Details */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1 font-medium">
                      Message / Requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your preferred hall setup, room count, or special requests..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#128C7E] focus:outline-none text-xs sm:text-sm text-white placeholder-[#D7E2EA]/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <ContactButton label="Send Inquiry" className="!px-7 !py-3 !text-xs sm:!text-sm" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
