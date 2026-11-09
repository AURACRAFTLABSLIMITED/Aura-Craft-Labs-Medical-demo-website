import React, { useState, useEffect } from 'react';
import { clinicInfo } from '../data/clinicInfo';

export default function Statistics() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 bg-[#173A45] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle note indicating editable demonstration metric placeholders */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs text-[#EAF7F7]/70">
          <span className="font-medium tracking-wide">
            Clinical Milestone Indicators · DHA Lahore Practice Profile
          </span>
          <span className="hidden sm:inline text-[11px] text-[#EAF7F7]/50 italic">
            *Demo metrics customizable for your clinic
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {clinicInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                <span className="text-[#159FA5]">
                  {hasAnimated ? stat.value.toLocaleString() : '0'}
                </span>
                <span className="text-[#159FA5] text-2xl sm:text-3xl font-bold">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-100">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
