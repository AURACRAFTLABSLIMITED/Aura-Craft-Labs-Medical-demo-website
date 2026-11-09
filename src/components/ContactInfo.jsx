import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, Car } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

export default function ContactInfo() {
  return (
    <div className="bg-[#173A45] text-white rounded-2xl p-6 sm:p-8 space-y-6">
      <div>
        <span className="text-xs uppercase tracking-wider text-[#159FA5] font-semibold block mb-1">
          DHA Lahore Practice
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Clinical Reception & Desk
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
          Conveniently located in Sector C, DHA Phase 5. Private valet parking and confidential consultation suites available.
        </p>
      </div>

      <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
        
        {/* Physical Address */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#159FA5] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wide">
              Address
            </span>
            <p className="text-slate-100 font-medium leading-relaxed mt-0.5">
              {clinicInfo.location.address}
            </p>
            <span className="text-[11px] text-[#159FA5] block mt-0.5">
              {clinicInfo.location.landmark}
            </span>
          </div>
        </div>

        {/* Telephone */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#159FA5] shrink-0 mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wide">
              Direct Telephone
            </span>
            <a
              href={`tel:${clinicInfo.contact.phoneRaw}`}
              className="text-slate-100 font-medium hover:text-[#159FA5] transition-colors block mt-0.5"
            >
              {clinicInfo.contact.phone}
            </a>
          </div>
        </div>

        {/* WhatsApp Direct */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wide">
              WhatsApp Desk (Chat & Inquiries)
            </span>
            <a
              href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent('Hello Aura Clinic, I would like to inquire about a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 font-medium hover:underline block mt-0.5"
            >
              {clinicInfo.contact.whatsappDisplay}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#159FA5] shrink-0 mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wide">
              Consultation Inquiries
            </span>
            <a
              href={`mailto:${clinicInfo.contact.email}`}
              className="text-slate-100 font-medium hover:text-[#159FA5] transition-colors block mt-0.5"
            >
              {clinicInfo.contact.email}
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#159FA5] shrink-0 mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wide">
              Consultation Hours
            </span>
            <div className="mt-0.5 space-y-0.5">
              {clinicInfo.hours.map((h, i) => (
                <div key={i} className="flex justify-between gap-4 text-xs text-slate-200">
                  <span className="text-slate-400">{h.days}:</span>
                  <span className="font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Discrete features callout */}
      <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1.5">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Car className="w-4 h-4 text-[#159FA5]" />
          <span>Patient Arrival & Privacy</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-normal">
          Dedicated parking and private secondary departure corridor for post-procedure surgical privacy.
        </p>
      </div>

    </div>
  );
}
