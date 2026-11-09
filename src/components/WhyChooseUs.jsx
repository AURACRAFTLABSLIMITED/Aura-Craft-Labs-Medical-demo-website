import React from 'react';
import SectionHeading from './SectionHeading';
import { clinicInfo } from '../data/clinicInfo';
import {
  UserCheck,
  HeartHandshake,
  Building2,
  FileText,
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

export default function WhyChooseUs() {
  const icons = [
    UserCheck,
    HeartHandshake,
    Building2,
    FileText,
    MessageSquare,
    ShieldAlert
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6FAFA] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          kicker="Clinical Integrity & Standards"
          title="Why Discerning Patients Choose Aura Clinic"
          subtitle="Our clinical philosophy is grounded in transparent communication, safety-first protocols, and anatomical precision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicInfo.values.map((val, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex flex-col bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs hover:border-[#159FA5]/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EAF7F7] text-[#159FA5] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#173A45] tracking-tight mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-[#73858A] leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
