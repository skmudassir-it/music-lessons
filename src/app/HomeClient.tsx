"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic, faGuitar, faDrum, faMicrophone, faUserGraduate,
  faCheckCircle, faArrowRight, faStar, faUsers, faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const services = [
  { title: "Piano Lessons", description: "Classical to contemporary — all levels welcome", icon: faMusic, href: "/services/piano-lessons" },
  { title: "Guitar Lessons", description: "Acoustic, electric, and bass guitar instruction", icon: faGuitar, href: "/services/guitar-lessons" },
  { title: "Violin Lessons", description: "Develop technique and musical expression", icon: faMusic, href: "/services/violin-lessons" },
  { title: "Voice Lessons", description: "Build vocal range, confidence, and stage presence", icon: faMicrophone, href: "/services/voice-lessons" },
  { title: "Drum Lessons", description: "Rhythm mastery — rock, jazz, and Latin styles", icon: faDrum, href: "/services/drum-lessons" },
  { title: "Music Theory", description: "Understand the language behind the music", icon: faUserGraduate, href: "/services/music-theory" },
];

const testimonials = [
  { name: "Sarah M.", role: "Parent of Piano Student", quote: "My daughter has blossomed under the guidance of her instructor. She went from barely touching the keys to performing at recitals in just 6 months!", rating: 5 },
  { name: "James K.", role: "Adult Guitar Student", quote: "I started guitar at 42 thinking I was too old. The patient, encouraging approach made all the difference. Now I can play along to my favorite songs!", rating: 5 },
  { name: "Emily R.", role: "Voice Student", quote: "The vocal training here transformed my confidence. I went from being terrified of singing in public to performing at open mic nights!", rating: 5 },
  { name: "David L.", role: "Parent of Violin Student", quote: "Incredible progress in just one year. The teachers are truly passionate and know how to connect with kids. Worth every penny.", rating: 5 },
  { name: "Lisa T.", role: "Drum Student", quote: "I've taken lessons elsewhere but nothing compares. The curriculum is structured yet flexible, and I'm learning songs I actually love!", rating: 5 },
  { name: "Michael P.", role: "Music Theory Student", quote: "Finally understanding music theory after years of playing by ear. The way concepts are explained makes everything click.", rating: 5 },
];

const stats = [
  { value: "500+", label: "Students Taught" },
  { value: "12+", label: "Years Experience" },
  { value: "8", label: "Expert Instructors" },
  { value: "98%", label: "Satisfaction Rate" },
];

const features = [
  "Personalized 1-on-1 instruction",
  "All ages & levels welcome",
  "Flexible scheduling available",
  "State-of-the-art studio or in-home",
  "Performance & recital opportunities",
  "Progress tracking & assessments",
];

export default function HomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="absolute top-10 left-10 size-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 size-96 bg-secondary/8 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 text-xs">🎵 First Trial Lesson Free</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Discover Your <span className="text-primary">Musical Voice</span> at HarmonyKeys
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Expert music instruction for all ages and skill levels. Piano, guitar, violin, voice, drums, and more — taught by passionate, professional instructors in a supportive environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="text-base px-8">
                  Book Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Find Your Instrument</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our range of music lessons taught by dedicated professionals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href}>
                <Card className="glass-card transition-shadow hover:shadow-lg h-full group cursor-pointer">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={svc.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{svc.title}</CardTitle>
                    <CardDescription>{svc.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">View All Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Why HarmonyKeys</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The HarmonyKeys Difference</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {features.map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="size-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Our Students Say</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <FontAwesomeIcon icon={faMusic} className="size-10 text-primary mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book your free trial lesson today and discover the joy of making music with HarmonyKeys.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="text-base px-8">
                Get Started Free <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
