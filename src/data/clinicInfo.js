/**
 * Aura Medical & Aesthetic Clinic - Clinic Information & Configuration
 * Tailored for demonstration to aesthetic and plastic surgery practices in DHA Lahore.
 */

export const clinicInfo = {
  name: "Aura Medical & Aesthetic Clinic",
  shortName: "Aura Clinic",
  tagline: "Your Beauty. Your Confidence. Our Expertise.",
  subTagline: "Discover personalized aesthetic and cosmetic care designed around your goals. Experience professional consultations and thoughtful treatment planning in a welcoming clinical environment.",
  
  location: {
    address: "Plot 42-C, Commercial Zone, Sector C, DHA Phase 5, Lahore, Pakistan",
    shortAddress: "DHA Phase 5, Lahore",
    landmark: "Near Jalal Sons & DHA Raya Club corridor",
    city: "Lahore",
    province: "Punjab",
    postalCode: "54792",
    country: "Pakistan",
    coordinates: {
      lat: 31.4697,
      lng: 74.3856
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.485124976722!2d74.3856112!3d31.4697232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190623d3e69bb1%3A0x6b8eb6a7c3cecb2e!2sDHA%20Phase%205%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
  },

  contact: {
    phone: "+92 42 3574 8900",
    phoneRaw: "+924235748900",
    mobile: "+92 300 488 2119",
    whatsapp: "+923004882119",
    whatsappDisplay: "+92 300 488 2119",
    email: "consultations@auraclinic.pk",
    generalEmail: "info@auraclinic.pk"
  },

  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 08:00 PM" },
    { days: "Saturday", time: "11:00 AM – 06:00 PM" },
    { days: "Sunday", time: "Closed (Prior Surgical Booking Only)" }
  ],

  doctor: {
    name: "Dr. Ayesha Tariq Malik",
    prefix: "Dr.",
    role: "Lead Consultant Plastic, Reconstructive & Aesthetic Surgeon",
    department: "Department of Aesthetic Medicine & Surgical Contouring",
    qualifications: "MBBS (KEMU), FCPS (Plastic Surgery), Fellow Aesthetic Surgery (ISAPS)",
    registration: "PMDC Specialist Reg. #48921-P",
    experienceYears: "14+ Years",
    image: "/src/assets/images/doctor_specialist_portrait_1794214516530.jpg",
    bio: "With over 14 years of surgical and clinical excellence, Dr. Ayesha Tariq Malik leads Aura Clinic with a patient-first ethos centered on anatomic precision, natural balance, and subtle aesthetic restoration. Having trained in renowned medical centers and completed international fellowships in advanced facial harmony and non-invasive rejuvenation, Dr. Malik designs bespoke treatment plans aligned with your unique personal objectives in a discreet, welcoming DHA Lahore setting.",
    specialties: [
      "Precision Facial Harmony & Structural Contouring",
      "Surgical & Non-Surgical Rhinoplasty",
      "Advanced Laser Dermatologic Interventions",
      "Full-Spectrum Body Contouring & Liposculpture",
      "Evidence-Based Skin Rejuvenation Protocols"
    ],
    memberships: [
      "Pakistan Association of Plastic Surgeons (PAPS)",
      "International Society of Aesthetic Plastic Surgery (ISAPS)",
      "Pakistan Medical Commission Certified Specialist"
    ]
  },

  stats: [
    { label: "Years of Experience", value: 14, suffix: "+", description: "Dedication to surgical and aesthetic mastery" },
    { label: "Treatments Offered", value: 35, suffix: "+", description: "Comprehensive surgical and non-surgical procedures" },
    { label: "Patient Consultations", value: 12000, suffix: "+", description: "Trusted by patients across Lahore and overseas" },
    { label: "Professional Services", value: 100, suffix: "%", description: "Board-certified standards and sterile protocols" }
  ],

  values: [
    {
      title: "Personalized Consultations",
      description: "Every aesthetic journey begins with an unhurried, private consultation to thoroughly evaluate your facial anatomy, medical history, and aesthetic aspirations."
    },
    {
      title: "Patient-Centered Approach",
      description: "We believe in authentic results that accentuate your natural beauty rather than creating exaggerated or artificial changes."
    },
    {
      title: "Professional Clinical Environment",
      description: "Our state-of-the-art facility in DHA Phase 5 complies with international sterile medical standards and patient privacy protocols."
    },
    {
      title: "Individualized Treatment Planning",
      description: "No two faces or bodies are identical. Your physician custom-tailors non-surgical and surgical options to match your lifestyle and timeline."
    },
    {
      title: "Transparent Communication",
      description: "We provide clear expectations regarding procedure steps, downtime, realistic outcomes, and comprehensive post-treatment aftercare."
    },
    {
      title: "Commitment to Patient Safety",
      description: "All procedures are performed or directly supervised by qualified medical specialists using FDA-approved equipment and authentic products."
    }
  ]
};
