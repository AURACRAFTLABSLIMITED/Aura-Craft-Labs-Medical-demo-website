import React from 'react';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { clinicInfo } from '../data/clinicInfo';

export default function DoctorProfile() {
  const { doctor } = clinicInfo;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Doctor Portrait Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-3/4 bg-slate-100">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.role} at Aura Medical Clinic DHA Lahore`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173A45]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7F7]">
                    Clinical Lead · DHA Lahore
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    {doctor.registration}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio and Qualifications */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#159FA5] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 shrink-0" />
              <span>Meet the Specialist</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A45] tracking-tight mb-2">
              {doctor.name}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#159FA5] mb-4">
              {doctor.role}
            </p>

            {/* Qualifications Strip */}
            <div className="p-3.5 bg-[#F6FAFA] rounded-xl border border-slate-200/90 text-xs text-[#26383D] mb-6">
              <div className="font-semibold text-[#173A45] mb-1">Board Qualifications & Credentials:</div>
              <p className="text-[#73858A] leading-relaxed">{doctor.qualifications}</p>
            </div>

            <p className="text-sm sm:text-base text-[#73858A] leading-relaxed mb-6">
              {doctor.bio}
            </p>

            {/* Key Clinical Focus Areas */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#173A45] mb-3">
                Key Surgical & Clinical Specializations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#26383D]">
                {doctor.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159FA5] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={Calendar}
              >
                Book Consultation with Dr. Malik
              </Button>
              <span className="text-xs text-[#73858A] italic">
                *Consultations scheduled exclusively by appointment
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
