import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ClinicIntro from '../components/ClinicIntro';
import SectionHeading from '../components/SectionHeading';
import TreatmentGrid from '../components/TreatmentGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorProfile from '../components/DoctorProfile';
import Testimonials from '../components/Testimonials';
import FinalCta from '../components/FinalCta';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Indicators / Statistics */}
      <Statistics />

      {/* 3. Introduction Section */}
      <ClinicIntro />

      {/* 4. Featured Treatments Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5] block mb-2">
                Clinical Offerings
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A45] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Featured Treatments & Aesthetic Services
              </h2>
              <p className="text-sm sm:text-base text-[#73858A] mt-2 max-w-xl">
                Explore our core procedures, from non-surgical facial sculpting to advanced laser rejuvenation and surgical profile harmony.
              </p>
            </div>

            <Button
              to="/treatments"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="self-start md:self-auto"
            >
              View All Treatments
            </Button>
          </div>

          <TreatmentGrid limit={6} showCategoryFilters={false} />
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Meet the Specialist */}
      <DoctorProfile />

      {/* 7. Patient Testimonials (Clearly labeled demo) */}
      <Testimonials />

      {/* 8. Final Call to Action */}
      <FinalCta />

    </div>
  );
}
