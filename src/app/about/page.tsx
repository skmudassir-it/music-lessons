import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHeart, faAward, faUsers, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us | HarmonyKeys Music Academy",
  description: "Learn about HarmonyKeys — our mission, expert instructors, and passion for music education in Portland, OR.",
};

const values = [
  { icon: faHeart, title: "Passion First", description: "We believe the best learning happens when it's fueled by genuine love for music." },
  { icon: faAward, title: "Excellence in Teaching", description: "Every instructor is a trained professional with years of performance and teaching experience." },
  { icon: faUsers, title: "Community-Centered", description: "Music brings people together. We foster a supportive, encouraging community of learners." },
];

const instructors = [
  { name: "Sarah Chen", role: "Piano & Theory Director", bio: "MMus from Juilliard. 15 years teaching experience. Specializes in classical piano and ABRSM exam preparation.", initials: "SC" },
  { name: "Marcus Rivera", role: "Guitar & Bass Instructor", bio: "Berklee College of Music graduate. Professional session guitarist. Teaches rock, jazz, blues, and fingerstyle.", initials: "MR" },
  { name: "Elena Volkov", role: "Violin & Viola Instructor", bio: "Former concertmaster. Suzuki-certified. Passionate about helping young beginners fall in love with string instruments.", initials: "EV" },
  { name: "David Park", role: "Voice & Performance Coach", bio: "Professional opera and musical theatre performer. Specializes in vocal technique, stage presence, and audition preparation.", initials: "DP" },
  { name: "Tyrone Jackson", role: "Drum & Percussion Instructor", bio: "Touring drummer with 20+ years experience. Teaches rock, jazz, funk, and Latin percussion. Recording studio experience.", initials: "TJ" },
  { name: "Rachel Kim", role: "Group Classes & Early Childhood", bio: "Early childhood music education specialist. Creates fun, engaging group experiences that spark a lifelong love of music.", initials: "RK" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Story</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              HarmonyKeys was founded with a simple belief: everyone deserves access to high-quality music education in a nurturing, inspiring environment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">How It Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2014, a small group of passionate music educators came together with a shared vision — to create a music academy where students aren't just taught notes on a page, but are inspired to discover their musical voice.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting with just two studio rooms and a handful of students, HarmonyKeys has grown into Portland's trusted destination for music education, with 8 expert instructors and over 500 students taught.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we offer instruction in piano, guitar, violin, voice, drums, music theory, and more — all under one roof. But our core mission remains unchanged: to nurture the musician within every student.
              </p>
            </div>
            <Card className="glass-card p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faUsers} className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Students Taught</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/20 text-secondary-foreground">
                    <FontAwesomeIcon icon={faAward} className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                    <FontAwesomeIcon icon={faMusic} className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">Expert Instructors</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {values.map((v) => (
                <Card key={v.title} className="glass-card text-center p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{v.title}</CardTitle>
                  <CardDescription className="mt-2">{v.description}</CardDescription>
                </Card>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Meet Our Instructors</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {instructors.map((inst) => (
                <Card key={inst.name} className="glass-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shrink-0">
                      {inst.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{inst.name}</div>
                      <div className="text-xs text-primary font-medium">{inst.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{inst.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Meet Your Instructor?</h2>
              <p className="text-muted-foreground mb-6">
                Book a free trial lesson and find the perfect match for your musical goals.
              </p>
              <Link href="/contact" className="inline-flex">
                <Button size="lg">
                  Start Your Journey <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
