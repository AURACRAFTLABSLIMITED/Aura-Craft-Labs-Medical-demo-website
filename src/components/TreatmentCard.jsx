import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function TreatmentCard({ treatment, onSelect }) {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-[#159FA5]/50 transition-all duration-300">
      
      {/* Visual Asset Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        
        {/* Unboxed Metadata (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-xs text-[#73858A] mb-2 font-medium">
          <span className="text-[#159FA5] font-semibold">{treatment.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{treatment.duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#173A45] tracking-tight group-hover:text-[#159FA5] transition-colors mb-2.5">
          {treatment.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#73858A] leading-relaxed line-clamp-3 mb-6 flex-1">
          {treatment.shortDescription}
        </p>

        {/* Interactive Learn More trigger */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelect(treatment)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159FA5] group-hover:text-[#118489] transition-colors cursor-pointer focus-visible:outline-hidden"
          >
            <span>Learn More & Clinical Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </div>
  );
}
