import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import { treatments } from '../data/treatments';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173A45] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-[#159FA5] flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Aura Medical Clinic
                </span>
                <span className="text-[11px] text-[#EAF7F7]/70 mt-0.5">
                  Aesthetic & Plastic Surgery Practice
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              A premier medical, cosmetic surgery, and dermatology clinic situated in DHA Phase 5, Lahore.
              Committed to anatomical balance, patient safety, and personalized care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#159FA5] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#159FA5] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#159FA5] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Treatments & Services
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About the Clinic
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-4">
              Featured Treatments
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {treatments.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    to={`/treatments?highlight=${t.slug}`}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & DHA Lahore Location (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-4">
              Clinic Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#159FA5] shrink-0 mt-0.5" />
                <span>Plot 42-C, Sector C, DHA Phase 5, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159FA5] shrink-0" />
                <a href={`tel:${clinicInfo.contact.phoneRaw}`} className="hover:text-white">
                  {clinicInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#159FA5] shrink-0" />
                <a href={`mailto:${clinicInfo.contact.email}`} className="hover:text-white">
                  {clinicInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#159FA5] shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon – Fri: 10:00 AM – 08:00 PM</span>
                  <span className="block text-slate-400">Sat: 11:00 AM – 06:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demonstration Note */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Aura Medical & Aesthetic Clinic. Developed by Aura Craft Labs Limited for clinics in DHA Lahore.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Notice</span>
            <span className="hover:text-slate-200 cursor-pointer">Medical Ethics Disclaimer</span>
            <span className="hover:text-slate-200 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
