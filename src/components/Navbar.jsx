import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'About Clinic', path: '/#about' },
    { name: 'Contact & Location', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single clean element) */}
            <Link
              to="/"
              className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-hidden"
              aria-label="Aura Medical & Aesthetic Clinic Home"
            >
              <div className="w-9 h-9 rounded-lg bg-[#EAF7F7] flex items-center justify-center text-[#159FA5] font-bold text-lg border border-[#159FA5]/20 group-hover:bg-[#159FA5] group-hover:text-white transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#173A45] leading-none">
                  Aura Medical Clinic
                </span>
                <span className="text-[11px] font-medium text-[#73858A] mt-0.5 tracking-wide">
                  DHA Phase 5 · Lahore
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links (Single-line, no pills) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#26383D]">
              {navLinks.map((link) => {
                const isHash = link.path.startsWith('/#');
                if (isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="hover:text-[#159FA5] transition-colors whitespace-nowrap shrink-0 py-1"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                        isActive
                          ? 'text-[#159FA5] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#159FA5]'
                          : 'hover:text-[#159FA5]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action + Mobile Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={Calendar}
                className="hidden sm:inline-flex"
              >
                Book Consultation
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#173A45] hover:text-[#159FA5] hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#159FA5]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isHash = link.path.startsWith('/#');
                if (isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-md text-base font-medium text-[#26383D] hover:bg-[#EAF7F7] hover:text-[#159FA5]"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-md text-base font-medium ${
                        isActive
                          ? 'bg-[#EAF7F7] text-[#159FA5] font-semibold'
                          : 'text-[#26383D] hover:bg-[#EAF7F7] hover:text-[#159FA5]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Consultation
              </Button>
              <a
                href={`tel:${clinicInfo.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2 text-sm text-[#73858A] hover:text-[#173A45]"
              >
                <Phone className="w-4 h-4 text-[#159FA5]" />
                <span>Call DHA Clinic: {clinicInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
