# Aura Medical & Aesthetic Clinic - Backend REST API

Standalone Node.js, Express, and MongoDB backend application designed for medical, plastic surgery, and aesthetic clinics in DHA Lahore, Pakistan.

## Architecture & Features

- **Express.js** REST API architecture.
- **MongoDB & Mongoose** data modeling with schema validation and audit timestamps.
- **Consultation Booking API** (`POST /api/appointments`) with validation:
  - Required fields (Full Name, Email, Phone, Treatment, Preferred Date, Preferred Time).
  - Email format verification.
  - Phone validation (supports international & Pakistani mobile formats `+92 3XX XXXXXXX` and `03XX XXXXXXX`).
  - Date verification (prevents dates in the past).
  - Anti-duplicate spam protection (blocks rapid duplicate submissions within 2 minutes).
  - Generates unique tracking reference numbers (`AURA-XXXXXX`).
  - Clear request confirmation status (`status: "pending_review"`).
- **Centralized Error Handling** with detailed Mongoose validation error parsing.
- **CORS Support** for cross-origin frontend requests.
- **In-Memory Fallback Mode** if MongoDB is temporarily offline or in demo mode.

---

## Directory Structure

```
backend/
├── config/
│   └── db.js                      # Mongoose MongoDB connection logic
├── controllers/
│   └── appointmentController.js   # Request validation, appointment creation & listing
├── middleware/
│   └── errorHandler.js            # Centralized API error handling
├── models/
│   └── Appointment.js             # Mongoose appointment schema & validation rules
├── routes/
│   └── appointmentRoutes.js       # Express route definitions
├── .env.example                   # Environment configuration template
├── package.json                   # Backend dependencies & npm scripts
├── server.js                      # Express application entry point
└── README.md
```

---

## Installation & Setup

### 1. Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally (`mongodb://localhost:27017`) or a MongoDB Atlas URI

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/aura_clinic_db
CLIENT_URL=http://localhost:3000
```

### 4. Run Backend Server
- In development mode (auto-reload with nodemon):
```bash
npm run dev
```

- In production mode:
```bash
npm start
```

The server will be available at `http://localhost:5000`.

---

## API Endpoints

### 1. Health Check
`GET /api/health`
- **Response**: `{ status: "healthy", clinic: "Aura Medical & Aesthetic Clinic DHA Lahore" }`

### 2. Submit Consultation Request
`POST /api/appointments`
- **Headers**: `Content-Type: application/json`
- **Body Example**:
```json
{
  "fullName": "Fatima Tariq",
  "email": "fatima.tariq@example.com",
  "phone": "+92 300 4882119",
  "treatment": "Facial Aesthetics & Sculpting",
  "preferredDate": "2026-11-20",
  "preferredTime": "Morning (10:00 AM – 01:00 PM)",
  "additionalMessage": "Inquiring about lip contouring and cheek definition."
}
```
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Consultation request received successfully. Our patient coordination desk in DHA Phase 5 will contact you to finalize your appointment slot.",
  "data": {
    "referenceNumber": "AURA-847291",
    "fullName": "Fatima Tariq",
    "treatment": "Facial Aesthetics & Sculpting",
    "preferredDate": "2026-11-20",
    "preferredTime": "Morning (10:00 AM – 01:00 PM)",
    "status": "pending_review",
    "clinicLocation": "DHA Phase 5, Lahore"
  }
}
```

### 3. Retrieve Appointments (Staff Review)
`GET /api/appointments`
- **Response (200 OK)**:
```json
{
  "success": true,
  "count": 1,
  "data": [...]
}
```
