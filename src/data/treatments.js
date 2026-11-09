/**
 * Aura Medical & Aesthetic Clinic - Treatment Catalog Data
 * All treatment information is centralized here for easy updates and maintenance.
 */

export const treatmentCategories = [
  { id: "all", label: "All Treatments" },
  { id: "facial", label: "Facial Aesthetics" },
  { id: "surgery", label: "Cosmetic & Plastic Surgery" },
  { id: "laser", label: "Laser & Skin Therapy" },
  { id: "body", label: "Body Contouring" }
];

export const treatments = [
  {
    id: "facial-aesthetics",
    slug: "facial-aesthetics",
    title: "Facial Aesthetics & Sculpting",
    category: "facial",
    categoryLabel: "Facial Aesthetics",
    image: "/src/assets/images/treatment_facial_aesthetics_1794214516440.jpg",
    shortDescription: "Precision neuromodulators, hyaluronic acid dermal fillers, and structural volumization tailored for natural facial balance.",
    fullDescription: "Our non-surgical facial aesthetics approach focuses on micro-precision and structural harmony. Using premium, FDA-approved hyaluronic acid fillers and targeted neuromodulators, Dr. Malik restores lost volume, softens dynamic expression lines, and refines cheek and jaw contours while preserving authentic facial dynamics.",
    duration: "30 – 45 Minutes",
    downtime: "Zero to Minimal (1–2 days mild tenderness)",
    anesthesia: "Topical anesthetic cream",
    isFeatured: true,
    targetConcerns: [
      "Nasolabial folds and marionette lines",
      "Volume depletion in cheeks and midface",
      "Subtle lip definition and hydration",
      "Forehead lines, crow's feet, and frown lines",
      "Jawline contouring and chin projection"
    ],
    benefits: [
      "Natural, refreshed appearance without an 'overdone' look",
      "Immediate structural improvement with minimal social downtime",
      "Customized anatomical mapping for each individual face",
      "Reversible and biocompatible premium dermal gels"
    ],
    idealFor: "Patients seeking youthful rejuvenation, refreshed facial definition, or symmetry correction without surgical intervention."
  },
  {
    id: "rhinoplasty",
    slug: "rhinoplasty",
    title: "Rhinoplasty & Profile Harmony",
    category: "surgery",
    categoryLabel: "Cosmetic & Plastic Surgery",
    image: "/src/assets/images/treatment_rhinoplasty_contour_1794214516899.jpg",
    shortDescription: "Custom surgical and non-surgical nasal reshaping designed to harmonize the nose with your individual facial proportions.",
    fullDescription: "Rhinoplasty requires an exquisite blend of surgical precision and artistic sensibility. Whether addressing aesthetic concerns such as a dorsal hump, nasal tip refinement, or functional septal deviations, Dr. Malik performs comprehensive anatomical assessments to ensure structural stability, improved breathing, and proportional harmony with your forehead, lips, and chin.",
    duration: "1.5 – 3 Hours (Surgical) / 20 Mins (Liquid)",
    downtime: "7 – 10 Days for cast removal; social activities resume in 2 weeks",
    anesthesia: "General Anesthesia / Local with Sedation",
    isFeatured: true,
    targetConcerns: [
      "Dorsal nasal hump or bridge irregularities",
      "Bulbous, drooping, or asymmetric nasal tip",
      "Deviated septum causing airway obstruction",
      "Disproportionate nasal width or length",
      "Post-traumatic deformities or previous rhinoplasty refinement"
    ],
    benefits: [
      "Balanced profile that naturally complements facial structure",
      "Simultaneous functional improvement in nasal respiration",
      "Personalized 3D surgical planning and consultation preview",
      "Advanced closed and open preservation rhinoplasty techniques"
    ],
    idealFor: "Individuals desiring long-term profile balance, refined nasal contours, or structural airway improvement."
  },
  {
    id: "skin-laser",
    slug: "laser-rejuvenation",
    title: "Laser Treatments & Skin Resurfacing",
    category: "laser",
    categoryLabel: "Laser & Skin Therapy",
    image: "/src/assets/images/treatment_laser_rejuvenation_1794214517081.jpg",
    shortDescription: "Advanced medical-grade laser technologies for deep skin texture renewal, pigmentation clearance, and collagen induction.",
    fullDescription: "Utilizing clinical-grade fractional laser platforms and selective photothermolysis, this therapy stimulates deep dermal remodeling. It safely targets stubborn hyperpigmentation, melasma, sun damage, enlarged pores, and uneven texture while encouraging fresh neocollagenesis for firmer, radiant skin.",
    duration: "45 – 60 Minutes",
    downtime: "2 – 4 Days mild redness and microscopic peeling",
    anesthesia: "Topical cooling and numbing cream",
    isFeatured: true,
    targetConcerns: [
      "Stubborn sun spots, freckles, and melasma patches",
      "Fine lines around the eyes and perioral region",
      "Dilated facial pores and rough cutaneous texture",
      "Skin laxity and loss of collagen resilience",
      "Dull complexion and environmental oxidative wear"
    ],
    benefits: [
      "Noticeably clearer, more luminous skin tone",
      "Clinically verified stimulation of elastin and collagen",
      "Adjustable energy depths tailored to Asian and South Asian skin phototypes",
      "Cumulative textural refinement across scheduled sessions"
    ],
    idealFor: "Patients seeking radiant skin clarity, reduced pigmentation, and refined skin texture without invasive surgery."
  },
  {
    id: "body-contouring",
    slug: "body-contouring",
    title: "Body Contouring & High-Definition Sculpting",
    category: "body",
    categoryLabel: "Body Contouring",
    image: "/src/assets/images/treatment_rhinoplasty_contour_1794214516899.jpg",
    shortDescription: "Advanced surgical liposculpting and non-invasive tissue tightening to shape natural curves and accentuate athletic definition.",
    fullDescription: "Body contouring procedures help individuals refine resistant adipose deposits that persist despite disciplined diet and fitness. Dr. Malik utilizes ultrasound-assisted VASER liposculpture to selectively liberate fat cells while preserving surrounding delicate blood vessels, resulting in smooth transitions, skin retraction, and elegant athletic contours.",
    duration: "1.5 – 3.5 Hours",
    downtime: "4 – 7 Days light rest; compression garment worn for 4 weeks",
    anesthesia: "General or Tumescent Local Anesthesia",
    isFeatured: true,
    targetConcerns: [
      "Stubborn abdominal, flank, and love-handle fat deposits",
      "Post-pregnancy abdominal wall laxity and contour irregularities",
      "Inner and outer thigh disproportion",
      "Upper arm fullness ('bat wings')",
      "Submental chin fullness and neck angle definition"
    ],
    benefits: [
      "Permanent reduction of targeted adipose cells",
      "Selective VASER technology enhances skin retraction",
      "Sculpted contours that respect natural musculature",
      "Discreet, concealed micro-incisions"
    ],
    idealFor: "Men and women close to their ideal body weight who desire focused sculpting and refined silhouettes."
  },
  {
    id: "medical-dermatology",
    slug: "medical-dermatology",
    title: "Medical Dermatology & Acne Scar Revision",
    category: "laser",
    categoryLabel: "Laser & Skin Therapy",
    image: "/src/assets/images/treatment_facial_aesthetics_1794214516440.jpg",
    shortDescription: "Specialized clinical protocols combining subcision, microneedling RF, and targeted biologics for persistent scarring and skin conditions.",
    fullDescription: "Acne scarring requires a multi-modality medical approach. Dr. Malik combines mechanical subcision of tethered fibrous bands, cross-peeling (TCA CROSS), and fractional radiofrequency microneedling to break scar tissue and elevate depressed atrophic scars, delivering lasting structural renewal for smoother skin.",
    duration: "45 – 75 Minutes",
    downtime: "3 – 5 Days mild swelling and micro-crusting",
    anesthesia: "Local nerve block and topical numbing",
    isFeatured: true,
    targetConcerns: [
      "Rolling, boxcar, and ice-pick acne scars",
      "Persistent post-inflammatory erythema (red marks)",
      "Enlarged sebaceous pores and active congestion",
      "Surgical or traumatic scar revision",
      "Rosacea and diffuse facial flushing"
    ],
    benefits: [
      "Substantial elevation of depressed scar indentations",
      "Synergistic combination therapies tailored to scar typology",
      "Deep dermal collagen remodeling without superficial thermal damage",
      "Safe and calibrated for South Asian Fitzpatrick skin types"
    ],
    idealFor: "Individuals dealing with frustrating post-acne scarring, textured complexion, or complex dermatologic concerns."
  },
  {
    id: "anti-aging-longevity",
    slug: "anti-aging-longevity",
    title: "Bioremodeling & Longevity Aesthetics",
    category: "facial",
    categoryLabel: "Facial Aesthetics",
    image: "/src/assets/images/hero_clinic_consultation_1794214515994.jpg",
    shortDescription: "Regenerative aesthetic treatments including Profhilo bio-remodeling, polynucleotides, and exosome cellular skin therapy.",
    fullDescription: "Moving beyond traditional volume replacement, bioremodeling works at the cellular level to trigger intense hydration and neocollagenesis. Using thermally stabilized high-and-low molecular weight hyaluronic acid (Profhilo) and salmon-DNA derived polynucleotides, this therapy restores elasticity, firming the skin matrix of the face, neck, and hands.",
    duration: "30 Minutes",
    downtime: "Minimal (tiny localized papules dissipate in 12–24 hours)",
    anesthesia: "Ice pack / Topical numbing cream",
    isFeatured: true,
    targetConcerns: [
      "Crepey, thin skin on the neck, décolletage, and hands",
      "Loss of intrinsic skin turgor and resilience",
      "Under-eye dark circles and tissue depletion",
      "Dull, dehydrated skin lacking inner luminosity",
      "Early preventative pre-juvenation in 30s and 40s"
    ],
    benefits: [
      "Deep cellular hydration without altering facial shapes or structure",
      "Stimulates 4 different types of collagen and elastin",
      "Fast 5-point injection technique with rapid recovery",
      "Visibly plump, firm, and dewy cutaneous canvas"
    ],
    idealFor: "Anyone seeking natural skin quality enhancement, intense hydration, and biological firmness without artificial filling."
  }
];

