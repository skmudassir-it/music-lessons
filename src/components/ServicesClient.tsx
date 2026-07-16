"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGuitar, faMicrophone, faDrum, faBookOpen, faUsers, faLaptop, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { services } from "@/lib/data";

const serviceIcons: Record<string, IconDefinition> = {
  "piano-lessons": faMusic, "guitar-lessons": faGuitar, "voice-coaching": faMicrophone,
  "violin-lessons": faMusic, "drum-lessons": faDrum, "music-theory": faBookOpen,
  "group-classes": faUsers, "online-lessons": faLaptop,
};

export default function ServicesClient() {
  const serviceList = Object.values(services);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Our Programs</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Music Lessons for Everyone</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Expert instruction across eight programs — find the one that's right for you.</p>
        </div>
        <div className="grid gap-8">
          {serviceList.map((s) => (
            <Card key={s.slug} className="glass-card overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="w-full h-48 md:h-full bg-muted flex items-center justify-center overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-2 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FontAwesomeIcon icon={serviceIcons[s.slug] || faMusic} className="size-5" />
                    </div>
                    <div><h2 className="text-xl font-bold">{s.title}</h2><p className="text-primary font-semibold text-sm">{s.pricing}</p></div>
                  </div>
                  <p className="text-muted-foreground mb-4">{s.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="size-3 text-primary" /><span>{f}</span></div>
                    ))}
                  </div>
                  <Link href={`/services/${s.slug}`} className="inline-flex"><Button>Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
