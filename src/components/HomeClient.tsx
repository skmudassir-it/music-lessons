"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGuitar, faMicrophone, faDrum, faBookOpen, faUsers, faLaptop, faArrowRight, faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { services, testimonials, faqs } from "@/lib/data";

const serviceIcons: Record<string, IconDefinition> = {
  "piano-lessons": faMusic, "guitar-lessons": faGuitar, "voice-coaching": faMicrophone,
  "violin-lessons": faMusic, "drum-lessons": faDrum, "music-theory": faBookOpen,
  "group-classes": faUsers, "online-lessons": faLaptop,
};

export default function HomeClient() {
  const [selectedTab, setSelectedTab] = useState("all");
  const serviceList = Object.values(services);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-amber-50/60 to-rose-100/50" />
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Est. 2010 — Portland, OR</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Discover Your<br /><span className="text-primary">Musical Voice</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Professional music lessons for all ages and skill levels. Piano, guitar, voice, violin, drums, and more — with a free trial lesson to get you started.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex"><Button size="lg">Book Free Trial</Button></Link>
                <Link href="/services" className="inline-flex"><Button variant="outline" size="lg">Explore Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: "500+", label: "Active Students" },{ value: "15+", label: "Expert Instructors" },{ value: "14", label: "Years of Excellence" },{ value: "8", label: "Instruments Taught" }].map((s) => (
              <div key={s.label} className="glass-card p-6 text-center"><div className="text-3xl font-bold text-primary">{s.value}</div><div className="text-sm text-muted-foreground mt-1">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Programs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Find Your Instrument</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">Expert instruction across eight instruments and programs, with flexible scheduling for busy lives.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceList.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full">
                  <div className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={serviceIcons[s.slug] || faMusic} className="size-5" />
                    </div>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    <CardDescription className="text-xs">{s.shortDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                      {s.pricing} <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex"><Button variant="outline">View All Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-3">Why NoteWise</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">More Than Just Lessons</h2>
              <div className="gradient-divider w-20 mb-6" />
              <p className="text-muted-foreground mb-6">We believe music education transforms lives. Our holistic approach develops technical skill, creative expression, and a lifelong love of music.</p>
              <div className="space-y-4">
                {["Degree-holding instructors with performance experience","Customized lesson plans tailored to your goals","Regular recitals, competitions, and ensemble opportunities","State-of-the-art studios with professional equipment","Flexible scheduling — weekdays, evenings, and weekends","Online and in-person options for maximum convenience"].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 shrink-0"><FontAwesomeIcon icon={faCheck} className="size-3" /></div>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8"><Link href="/about" className="inline-flex"><Button>Meet Our Team</Button></Link></div>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/about/studio.jpg" alt="NoteWise Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2"><FontAwesomeIcon icon={faStar} className="size-4 text-amber-400" /><span className="font-semibold text-sm">4.9/5 Rating</span></div>
                <p className="text-xs text-muted-foreground">200+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">What Our Students Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Ready to Start Your Musical Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Book your free trial lesson today and discover the joy of making music with Portland's premier music academy.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex"><Button size="lg">Book Free Trial</Button></Link>
              <Link href="/pricing" className="inline-flex"><Button variant="outline" size="lg">View Pricing</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-3">Common Questions</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
