"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic, faGuitar, faDrum, faMicrophone, faUserGraduate,
  faArrowRight, faUsers, faStar
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    slug: "piano-lessons",
    title: "Piano Lessons",
    description: "Master the keys with personalized piano instruction for all ages and skill levels. Classical, jazz, pop, and contemporary styles.",
    icon: faMusic,
    image: "/images/services/piano-lessons.jpg",
    features: ["Classical & contemporary repertoire", "Sight-reading & technique", "Exam preparation (ABRSM)", "30/45/60-minute sessions"],
  },
  {
    slug: "guitar-lessons",
    title: "Guitar Lessons",
    description: "Acoustic, electric, and bass guitar lessons tailored to your musical taste — from fingerstyle to shredding solos.",
    icon: faGuitar,
    image: "/images/services/guitar-lessons.jpg",
    features: ["Acoustic & electric guitar", "Chord & scale mastery", "Songwriting & improvisation", "Bass guitar available"],
  },
  {
    slug: "violin-lessons",
    title: "Violin Lessons",
    description: "Develop beautiful tone, precise intonation, and expressive phrasing with our experienced violin instructors.",
    icon: faMusic,
    image: "/images/services/violin-lessons.jpg",
    features: ["Classical & fiddle styles", "Bow technique & posture", "Orchestra audition prep", "Suzuki method available"],
  },
  {
    slug: "voice-lessons",
    title: "Voice Lessons",
    description: "Build vocal power, range, and confidence. From classical opera to contemporary pop — find your unique voice.",
    icon: faMicrophone,
    image: "/images/services/voice-lessons.jpg",
    features: ["Breath control & projection", "Pitch & ear training", "Stage presence coaching", "Audition & performance prep"],
  },
  {
    slug: "drum-lessons",
    title: "Drum Lessons",
    description: "Lock in the groove with rhythm training across rock, jazz, funk, and Latin styles. All levels welcome.",
    icon: faDrum,
    image: "/images/services/drum-lessons.jpg",
    features: ["Rudiments & stick control", "Groove & fill development", "Reading drum notation", "Double bass techniques"],
  },
  {
    slug: "music-theory",
    title: "Music Theory",
    description: "Understand the language of music — scales, chords, harmony, and composition. Essential for any serious musician.",
    icon: faUserGraduate,
    image: "/images/services/music-theory.jpg",
    features: ["Scales, modes & harmony", "Chord progressions", "Ear training & dictation", "Composition & arranging"],
  },
  {
    slug: "group-classes",
    title: "Group Classes",
    description: "Learn together in small group settings. Band ensembles, theory workshops, and summer intensives available.",
    icon: faUsers,
    image: "/images/services/group-classes.jpg",
    features: ["Band & ensemble playing", "Music theory workshops", "Summer intensives", "Collaborative learning"],
  },
  {
    slug: "recital-prep",
    title: "Recital Preparation",
    description: "Get stage-ready with focused coaching on performance skills, memorization, and managing performance anxiety.",
    icon: faStar,
    image: "/images/services/recital-prep.jpg",
    features: ["Performance coaching", "Memorization strategies", "Audition preparation", "Stage presence & confidence"],
  },
];

export default function ServicesClient() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Music Lessons for Everyone</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From complete beginners to advanced performers — find the perfect lesson for your musical journey.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((svc) => (
              <Card key={svc.slug} className="glass-card overflow-hidden group">
                <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FontAwesomeIcon icon={svc.icon} className="size-4" />
                    </div>
                    <CardTitle className="text-xl">{svc.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{svc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {svc.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${svc.slug}`} className="inline-flex">
                    <Button variant="outline" size="sm">
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
