import express from 'express';
import {
  createAppointment,
  getAppointments
} from '../controllers/appointmentController.js';

const router = express.Router();

// POST /api/appointments - Submit consultation booking request
router.post('/', createAppointment);

// GET /api/appointments - Retrieve appointments (staff / clinic review)
router.get('/', getAppointments);

export default router;
