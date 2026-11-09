import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          kicker="Patient Journeys"
          title="Sample Consultations & Patient Experiences"
          subtitle="Demonstration narratives illustrating clinical care, privacy standards, and patient outcomes in Lahore."
        />

        {/* Demo transparency callout */}
        <div className="max-w-2xl mx-auto mb-10 flex items-center justify-center gap-2 p-3 bg-[#EAF7F7]/60 rounded-lg text-xs text-[#173A45] border border-[#159FA5]/20">
          <Info className="w-4 h-4 text-[#159FA5] shrink-0" />
          <span>Sample patient narratives for website demonstration purposes only.</span>
        </div>

        {/* Testimonial Presentation Card */}
        <div className="max-w-3xl mx-auto bg-[#F6FAFA] rounded-2xl border border-slate-200 p-8 sm:p-12 relative shadow-xs">
          <Quote className="w-12 h-12 text-[#159FA5]/15 absolute top-6 right-6" />

          <div className="relative z-10">
            <blockquote className="text-base sm:text-lg text-[#26383D] leading-relaxed italic mb-8">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-sm font-bold text-[#173A45]">
                  Patient {current.patientName}
                </div>
                <div className="text-xs text-[#73858A] mt-0.5">
                  {current.cityArea} · {current.treatmentReceived}
                </div>
                <div className="text-[11px] text-[#159FA5] font-medium mt-1">
                  {current.satisfactionHighlight} ({current.timeframe})
                </div>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-[#173A45] hover:text-[#159FA5] hover:border-[#159FA5] transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#73858A] tabular-nums px-1">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-[#173A45] hover:text-[#159FA5] hover:border-[#159FA5] transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
