import React from 'react';
import { MessageCircle } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Aura Medical Clinic, I would like to inquire about booking an aesthetic consultation in DHA Lahore.'
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Consultation">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Aura Clinic desk"
        className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:bg-[#20ba59] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
}
