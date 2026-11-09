import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory appointments cache for dev/preview and fallback
interface AppointmentRecord {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage?: string;
  clinicLocation: string;
  status: string;
  isConfirmed: boolean;
  createdAt: string;
}

const appointmentStore: AppointmentRecord[] = [
  {
    id: 'demo_1',
    referenceNumber: 'AURA-782194',
    fullName: 'Fatima Al-Hassan',
    email: 'fatima.alhassan@example.com',
    phone: '+92 300 8472910',
    treatment: 'Facial Aesthetics & Sculpting',
    preferredDate: '2026-11-15',
    preferredTime: 'Morning (10:00 AM – 01:00 PM)',
    additionalMessage: 'Seeking initial consultation regarding jawline definition and lip contouring.',
    clinicLocation: 'DHA Phase 5, Lahore',
    status: 'pending_review',
    isConfirmed: false,
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  }
];

// Helper validation function
function validateAppointment(data: any): string[] {
  const errors: string[] = [];
  const { fullName, email, phone, treatment, preferredDate, preferredTime } = data || {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required (e.g., name@example.com).');
  }

  const phoneClean = (phone || '').replace(/[\s\-()]/g, '');
  if (!phoneClean || phoneClean.length < 8 || !/^\+?[0-9]{8,15}$/.test(phoneClean)) {
    errors.push('Please enter a valid phone number (e.g., +92 300 1234567 or 0300 1234567).');
  }

  if (!treatment || typeof treatment !== 'string' || treatment.trim().length === 0) {
    errors.push('Please select a treatment or consultation type.');
  }

  if (!preferredDate || typeof preferredDate !== 'string') {
    errors.push('Please select your preferred appointment date.');
  } else {
    const selected = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!isNaN(selected.getTime()) && selected < today) {
      errors.push('Preferred appointment date cannot be in the past.');
    }
  }

  const validSlots = [
    'Morning (10:00 AM – 01:00 PM)',
    'Afternoon (01:00 PM – 05:00 PM)',
    'Evening (05:00 PM – 08:00 PM)'
  ];
  if (!preferredTime || !validSlots.includes(preferredTime)) {
    errors.push('Please select a valid time slot from the provided options.');
  }

  return errors;
}

// -----------------------------------------------------------------------------
// REST API Routes
// -----------------------------------------------------------------------------

// API Health Check
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'operational',
    clinic: 'Aura Medical & Aesthetic Clinic DHA Lahore',
    timestamp: new Date().toISOString()
  });
});

// GET /api/appointments - List appointments (staff view)
app.get('/api/appointments', (_req, res) => {
  res.status(200).json({
    success: true,
    count: appointmentStore.length,
    data: appointmentStore
  });
});

// POST /api/appointments - Submit consultation request
app.post('/api/appointments', (req, res) => {
  try {
    const { fullName, email, phone, treatment, preferredDate, preferredTime, additionalMessage } = req.body;

    // Validate input
    const errors = validateAppointment(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid appointment request data.',
        errors
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanTreatment = treatment.trim();

    // Prevent duplicate submission within 2 minutes
    const recentDuplicate = appointmentStore.find(
      (a) =>
        a.email === cleanEmail &&
        a.treatment === cleanTreatment &&
        Date.now() - new Date(a.createdAt).getTime() < 120000
    );

    if (recentDuplicate) {
      return res.status(429).json({
        success: false,
        message: 'A recent consultation request for this treatment has already been received from this email. Our patient desk will contact you shortly.',
        referenceNumber: recentDuplicate.referenceNumber
      });
    }

    const newRecord: AppointmentRecord = {
      id: 'apt_' + Date.now(),
      referenceNumber: 'AURA-' + Math.floor(100000 + Math.random() * 900000),
      fullName: fullName.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      treatment: cleanTreatment,
      preferredDate: preferredDate.trim(),
      preferredTime: preferredTime.trim(),
      additionalMessage: additionalMessage ? String(additionalMessage).trim().slice(0, 1000) : '',
      clinicLocation: 'DHA Phase 5, Lahore',
      status: 'pending_review',
      isConfirmed: false,
      createdAt: new Date().toISOString()
    };

    appointmentStore.unshift(newRecord);

    return res.status(201).json({
      success: true,
      message: 'Consultation request received successfully. Our patient coordination desk in DHA Phase 5 will contact you to finalize your appointment slot.',
      data: {
        id: newRecord.id,
        referenceNumber: newRecord.referenceNumber,
        fullName: newRecord.fullName,
        treatment: newRecord.treatment,
        preferredDate: newRecord.preferredDate,
        preferredTime: newRecord.preferredTime,
        status: 'pending_review',
        clinicLocation: newRecord.clinicLocation,
        createdAt: newRecord.createdAt,
        nextSteps: [
          'Our patient desk will review Dr. Malik\'s surgical and clinical schedule.',
          'You will receive a confirmation phone call or WhatsApp message within 2-4 business hours.',
          'Please bring any prior dermatological or medical records to your initial consultation.'
        ]
      }
    });
  } catch (err: any) {
    console.error('[API Server Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your appointment request. Please contact our desk directly at +92 300 488 2119.'
    });
  }
});

// -----------------------------------------------------------------------------
// Vite Middleware / Static Server
// -----------------------------------------------------------------------------
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Aura Clinic] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
