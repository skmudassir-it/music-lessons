import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic, faGuitar, faDrum, faMicrophone, faUserGraduate,
  faUsers, faStar, faArrowLeft, faCheckCircle, faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceDetail {
  title: string;
  description: string;
  icon: any;
  longDescription: string;
  features: string[];
  levels: string[];
  pricing: { duration: string; price: string; note?: string }[];
  relatedSlugs: string[];
}

const services: Record<string, ServiceDetail> = {
  "piano-lessons": {
    title: "Piano Lessons",
    description: "Master the keys with expert piano instruction",
    icon: faMusic,
    longDescription: "Our piano program welcomes students from age 5 through adult, from absolute beginners to advanced performers. We offer classical training rooted in proper technique and music reading, alongside jazz, pop, and contemporary styles. Our instructors tailor each lesson to the student's goals — whether that's preparing for ABRSM exams, learning to accompany themselves singing, or simply playing for the joy of it.",
    features: ["One-on-one personalized instruction", "Classical, jazz, pop & contemporary repertoire", "Sight-reading, ear training & music theory integrated", "ABRSM & RCM exam preparation available", "Regular performance & recital opportunities", "Flexible scheduling — 30, 45, or 60-minute lessons"],
    levels: ["Beginner (ages 5+)", "Intermediate", "Advanced", "Adult Learners"],
    pricing: [
      { duration: "30 minutes", price: "$40", note: "Recommended for beginners" },
      { duration: "45 minutes", price: "$55", note: "Most popular" },
      { duration: "60 minutes", price: "$70", note: "Best for serious students" },
    ],
    relatedSlugs: ["music-theory", "group-classes", "recital-prep"],
  },
  "guitar-lessons": {
    title: "Guitar Lessons",
    description: "Acoustic, electric & bass guitar instruction",
    icon: faGuitar,
    longDescription: "Guitar lessons at HarmonyKeys cover acoustic, electric, and bass guitar across all genres — rock, blues, jazz, classical, fingerstyle, and more. Our instructors focus on building a strong foundation in technique while keeping lessons fun and engaging with songs you love. From power chords to complex solos, we'll help you achieve your musical goals.",
    features: ["Acoustic, electric & bass guitar instruction", "Tab reading & standard notation", "Chord theory & scale mastery", "Improvisation & soloing techniques", "Songwriting & composition guidance", "Gear & tone advice"],
    levels: ["Beginner", "Intermediate", "Advanced", "Adult Beginners"],
    pricing: [
      { duration: "30 minutes", price: "$40", note: "Recommended for beginners" },
      { duration: "45 minutes", price: "$55", note: "Most popular" },
      { duration: "60 minutes", price: "$70", note: "Best for serious students" },
    ],
    relatedSlugs: ["music-theory", "group-classes", "drum-lessons"],
  },
  "violin-lessons": {
    title: "Violin Lessons",
    description: "Classical violin & fiddle instruction",
    icon: faMusic,
    longDescription: "Our violin program combines traditional classical training with opportunities to explore fiddle and contemporary styles. Students learn proper posture, bow technique, intonation, and expressive phrasing. We offer Suzuki method for young beginners and traditional method for older students, with preparation available for youth orchestra auditions and competitions.",
    features: ["Classical violin & fiddle styles", "Suzuki method available (ages 4+)", "Bow technique & posture", "Orchestra & ensemble preparation", "Competition & audition coaching", "Regular recital performances"],
    levels: ["Suzuki Early Start (ages 4-7)", "Beginner", "Intermediate", "Advanced"],
    pricing: [
      { duration: "30 minutes", price: "$45", note: "Recommended for young beginners" },
      { duration: "45 minutes", price: "$60", note: "Most popular" },
      { duration: "60 minutes", price: "$80", note: "Best for advanced students" },
    ],
    relatedSlugs: ["music-theory", "piano-lessons", "recital-prep"],
  },
  "voice-lessons": {
    title: "Voice Lessons",
    description: "Find your voice with expert vocal coaching",
    icon: faMicrophone,
    longDescription: "Voice lessons at HarmonyKeys help students of all levels develop healthy vocal technique, expand their range, and build performance confidence. Our instructors are experienced in classical, musical theatre, pop, jazz, and contemporary styles. Whether you're preparing for an audition, recording session, or simply want to sing with more ease and expression, we'll guide you every step of the way.",
    features: ["Breath support & diaphragmatic breathing", "Vocal range expansion & registration", "Pitch accuracy & ear training", "Diction, phrasing & expression", "Audition & performance preparation", "Microphone technique & stage presence"],
    levels: ["Beginner", "Intermediate", "Advanced", "Professional Coaching"],
    pricing: [
      { duration: "30 minutes", price: "$40", note: "Recommended for beginners" },
      { duration: "45 minutes", price: "$55", note: "Most popular" },
      { duration: "60 minutes", price: "$75", note: "Best for serious singers" },
    ],
    relatedSlugs: ["music-theory", "piano-lessons", "recital-prep"],
  },
  "drum-lessons": {
    title: "Drum Lessons",
    description: "Rhythm mastery across all styles",
    icon: faDrum,
    longDescription: "Our drum program covers everything from basic stick control and rudiments to advanced groove playing and soloing across rock, jazz, funk, Latin, and metal styles. Students learn on professional acoustic and electronic kits in our sound-treated studio. We emphasize timing, dynamics, and musicality — turning students into complete musicians, not just drummers.",
    features: ["Stick control & rudiments", "Rock, jazz, funk, Latin & metal styles", "Groove development & fills", "Drum notation reading", "Double bass pedal technique", "Recording studio experience"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    pricing: [
      { duration: "30 minutes", price: "$40", note: "Recommended for beginners" },
      { duration: "45 minutes", price: "$55", note: "Most popular" },
      { duration: "60 minutes", price: "$70", note: "Best for advanced students" },
    ],
    relatedSlugs: ["guitar-lessons", "group-classes", "music-theory"],
  },
  "music-theory": {
    title: "Music Theory",
    description: "Understand the language behind the music",
    icon: faUserGraduate,
    longDescription: "Music theory is the foundation that makes everything else make sense. Our theory program covers scales, modes, chord construction, harmonic progressions, form analysis, ear training, and basic composition. Available as standalone lessons or integrated with instrument instruction. Ideal for students preparing for music exams, college auditions, or those who simply want to deepen their musical understanding.",
    features: ["Scales, modes & key signatures", "Chord construction & progressions", "Ear training & interval recognition", "Rhythm & meter analysis", "Form & structure analysis", "Basic composition & arranging"],
    levels: ["Beginner Theory", "Intermediate", "Advanced / AP Music Theory Prep"],
    pricing: [
      { duration: "30 minutes", price: "$40" },
      { duration: "45 minutes", price: "$55", note: "Most popular" },
      { duration: "60 minutes", price: "$70" },
    ],
    relatedSlugs: ["piano-lessons", "guitar-lessons", "violin-lessons"],
  },
  "group-classes": {
    title: "Group Classes",
    description: "Learn together in collaborative small groups",
    icon: faUsers,
    longDescription: "Group classes provide a fun, social environment for learning music. Our small-group format (3-6 students) ensures personal attention while building ensemble skills and peer motivation. Options include beginner group piano, band ensembles, theory workshops, summer intensives, and adult beginner groups. Group classes are more affordable and a great way to start your musical journey with friends.",
    features: ["Small groups (3-6 students maximum)", "Beginner group piano & guitar", "Band & ensemble playing", "Music theory workshops", "Summer intensives & camps", "Adult beginner social groups"],
    levels: ["Beginner Groups", "Intermediate Ensembles", "Mixed-Level Workshops"],
    pricing: [
      { duration: "60 minutes (weekly)", price: "$35/session", note: "Per student, 4-week commitment" },
      { duration: "Summer Intensive (5 days)", price: "$249", note: "3 hours daily, all materials included" },
    ],
    relatedSlugs: ["piano-lessons", "guitar-lessons", "recital-prep"],
  },
  "recital-prep": {
    title: "Recital Preparation",
    description: "Get stage-ready with performance coaching",
    icon: faStar,
    longDescription: "Our recital preparation program is designed for students preparing for performances, auditions, competitions, or recording sessions. We focus on memorization strategies, managing performance anxiety, stage presence, interpretation, and the mental game of performing. Sessions are tailored to the specific piece and venue — whether it's a school talent show, ABRSM exam, or professional audition.",
    features: ["Performance anxiety management", "Memorization & practice strategies", "Interpretation & musicality coaching", "Stage presence & body language", "Mock audition & feedback sessions", "Recording & self-evaluation"],
    levels: ["All Levels"],
    pricing: [
      { duration: "60 minutes", price: "$80", note: "Single coaching session" },
      { duration: "4-session package", price: "$280", note: "Best value — save $40" },
    ],
    relatedSlugs: ["voice-lessons", "piano-lessons", "violin-lessons"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | HarmonyKeys Music Academy`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
          <p className="text-muted-foreground mt-2">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="inline-flex mt-6">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </section>
    );
  }

  const relatedServices = service.relatedSlugs
    .map((s) => ({ slug: s, ...services[s] }))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
          </Link>
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Badge variant="secondary" className="mb-3">{service.title}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h1>
              <div className="gradient-divider w-24 mt-4 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <h2 className="text-xl font-semibold mb-3">What's Included</h2>
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mb-3">Skill Levels</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.levels.map((l) => (
                  <Badge key={l} variant="outline">{l}</Badge>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-2">
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} className="size-5 text-primary" />
                    Pricing
                  </CardTitle>
                  <CardDescription>Choose the right session length for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.pricing.map((p) => (
                    <div key={p.duration} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <div>
                        <div className="font-medium text-sm">{p.duration}</div>
                        {p.note && <div className="text-xs text-muted-foreground">{p.note}</div>}
                      </div>
                      <div className="text-lg font-bold text-primary">{p.price}</div>
                    </div>
                  ))}
                  <Link href="/contact" className="inline-flex w-full mt-4">
                    <Button className="w-full">Book a Lesson</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {relatedServices.map((rs) => (
                <Link key={rs.slug} href={`/services/${rs.slug}`}>
                  <Card className="glass-card transition-shadow hover:shadow-lg h-full">
                    <CardHeader>
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                        <FontAwesomeIcon icon={rs.icon} className="size-4" />
                      </div>
                      <CardTitle className="text-base">{rs.title}</CardTitle>
                      <CardDescription className="text-xs">{rs.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
