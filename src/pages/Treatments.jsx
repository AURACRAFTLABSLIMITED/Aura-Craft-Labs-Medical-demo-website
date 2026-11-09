import React, { useState } from 'react';
import { Calendar, ChevronDown, Sparkles, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TreatmentGrid from '../components/TreatmentGrid';
import Button from '../components/Button';
import FinalCta from '../components/FinalCta';
import { treatmentFaqs } from '../data/treatments';

export default function Treatments() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* A. Treatments Hero Section */}
      <section className="bg-gradient-to-b from-[#F6FAFA] to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5] block mb-2.5">
            Specialized Aesthetic & Plastic Surgery Care
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173A45] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Explore Our Treatments & Services
          </h1>
          <p
            className="text-base sm:text-lg text-[#73858A] max-w-2xl mx-auto leading-relaxed"
            style={{ textWrap: 'balance' }}
          >
            From precision facial contouring and clinical lasers to surgical profile harmony,
            every treatment at Aura Clinic is tailored to your unique anatomical goals in a sterile, discrete setting.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Button to="/contact" variant="primary" size="md" icon={Calendar}>
              Request Treatment Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* B & C. Treatment Category Navigation & Treatment Cards Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Treatment Catalog"
            title="Comprehensive Procedures Portfolio"
            subtitle="Browse by aesthetic category to review procedure durations, downtime expectations, and clinical indications."
          />

          <TreatmentGrid showCategoryFilters={true} />
        </div>
      </section>

      {/* D. Detailed Treatment Information Sections (Clinical Standards & Protocols) */}
      <section className="py-16 sm:py-24 bg-[#F6FAFA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Clinical Methodology"
            title="Our Four-Tier Treatment Protocol"
            subtitle="Every surgical and non-surgical procedure follows strict international guidelines to ensure safety, comfort, and enduring results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col">
              <span className="text-xs font-bold text-[#159FA5] uppercase tracking-wider mb-2">
                Phase 01
              </span>
              <h3 className="text-base font-bold text-[#173A45] mb-2">
                Anatomic Evaluation
              </h3>
              <p className="text-xs text-[#73858A] leading-relaxed flex-1">
                Comprehensive 3D profile analysis and skin type assessment to understand underlying tissue structure and proportions.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#173A45] font-medium">
                <Check className="w-3.5 h-3.5 text-[#159FA5]" />
                <span>30–45 min private consult</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col">
              <span className="text-xs font-bold text-[#159FA5] uppercase tracking-wider mb-2">
                Phase 02
              </span>
              <h3 className="text-base font-bold text-[#173A45] mb-2">
                Custom Treatment Plan
              </h3>
              <p className="text-xs text-[#73858A] leading-relaxed flex-1">
                Tailored combination of surgical and non-surgical modalities, with transparent downtime and outcome timelines.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#173A45] font-medium">
                <Check className="w-3.5 h-3.5 text-[#159FA5]" />
                <span>Transparent options</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col">
              <span className="text-xs font-bold text-[#159FA5] uppercase tracking-wider mb-2">
                Phase 03
              </span>
              <h3 className="text-base font-bold text-[#173A45] mb-2">
                Sterile Clinical Execution
              </h3>
              <p className="text-xs text-[#73858A] leading-relaxed flex-1">
                Administered by Dr. Ayesha Tariq Malik using FDA-cleared devices, genuine injectables, and hospital-grade sterility.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#173A45] font-medium">
                <Check className="w-3.5 h-3.5 text-[#159FA5]" />
                <span>Safety-certified products</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col">
              <span className="text-xs font-bold text-[#159FA5] uppercase tracking-wider mb-2">
                Phase 04
              </span>
              <h3 className="text-base font-bold text-[#173A45] mb-2">
                Dedicated Aftercare
              </h3>
              <p className="text-xs text-[#73858A] leading-relaxed flex-1">
                Scheduled post-procedure check-ups, topical healing protocols, and direct telephone/WhatsApp support.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#173A45] font-medium">
                <Check className="w-3.5 h-3.5 text-[#159FA5]" />
                <span>Continuous monitoring</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* E. Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Patient Queries"
            title="Frequently Asked Treatment Questions"
            subtitle="Straightforward answers regarding safety, appointments, downtime, and consultation expectations."
          />

          <div className="space-y-3.5">
            {treatmentFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#173A45] flex items-center justify-between gap-4 bg-white hover:bg-[#F6FAFA] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#159FA5] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#73858A] leading-relaxed border-t border-slate-100 bg-[#F6FAFA]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. Appointment CTA */}
      <FinalCta />

    </div>
  );
}
