# Aura Medical & Aesthetic Clinic — Premium Clinic Website & Booking Platform

**Aura Craft Labs Limited** — Production-ready medical, plastic surgery, dermatology, and aesthetic clinic web platform developed for demonstration and client deployment across **DHA Lahore, Pakistan**.

---

## 1. Project Overview

This website establishes a trustworthy, high-performance digital presence for prestige medical and aesthetic practices in DHA Lahore (Phase 5, Phase 6, Raya, and surrounding areas).

### Key Highlights
- **Three Fully Implemented Pages**:
  1. **Home (`/`)**: High-impact cinematic hero, statistics counters, clinical philosophy introduction, 6 featured treatment cards with hover effects, Why Choose Us clinical safety pillars, Doctor Specialist profile with qualifications, patient testimonials slider, and conversion CTA.
  2. **Treatments & Services (`/treatments`)**: Filterable treatment catalog (Facial Aesthetics, Cosmetic Surgery, Laser & Skin Therapy, Body Contouring), interactive treatment detail modals, four-tier clinical protocol breakdown, and treatment FAQ accordion.
  3. **Contact & Appointment Booking (`/contact`)**: Validated consultation booking form with reference code generation, immediate WhatsApp inquiry link, clinic contact details (DHA Phase 5, phone, hours), and interactive Google Maps embed.
- **REST API Backend**: Node.js & Express API with MongoDB Mongoose models, input validation, duplicate prevention, and centralized error handling.
- **DHA Lahore Local Business SEO**: Schema.org JSON-LD `MedicalClinic` structured data, OpenGraph cards, Twitter cards, meta descriptions, sitemap.xml, and robots.txt.
- **Zero-Pill Design Discipline & Anti-AI Slop**: Modern typography pairing (Plus Jakarta Sans & Manrope), unboxed metadata, 60-30-10 color allocation, and no generic purple gradients or fake status telemetry.

---

## 2. Design System & Color Palette

- **Primary**: `#159FA5` (Clean medical turquoise/teal)
- **Dark Surface**: `#173A45` (Deep slate teal for contrast headers, counters, and footer)
- **Secondary Accent**: `#EAF7F7` (Soft airy teal surface)
- **Canvas Background**: `#FFFFFF`
- **Subtle Surface**: `#F6FAFA`
- **Body Text**: `#26383D` (High contrast, readable charcoal)
- **Muted Text**: `#73858A` (Refined clinical grey)
- **Typography**: Plus Jakarta Sans (Body) & Manrope (Headings) via Google Fonts.

---

## 3. Architecture & Project Layout

