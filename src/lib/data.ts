import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ServiceItem {
  slug: string; title: string; shortDesc: string; description: string;
  icon: string; image: string; features: string[]; pricing: string;
}

export const services: Record<string, ServiceItem> = {
  "piano-lessons": {
    slug: "piano-lessons", title: "Piano Lessons",
    shortDesc: "Classical to contemporary — master the keys with personalized instruction.",
    description: "Our piano program caters to beginners through advanced students, covering classical repertoire, jazz improvisation, pop accompaniment, and music theory. Each lesson is tailored to your goals — whether you dream of performing Chopin or accompanying your favorite songs.",
    icon: "faMusic", image: "/images/services/piano-lessons.jpg",
    features: ["All ages 5+", "Classical & contemporary", "ABRSM & RCM exam prep", "Steinway grand pianos", "30/45/60-min lessons", "Recital opportunities"],
    pricing: "$45–$65 / lesson",
  },
  "guitar-lessons": {
    slug: "guitar-lessons", title: "Guitar Lessons",
    shortDesc: "Acoustic, electric, or bass — find your sound with expert guidance.",
    description: "From fingerstyle acoustic to high-gain electric, our guitar instructors cover every style. Learn chords, scales, soloing, and music reading at your own pace. We offer acoustic, electric, and bass guitar lessons for all levels.",
    icon: "faGuitar", image: "/images/services/guitar-lessons.jpg",
    features: ["Acoustic & electric", "Bass guitar available", "Rock, blues, jazz, folk", "Tab & notation reading", "Band coaching", "Recording studio access"],
    pricing: "$40–$60 / lesson",
  },
  "voice-coaching": {
    slug: "voice-coaching", title: "Voice Coaching",
    shortDesc: "Build confidence, range, and technique with professional vocal training.",
    description: "Discover your true voice with our holistic vocal coaching program. We focus on breath support, pitch accuracy, tone development, and performance skills. Whether you're preparing for auditions or singing for joy, our coaches will guide you every step.",
    icon: "faMicrophone", image: "/images/services/voice-coaching.jpg",
    features: ["Breath & technique", "Range expansion", "Genre versatility", "Audition prep", "Stage presence", "Recording sessions"],
    pricing: "$50–$70 / lesson",
  },
  "violin-lessons": {
    slug: "violin-lessons", title: "Violin Lessons",
    shortDesc: "Suzuki method, classical training, and fiddle styles for all ages.",
    description: "Our violin program combines Suzuki methodology with traditional classical training. Students progress through carefully graded repertoire while developing proper technique, intonation, and musical expression.",
    icon: "faMusic", image: "/images/services/violin-lessons.jpg",
    features: ["Suzuki method", "Classical & fiddle", "Ages 4+", "Orchestra prep", "Bow technique focus", "Chamber groups"],
    pricing: "$45–$65 / lesson",
  },
  "drum-lessons": {
    slug: "drum-lessons", title: "Drum Lessons",
    shortDesc: "Rhythm fundamentals to advanced grooves — feel the beat come alive.",
    description: "Learn drum set technique, reading, and groove in our professional drum studio. From basic rock beats to complex jazz patterns, our instructors help you develop timing, coordination, and musicality on a full acoustic kit.",
    icon: "faDrum", image: "/images/services/drum-lessons.jpg",
    features: ["Full acoustic kits", "Rock, jazz, funk, Latin", "Rudiment mastery", "Reading charts", "Ensemble playing", "Recording projects"],
    pricing: "$40–$60 / lesson",
  },
  "music-theory": {
    slug: "music-theory", title: "Music Theory",
    shortDesc: "Understand the language of music — harmony, composition, and ear training.",
    description: "Music theory is the foundation of all musical understanding. Our comprehensive theory program covers notation, scales, chords, harmonic analysis, ear training, and composition. Perfect for students preparing for exams or wanting to deepen their musicianship.",
    icon: "faBookOpen", image: "/images/services/music-theory.jpg",
    features: ["ABRSM & AP prep", "Harmonic analysis", "Ear training", "Composition", "Sight-singing", "All skill levels"],
    pricing: "$35–$55 / lesson",
  },
  "group-classes": {
    slug: "group-classes", title: "Group Classes",
    shortDesc: "Learn together — ensemble, choir, and group instrument classes.",
    description: "Music is better together! Our group classes foster collaboration, listening skills, and ensemble awareness. Choose from group piano, guitar ensemble, vocal choir, chamber strings, or rock band coaching. Small class sizes ensure individual attention.",
    icon: "faUsers", image: "/images/services/group-classes.jpg",
    features: ["Small groups (4–8)", "Ensemble coaching", "Choir & vocal groups", "Rock bands", "Chamber groups", "Performance showcases"],
    pricing: "$25–$35 / session",
  },
  "online-lessons": {
    slug: "online-lessons", title: "Online Lessons",
    shortDesc: "Professional instruction from anywhere — live, interactive video lessons.",
    description: "Can't make it to the studio? Our online lessons deliver the same high-quality instruction via HD video. All instruments covered, with screen sharing for sheet music and recorded sessions for practice review.",
    icon: "faLaptop", image: "/images/services/online-lessons.jpg",
    features: ["HD video platform", "Screen sharing", "Session recordings", "All instruments", "Flexible scheduling", "Global access"],
    pricing: "$35–$55 / lesson",
  },
};

