import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import Button from './Button';
import { treatments } from '../data/treatments';

const TIME_SLOTS = [
  'Morning (10:00 AM – 01:00 PM)',
  'Afternoon (01:00 PM – 05:00 PM)',
  'Evening (05:00 PM – 08:00 PM)'
];

export default function AppointmentForm({ preselectedTreatment = '' }) {
  const [searchParams] = useSearchParams();
  const urlTreatment = searchParams.get('treatment') || preselectedTreatment;

  // Today's date in YYYY-MM-DD for min date picker attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatment: urlTreatment || '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 01:00 PM)',
    additionalMessage: ''
  });

  useEffect(() => {
    if (urlTreatment) {
      setFormData((prev) => ({ ...prev, treatment: urlTreatment }));
    }
  }, [urlTreatment]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [apiError, setApiError] = useState('');

  // Validate form fields locally
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone || cleanPhone.length < 8 || !/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid phone number (e.g., +92 300 1234567).';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or consultation type.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Selected date cannot be in the past.';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || (data.errors && data.errors[0]) || 'Failed to submit request');
      }

      setSubmitSuccess(data.data);
    } catch (err) {
      setApiError(err.message || 'Unable to connect to the scheduling system. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      treatment: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 01:00 PM)',
      additionalMessage: ''
    });
    setSubmitSuccess(null);
    setErrors({});
    setApiError('');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
      
      {/* Success State */}
      {submitSuccess ? (
        <div className="text-center py-6 sm:py-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-[#EAF7F7] text-[#159FA5] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5]">
              Request Received
            </span>
            <h3 className="text-2xl font-bold text-[#173A45] tracking-tight mt-1">
              Consultation Request Submitted
            </h3>
            <p className="text-sm text-[#73858A] mt-2 max-w-md mx-auto">
              Thank you, <strong className="text-[#173A45]">{submitSuccess.fullName}</strong>.
              Your request is currently pending review by our patient coordinator.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-[#F6FAFA] rounded-xl border border-slate-200/90 p-5 text-left max-w-md mx-auto text-xs space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Tracking Reference:</span>
              <span className="font-mono font-bold text-[#159FA5] text-sm">
                {submitSuccess.referenceNumber}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Treatment:</span>
              <span className="font-semibold text-[#173A45]">{submitSuccess.treatment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Preferred Date:</span>
              <span className="font-medium text-[#173A45]">{submitSuccess.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Preferred Slot:</span>
              <span className="font-medium text-[#173A45]">{submitSuccess.preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Location:</span>
              <span className="font-medium text-[#173A45]">DHA Phase 5, Lahore</span>
            </div>
          </div>

          {/* Next Steps Reminder */}
          <div className="p-4 bg-[#EAF7F7]/60 rounded-xl max-w-md mx-auto text-left border border-[#159FA5]/20 text-xs text-[#173A45]">
            <div className="flex items-center gap-1.5 font-semibold text-[#159FA5] mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Next Steps:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[#26383D]">
              <li>Our patient coordination desk will contact you via phone or WhatsApp to finalize your exact consultation time.</li>
              <li>Please note that an appointment is only confirmed once finalized with our team.</li>
            </ul>
          </div>

          <div>
            <Button variant="outline" size="md" onClick={handleReset}>
              Submit Another Request
            </Button>
          </div>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#159FA5]">
              Direct Clinical Booking
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#173A45] tracking-tight mt-1">
              Request a Private Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#73858A] mt-1.5">
              Fill in your details below to request an in-person evaluation with Dr. Ayesha Tariq Malik in DHA Phase 5, Lahore.
            </p>
          </div>

          {apiError && (
            <div className="flex items-start gap-3 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Submission Notice</strong>
                <span>{apiError}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Fatima Tariq"
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                    errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                  }`}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
              </div>
              {errors.fullName && (
                <p id="fullName-error" className="text-xs text-red-600 mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. yourname@domain.com"
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="text-xs text-red-600 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                    errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                  }`}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
              </div>
              {errors.phone && (
                <p id="phone-error" className="text-xs text-red-600 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Select Treatment */}
            <div>
              <label htmlFor="treatment" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Select Treatment / Consultation <span className="text-red-500">*</span>
              </label>
              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                  errors.treatment ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                }`}
                aria-invalid={Boolean(errors.treatment)}
              >
                <option value="">-- Choose a Treatment --</option>
                <option value="Initial General Aesthetic Consultation">Initial General Aesthetic Consultation</option>
                {treatments.map((t) => (
                  <option key={t.id} value={t.title}>
                    {t.title}
                  </option>
                ))}
                <option value="Surgical Rhinoplasty Consultation">Surgical Rhinoplasty Consultation</option>
                <option value="VASER Body Contouring Assessment">VASER Body Contouring Assessment</option>
                <option value="Other Clinical Procedure">Other Specialized Procedure</option>
              </select>
              {errors.treatment && (
                <p className="text-xs text-red-600 mt-1">{errors.treatment}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Preferred Appointment Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  min={todayStr}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                    errors.preferredDate ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                  }`}
                  aria-invalid={Boolean(errors.preferredDate)}
                />
              </div>
              {errors.preferredDate && (
                <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#173A45] mb-1.5">
                Preferred Time Slot <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#26383D] transition-colors focus:ring-1 focus:ring-[#159FA5] ${
                    errors.preferredTime ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-[#159FA5]'
                  }`}
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              {errors.preferredTime && (
                <p className="text-xs text-red-600 mt-1">{errors.preferredTime}</p>
              )}
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label htmlFor="additionalMessage" className="block text-xs font-semibold text-[#173A45] mb-1.5">
              Additional Details / Specific Concerns (Optional)
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                rows={3}
                value={formData.additionalMessage}
                onChange={handleChange}
                placeholder="Mention any specific aesthetic goals, prior treatments, or scheduling preferences..."
                className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-[#26383D] focus:border-[#159FA5] focus:ring-1 focus:ring-[#159FA5] transition-colors"
              />
            </div>
          </div>

          {/* Submission Notice & Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#73858A]">
              *Submitting this form submits an appointment request. Our staff will confirm your slot.
            </span>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={Calendar}
              className="w-full sm:w-auto"
            >
              Submit Consultation Request
            </Button>
          </div>
        </form>
      )}

    </div>
  );
}