export const treatmentFaqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer: "Every patient begins with a personalized consultation with Dr. Ayesha Tariq Malik. We evaluate your facial anatomy, skin quality, medical background, and aesthetic goals. We then explain the suitable non-surgical and surgical options, transparently discussing expected results, downtime, and investment."
  },
  {
    question: "Are aesthetic procedures performed in a sterile surgical environment?",
    answer: "Yes, absolute clinical safety is our paramount priority. All procedures are conducted inside our DHA Phase 5 facility adhering to international sterile operating theater standards, utilizing single-use disposable consumables and FDA-approved medical technologies."
  },
  {
    question: "What is the recovery period for non-surgical vs surgical treatments?",
    answer: "Non-surgical procedures (such as bioremodeling, laser therapy, and dermal fillers) generally require 0 to 48 hours of social downtime. Surgical procedures (such as rhinoplasty or liposculpture) typically involve 7 to 10 days of rest before resuming regular office or social routines."
  },
  {
    question: "How is patient confidentiality and privacy maintained?",
    answer: "Aura Clinic operates with strict medical confidentiality. We provide private consultation suites, staggered appointment scheduling to minimize waiting room interaction, and discrete private entry and departure facilities for surgical patients."
  },
  {
    question: "How soon can I schedule an in-person consultation?",
    answer: "Consultation slots in DHA Lahore are arranged by appointment. You can submit an appointment request through our website or contact our patient desk via WhatsApp at +92 300 488 2119. Our coordinator will contact you promptly to confirm availability."
  }
];
