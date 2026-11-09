import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ClinicIntro() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Medical Photography Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-16/11 lg:aspect-4/5 bg-slate-100">
              <img
                src="/src/assets/images/hero_clinic_consultation_1794214515994.jpg"
                alt="Dr. Ayesha Malik providing aesthetic consultation in modern DHA Lahore suite"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173A45]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#EAF7F7] font-semibold">
                  Clinical Philosophy
                </span>
                <p className="text-sm font-medium mt-1 text-slate-100">
                  "Authentic restoration that respects your facial anatomy and natural expression."
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5] mb-2.5">
              About Aura Medical Clinic
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A45] tracking-tight leading-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Elevating Aesthetic & Surgical Standards in DHA Lahore
            </h2>

            <p className="text-base text-[#73858A] leading-relaxed mb-5">
              Founded on principles of surgical accuracy, medical transparency, and ethical patient advocacy,
              Aura Medical Clinic delivers premium aesthetic care in the heart of DHA Phase 5, Lahore.
              We view cosmetic interventions not as generic trends, but as bespoke clinical solutions crafted
              to enhance your distinct facial balance and inner confidence.
            </p>

            <p className="text-base text-[#73858A] leading-relaxed mb-8">
              Every procedure is preceded by an in-depth clinical consultation where anatomical nuances,
              skin phototypes, realistic timelines, and recovery protocols are honestly discussed.
              Our clinic combines international surgical training with advanced medical laser and injectable technologies.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#159FA5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173A45]">Patient-Centered Care</h3>
                  <p className="text-xs text-[#73858A] mt-0.5">Unhurried private evaluations focused purely on your comfort and goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#159FA5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173A45]">Sterile Surgical Protocol</h3>
                  <p className="text-xs text-[#73858A] mt-0.5">Strict hospital-grade sterilization and single-use disposable consumables.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#159FA5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173A45]">Natural Aesthetic Balance</h3>
                  <p className="text-xs text-[#73858A] mt-0.5">Subtle, refined results that never appear exaggerated or artificial.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#159FA5] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173A45]">Comprehensive Follow-Up</h3>
                  <p className="text-xs text-[#73858A] mt-0.5">Continuous clinical monitoring and recovery guidance following all treatments.</p>
                </div>
              </div>
            </div>

            <div>
              <Button
                to="/treatments"
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More About Our Treatments
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
