import React, { useEffect } from 'react';
import { X, Clock, Calendar, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function TreatmentDetailModal({ treatment, isOpen, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !treatment) return null;

  const handleBookTreatment = () => {
    onClose();
    navigate(`/contact?treatment=${encodeURIComponent(treatment.title)}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
        
        {/* Header Media Banner */}
        <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173A45] via-[#173A45]/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 text-white hover:bg-black/70 rounded-full transition-colors cursor-pointer"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-[#EAF7F7] font-semibold">
              {treatment.categoryLabel}
            </span>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight mt-1">
              {treatment.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#F6FAFA] rounded-xl border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#159FA5] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Duration</span>
                <span className="font-semibold text-[#173A45]">{treatment.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#159FA5] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Downtime</span>
                <span className="font-semibold text-[#173A45]">{treatment.downtime.split('(')[0]}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#159FA5] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Anesthesia</span>
                <span className="font-semibold text-[#173A45]">{treatment.anesthesia.split('/')[0]}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-2">
              Treatment Overview
            </h3>
            <p className="text-sm text-[#26383D] leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Target Concerns */}
          {treatment.targetConcerns && treatment.targetConcerns.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-2.5">
                Key Indications & Target Concerns
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#26383D]">
                {treatment.targetConcerns.map((concern, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#159FA5] shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Clinical Benefits */}
          {treatment.benefits && treatment.benefits.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#159FA5] mb-2.5">
                Expected Clinical Outcomes
              </h3>
              <ul className="space-y-1.5 text-xs text-[#26383D]">
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#159FA5] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#73858A]">
              DHA Phase 5, Lahore · In-Person Medical Consultation
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="w-1/2 sm:w-auto"
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleBookTreatment}
                className="w-1/2 sm:w-auto"
              >
                Book Consultation
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
