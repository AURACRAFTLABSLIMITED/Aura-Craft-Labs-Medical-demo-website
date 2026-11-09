import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import Button from './Button';
import { clinicInfo } from '../data/clinicInfo';

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#173A45] text-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 -z-10 w-80 h-80 bg-[#159FA5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#159FA5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7F7] block mb-3">
          DHA Phase 5 · Private Medical Practice
        </span>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4"
          style={{ textWrap: 'balance' }}
        >
          Ready to Begin Your Journey?
        </h2>

        <p
          className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ textWrap: 'balance' }}
        >
          Take the first step towards a personalized consultation with Dr. Ayesha Tariq Malik.
          We provide confidential evaluations and transparent surgical guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={Calendar}
            className="w-full sm:w-auto shadow-lg shadow-[#159FA5]/20"
          >
            Book Your Consultation
          </Button>
          <a
            href={`tel:${clinicInfo.contact.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-medium w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-[#159FA5]" />
            <span>Call Desk: {clinicInfo.contact.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
