import { Appointment } from '../models/Appointment.js';
import mongoose from 'mongoose';

// In-memory fallback repository when MongoDB is not running or during local offline testing
const inMemoryAppointments = [];

/**
 * Validates appointment payload fields
 */
export const validateAppointmentInput = (data) => {
  const errors = [];
  const { fullName, email, phone, treatment, preferredDate, preferredTime } = data;

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required (e.g. name@example.com).');
  }

  // Support Pakistani mobile format (+92 3XX XXXXXXX or 03XX XXXXXXX) and international numbers
  const phoneClean = (phone || '').replace(/[\s\-()]/g, '');
  if (!phoneClean || phoneClean.length < 8 || !/^\+?[0-9]{8,15}$/.test(phoneClean)) {
    errors.push('Please provide a valid phone number (e.g., +92 300 1234567 or 0300 1234567).');
  }

  if (!treatment || typeof treatment !== 'string' || treatment.trim().length === 0) {
    errors.push('Please select a treatment or consultation type.');
  }

  if (!preferredDate || typeof preferredDate !== 'string') {
    errors.push('Please select your preferred appointment date.');
  } else {
    // Check that selected date is not in the past
    const selectedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!isNaN(selectedDate.getTime()) && selectedDate < today) {
      errors.push('Preferred appointment date cannot be in the past.');
    }
  }

  const validTimeSlots = [
    'Morning (10:00 AM – 01:00 PM)',
    'Afternoon (01:00 PM – 05:00 PM)',
    'Evening (05:00 PM – 08:00 PM)'
  ];
  if (!preferredTime || !validTimeSlots.includes(preferredTime)) {
    errors.push('Please select a valid time slot from the available options.');
  }

  return errors;
};

/**
 * POST /api/appointments
 * Create a new consultation appointment request
 */
export const createAppointment = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      treatment,
      preferredDate,
      preferredTime,
      additionalMessage
    } = req.body;

    // 1. Validation
    const validationErrors = validateAppointmentInput(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid appointment request details.',
        errors: validationErrors
      });
    }

    const sanitizedData = {
      referenceNumber: 'AURA-' + Math.floor(100000 + Math.random() * 900000),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      treatment: treatment.trim(),
      preferredDate: preferredDate.trim(),
      preferredTime: preferredTime.trim(),
      additionalMessage: additionalMessage ? additionalMessage.trim().slice(0, 1000) : '',
      clinicLocation: 'DHA Phase 5, Lahore',
      status: 'pending_review',
      isConfirmed: false,
      createdAt: new Date()
    };

    // 2. Prevent rapid duplicate submissions within 2 minutes
    const isDuplicate = inMemoryAppointments.find(
      (a) =>
        a.email === sanitizedData.email &&
        a.treatment === sanitizedData.treatment &&
        new Date().getTime() - new Date(a.createdAt).getTime() < 120000
    );

    if (isDuplicate) {
      return res.status(429).json({
        success: false,
        message: 'A recent consultation request for this treatment has already been received from this email. Please check your inbox or contact our desk directly.',
        referenceNumber: isDuplicate.referenceNumber
      });
    }

    // 3. Persist to MongoDB if connected; otherwise retain in in-memory repository
    let savedRecord;
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      const doc = new Appointment(sanitizedData);
      savedRecord = await doc.save();
    } else {
      savedRecord = { ...sanitizedData, _id: 'mem_' + Date.now() };
      inMemoryAppointments.unshift(savedRecord);
    }

    // 4. Return clear confirmation response (Request received, not premature confirmation)
    return res.status(201).json({
      success: true,
      message: 'Consultation request received successfully. Our patient coordination desk in DHA Phase 5 will contact you to finalize your appointment slot.',
      data: {
        id: savedRecord._id,
        referenceNumber: savedRecord.referenceNumber,
        fullName: savedRecord.fullName,
        treatment: savedRecord.treatment,
        preferredDate: savedRecord.preferredDate,
        preferredTime: savedRecord.preferredTime,
        status: 'pending_review',
        clinicLocation: savedRecord.clinicLocation,
        createdAt: savedRecord.createdAt,
        nextSteps: [
          'Our patient desk will review Dr. Malik\'s surgical and clinical schedule.',
          'You will receive a confirmation phone call or WhatsApp message within 2-4 business hours.',
          'Please bring any prior dermatological or medical records to your initial consultation.'
        ]
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/appointments
 * Retrieve appointments for administrative or clinic staff review
 */
export const getAppointments = async (req, res, next) => {
  try {
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      const appointments = await Appointment.find().sort({ createdAt: -1 }).limit(50);
      return res.status(200).json({
        success: true,
        count: appointments.length,
        data: appointments
      });
    } else {
      return res.status(200).json({
        success: true,
        count: inMemoryAppointments.length,
        data: inMemoryAppointments
      });
    }
  } catch (error) {
    next(error);
  }
};
