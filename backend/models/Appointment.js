import mongoose from 'mongoose';

/**
 * Appointment Schema for Aura Medical & Aesthetic Clinic
 * Captures patient consultation requests with validation and audit tracking.
 */
const appointmentSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      unique: true,
      index: true,
      required: true,
      default: () => 'AURA-' + Math.floor(100000 + Math.random() * 900000)
    },
    fullName: {
      type: String,
      required: [true, 'Patient full name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Valid email address is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      minlength: [7, 'Phone number must be at least 7 digits'],
      maxlength: [20, 'Phone number cannot exceed 20 characters']
    },
    treatment: {
      type: String,
      required: [true, 'Please select a treatment or consultation type'],
      trim: true
    },
    preferredDate: {
      type: String,
      required: [true, 'Preferred appointment date is required']
    },
    preferredTime: {
      type: String,
      required: [true, 'Preferred time slot is required'],
      enum: [
        'Morning (10:00 AM – 01:00 PM)',
        'Afternoon (01:00 PM – 05:00 PM)',
        'Evening (05:00 PM – 08:00 PM)'
      ]
    },
    additionalMessage: {
      type: String,
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
      default: ''
    },
    clinicLocation: {
      type: String,
      default: 'DHA Phase 5, Lahore'
    },
    status: {
      type: String,
      enum: ['pending_review', 'confirmed', 'contacted', 'rescheduled', 'cancelled'],
      default: 'pending_review'
    },
    isConfirmed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// Virtual property indicating this is an initial appointment request pending clinic confirmation
appointmentSchema.virtual('statusDisplay').get(function () {
  return this.status === 'pending_review'
    ? 'Request Received - Pending Staff Confirmation'
    : this.status;
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