```
/
├── backend/                             # Standalone Node.js & Express backend application
│   ├── config/
│   │   └── db.js                        # MongoDB Mongoose connection
│   ├── controllers/
│   │   └── appointmentController.js     # Request validation, booking logic & duplicate guard
│   ├── middleware/
│   │   └── errorHandler.js              # Centralized error handler
│   ├── models/
│   │   └── Appointment.js               # Mongoose schema for consultation bookings
│   ├── routes/
│   │   └── appointmentRoutes.js         # /api/appointments route definitions
│   ├── .env.example                     # Backend environment template
│   ├── package.json                     # Standalone backend dependencies
│   ├── server.js                        # Standalone Express server (port 5000)
│   └── README.md                        # Dedicated backend guide
│
├── public/
│   ├── robots.txt                       # Search engine crawler directives
│   └── sitemap.xml                      # XML Sitemap for SEO indexing
│
├── src/
│   ├── assets/
│   │   └── images/                      # High-resolution clinical consultation & treatment photography
│   ├── components/
│   │   ├── AppointmentForm.jsx          # Validated booking form with feedback & reference number
│   │   ├── Button.jsx                   # Reusable accessible button (primary, secondary, outline, ghost)
│   │   ├── ClinicIntro.jsx              # Clinic introduction & philosophy
│   │   ├── ContactInfo.jsx              # DHA Lahore clinic address, phone, hours & privacy note
│   │   ├── DoctorProfile.jsx            # Lead consultant surgeon profile & certifications
│   │   ├── FinalCta.jsx                 # High-intent consultation booking banner
│   │   ├── Footer.jsx                   # Comprehensive medical practice footer
│   │   ├── GoogleMapsEmbed.jsx          # Interactive Google Maps embed for DHA Phase 5
│   │   ├── Hero.jsx                     # Cinematic hero with consultation visual & floating card
│   │   ├── Navbar.jsx                   # Sticky top navigation adhering to Top Bar Contract
│   │   ├── SectionHeading.jsx           # Clean editorial section headers
│   │   ├── Statistics.jsx               # Tabular milestone metrics counters
│   │   ├── Testimonials.jsx             # Sample patient experiences slider (clearly labeled)
│   │   ├── TreatmentCard.jsx            # Individual treatment showcase card
│   │   ├── TreatmentDetailModal.jsx     # Deep dive procedure modal with direct booking trigger
│   │   ├── TreatmentGrid.jsx            # Filterable category grid for procedures
│   │   ├── WhatsAppButton.jsx           # Floating WhatsApp consultation button
│   │   └── WhyChooseUs.jsx              # 6 pillars of clinical integrity and safety
│   ├── data/
│   │   ├── clinicInfo.js                # Centralized clinic data (DHA Lahore address, phone, doctor)
│   │   ├── treatments.js                # Treatment catalog, category taxonomy, and FAQs
│   │   └── testimonials.js              # Sample patient demonstration narratives
│   ├── layouts/
│   │   └── MainLayout.jsx               # Root layout with auto-scroll-to-top on navigation
│   ├── pages/
│   │   ├── Home.jsx                     # Complete homepage
│   │   ├── Treatments.jsx               # Treatments & services listing with detailed protocol
│   │   └── Contact.jsx                  # Contact details, appointment form, and maps
│   ├── App.tsx                          # React Router configuration
│   ├── index.css                        # Tailwind CSS v4 directives & typography tokens
│   └── main.tsx                         # React entry point
│
├── server.ts                            # Full-stack server running Express with Vite dev middleware
├── index.html                           # SEO metadata, fonts & Schema.org JSON-LD
├── package.json                         # Unified full-stack dependencies
└── tsconfig.json
```

---

## 4. Running the Application

### Option A: Unified Full-Stack Run (Recommended for AI Studio & Development)

The root configuration runs Express + Vite middleware concurrently on port `3000`:

```bash
# 1. Install dependencies
npm install

# 2. Start unified server
npm run dev
```

Visit `http://localhost:3000`. Both the frontend and backend API (`/api/appointments`) are fully active.

---

### Option B: Running Frontend and Backend Separately

To run the frontend and backend as two completely independent processes:

#### 1. Start the Backend API (Port 5000):
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
The backend API starts on `http://localhost:5000` with MongoDB connection.

#### 2. Start the Frontend (Port 3000):
In a separate terminal:
```bash
npm run dev
```

---

## 5. Client Customization Guide for DHA Lahore Clinics

When onboarding a new clinic client in DHA Lahore:

1. **Update Clinic Contact & Location**:
   Edit `src/data/clinicInfo.js` to change clinic name, phone, WhatsApp number, address (e.g., Phase 5 vs. Phase 6), and consultation hours.
2. **Update Doctor Specialist Details**:
   Edit the `doctor` object in `src/data/clinicInfo.js` with the physician's real PMDC number, qualifications, and biography.
3. **Customize Treatments**:
   Edit `src/data/treatments.js` to add, remove, or adjust procedure pricing, downtime, or clinical protocols.
4. **Update SEO Coordinates & Schema**:
   In `index.html`, update the `streetAddress` and `geo` coordinates to reflect the client's exact clinic location.
