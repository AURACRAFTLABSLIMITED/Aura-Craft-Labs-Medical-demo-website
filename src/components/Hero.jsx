import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import Button from './Button';
import { clinicInfo } from '../data/clinicInfo';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6FAFA] via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EAF7F7] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-72 h-72 bg-[#159FA5]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Quiet unboxed location & specialty kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#159FA5] uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>DHA Phase 5, Lahore</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#73858A] normal-case tracking-normal font-medium">
                Board-Certified Aesthetic & Plastic Surgery
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#173A45] tracking-tight leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Your Beauty. <br className="hidden sm:inline" />
              Your Confidence. <br />
              <span className="text-[#159FA5]">Our Expertise.</span>
            </h1>

            <p
              className="text-base sm:text-lg text-[#73858A] leading-relaxed max-w-xl mb-8 font-normal"
              style={{ textWrap: 'balance' }}
            >
              Discover personalized aesthetic and cosmetic care designed around your goals.
              Experience professional consultations and thoughtful treatment planning in a
              welcoming clinical environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={Calendar}
                className="shadow-md shadow-[#159FA5]/15"
              >
                Book a Consultation
              </Button>

              <Button
                to="/treatments"
                variant="outlineDark"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Treatments
              </Button>
            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#26383D]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#159FA5] shrink-0" />
                <span className="font-medium">PMDC Specialist Certified</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#159FA5] shrink-0" />
                <span className="font-medium">14+ Years Clinical Mastery</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#159FA5] shrink-0" />
                <span className="font-medium">Sterile Surgical Suite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Floating Information Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Element */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#159FA5]/20 to-[#EAF7F7] -rotate-1 blur-xs -z-10" />

              {/* Main Clinical Image */}
              <div className="relative rounded-xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200/80 aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_clinic_consultation_1794214515994.jpg"
                  alt="Aesthetic consultation between board-certified physician and patient at Aura Medical Clinic in DHA Lahore"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Information Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200/90 max-w-[280px] sm:max-w-[300px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF7F7] flex items-center justify-center text-[#159FA5] shrink-0 font-semibold">
                    DHA
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#173A45] leading-tight">
                      Private Consultation Suite
                    </h3>
                    <p className="text-[11px] text-[#73858A] mt-1 leading-normal">
                      Sector C, DHA Phase 5 · Dedicated private entrance & discrete patient care.
                    </p>
                    <div className="mt-2 text-[10px] font-semibold text-[#159FA5] flex items-center gap-1">
                      <span>Mon – Sat: 10 AM – 8 PM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
