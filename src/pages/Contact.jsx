import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Info } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import ContactInfo from '../components/ContactInfo';
import GoogleMapsEmbed from '../components/GoogleMapsEmbed';
import SectionHeading from '../components/SectionHeading';
import { clinicInfo } from '../data/clinicInfo';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Aura Medical Clinic, I would like to inquire about booking an aesthetic consultation in DHA Lahore.'
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* A. Contact Hero Section */}
      <section className="bg-gradient-to-b from-[#F6FAFA] to-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5] block mb-2.5">
            Appointment Coordination & Reception
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173A45] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Contact & Appointment Booking
          </h1>
          <p
            className="text-base sm:text-lg text-[#73858A] max-w-2xl mx-auto leading-relaxed"
            style={{ textWrap: 'balance' }}
          >
            Schedule your private consultation with Dr. Ayesha Tariq Malik at our DHA Phase 5 clinic.
            All inquiries and patient records are handled with strict medical confidentiality.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Clinic Info Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Transparency Advisory */}
          <div className="mb-8 p-4 bg-[#EAF7F7] border border-[#159FA5]/20 rounded-xl flex items-start sm:items-center gap-3 text-xs text-[#173A45]">
            <Info className="w-5 h-5 text-[#159FA5] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong>Patient Notice:</strong> Submitting an online request does not immediately finalize your appointment slot.
              Our patient desk will review clinical availability and contact you via phone or WhatsApp to confirm your exact consultation timing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Interactive Appointment Booking Form (7 cols) */}
            <div id="booking-form" className="lg:col-span-7">
              <AppointmentForm />
            </div>

            {/* Right Column: Contact Details & Fast WhatsApp CTA (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <ContactInfo />

              {/* Direct WhatsApp Consultation Box */}
              <div className="bg-[#EAF7F7] rounded-2xl p-6 border border-[#159FA5]/20">
                <div className="flex items-center gap-2.5 mb-2 text-[#173A45] font-bold text-base">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Immediate Inquiries via WhatsApp</span>
                </div>
                <p className="text-xs text-[#73858A] leading-relaxed mb-4">
                  Prefer messaging directly? Reach our dedicated patient care coordinator on WhatsApp for quick scheduling questions or directions.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp: {clinicInfo.contact.whatsappDisplay}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* E. Google Maps Integration Section */}
      <section className="py-12 sm:py-16 bg-[#F6FAFA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Find Our Clinic"
            title="Clinic Location in DHA Phase 5, Lahore"
            subtitle="Centrally situated in Sector C commercial plaza with convenient access from Ring Road, DHA Raya, and Gulberg."
          />

          <div className="max-w-5xl mx-auto">
            <GoogleMapsEmbed />
          </div>
        </div>
      </section>

    </div>
  );
}