export interface ProjectItem {
  slug: string; title: string; description: string; image: string; date: string; category: string;
}

export const projects: ProjectItem[] = [
  { slug: "student-recitals", title: "Spring Student Recital", description: "Our biannual recital showcases student progress across all instruments in a supportive, celebratory atmosphere.", image: "/images/projects/student-recitals.jpg", date: "May 2026", category: "Recital" },
  { slug: "competition-winners", title: "Regional Competition Winners", description: "Three NoteWise students placed top-3 at the Pacific Northwest Young Musicians Competition.", image: "/images/projects/competition-winners.jpg", date: "March 2026", category: "Competition" },
  { slug: "community-performances", title: "Community Outreach Concert", description: "Our students performed at local senior centers, bringing live music to those who need it most.", image: "/images/projects/community-performances.jpg", date: "April 2026", category: "Community" },
  { slug: "summer-music-camp", title: "Summer Music Camp 2026", description: "A week-long immersive camp featuring masterclasses, ensemble workshops, songwriting, and a final showcase concert.", image: "/images/projects/summer-music-camp.jpg", date: "July 2026", category: "Camp" },
  { slug: "holiday-concert", title: "Annual Holiday Concert", description: "Our biggest event of the year — a festive evening of seasonal music performed by students and faculty.", image: "/images/projects/holiday-concert.jpg", date: "December 2025", category: "Concert" },
  { slug: "open-mic-night", title: "Monthly Open Mic Night", description: "A casual, supportive space for students to try new material, collaborate, and build stage confidence.", image: "/images/projects/open-mic-night.jpg", date: "Ongoing", category: "Event" },
];

export const pricingPlans = [
  { name: "Starter", price: "$149", period: "/month", description: "Perfect for beginners exploring their musical journey.", features: ["4 x 30-min lessons/month", "One instrument of choice", "Practice room access", "Monthly group workshop", "Digital sheet music library"], cta: "Get Started", popular: false },
  { name: "Accelerator", price: "$249", period: "/month", description: "For dedicated students ready to level up fast.", features: ["4 x 45-min lessons/month", "Two instruments allowed", "Unlimited practice rooms", "Weekly group workshops", "2 recital spots/year", "Recording session credit", "Theory workbook included"], cta: "Most Popular", popular: true },
  { name: "Virtuoso", price: "$399", period: "/month", description: "The complete experience for serious musicians.", features: ["4 x 60-min lessons/month", "All instruments included", "Priority scheduling", "Daily practice room access", "Unlimited recital spots", "4 recording sessions/year", "Competition coaching", "Personal practice plan"], cta: "Go Pro", popular: false },
];

export const testimonials = [
  { name: "Sarah M.", role: "Parent of Piano Student", text: "My daughter has grown so much in confidence since starting at NoteWise. The instructors are patient, skilled, and truly care about each student.", rating: 5 },
  { name: "James K.", role: "Adult Guitar Student", text: "I started guitar at 42 thinking I was too old. My instructor made the process fun and I'm now playing songs I love. Never too late!", rating: 5 },
  { name: "Emily R.", role: "Voice Student, 16", text: "The voice coaching here transformed my singing. I went from being terrified of auditions to landing the lead in my school musical.", rating: 5 },
  { name: "David L.", role: "Parent of Drum Student", text: "Finding a drum teacher who can keep my 10-year-old engaged while teaching real technique was a challenge until we found NoteWise.", rating: 5 },
  { name: "Maya T.", role: "Violin Student, 12", text: "I love the Suzuki method and my teacher makes every lesson fun. The group classes help me make friends who love music too!", rating: 5 },
];

export const faqs = [
  { q: "What ages do you teach?", a: "We teach students from age 4 through adult. Our instructors are trained to work with children, teens, and adults at every skill level." },
  { q: "Do I need my own instrument?", a: "For most instruments, having your own to practice on at home is essential. We can help with rental recommendations." },
  { q: "How long are lessons?", a: "We offer 30, 45, and 60-minute lessons depending on age, level, and goals. Beginners typically start with 30 minutes." },
  { q: "Is the first lesson really free?", a: "Yes! We offer a no-obligation trial lesson so you can meet your instructor, see our studio, and experience our teaching approach." },
  { q: "Do you prepare students for exams?", a: "Absolutely. We prepare students for ABRSM, RCM, and AP Music Theory exams. Many achieve distinction-level results." },
  { q: "Can I switch instruments?", a: "Of course! Many students explore multiple instruments. Our Accelerator and Virtuoso plans include multi-instrument options." },
];

// Icon name mapping for JSX usage
export const iconNames: Record<string, string> = {
  "piano-lessons": "faMusic", "guitar-lessons": "faGuitar", "voice-coaching": "faMicrophone",
  "violin-lessons": "faMusic", "drum-lessons": "faDrum", "music-theory": "faBookOpen",
  "group-classes": "faUsers", "online-lessons": "faLaptop",
};
