import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHeart, faUsers, faAward, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = { title: "About Us", description: "Meet the team behind NoteWise Music Academy — Portland's premier music school since 2010." };

const team = [
  { name: "Dr. Elena Vasquez", role: "Founder & Piano Director", bio: "DMA from Juilliard, 25+ years teaching experience, passionate about making classical music accessible.", initials: "EV" },
  { name: "Marcus Chen", role: "Guitar & Bass Instructor", bio: "Berklee graduate, touring musician, specializes in jazz, rock, and fingerstyle guitar.", initials: "MC" },
  { name: "Sophia Williams", role: "Voice Department Head", bio: "Professional opera singer turned vocal coach, helps students find their authentic voice.", initials: "SW" },
  { name: "David Park", role: "Violin & Strings Director", bio: "Suzuki-certified instructor, former concertmaster, dedicated to early childhood music education.", initials: "DP" },
];

const values = [
  { icon: faHeart, title: "Passion First", desc: "We hire instructors who love teaching as much as they love music — and it shows in every lesson." },
  { icon: faUsers, title: "Student-Centered", desc: "Every lesson plan is tailored to the individual's goals, learning style, and musical interests." },
  { icon: faAward, title: "Excellence", desc: "We hold ourselves to the highest standards — in curriculum, performance preparation, and student outcomes." },
  { icon: faMusic, title: "Joy of Music", desc: "Beyond technique and theory, we cultivate a genuine, lifelong love for making music." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-3">Our Story</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Bringing Music to Portland Since 2010</h1>
              <div className="gradient-divider w-20 mb-6" />
              <p className="text-muted-foreground mb-4">NoteWise Music Academy was founded on a simple belief: that everyone deserves access to quality music education. What started as a single piano studio in Dr. Vasquez's living room has grown into Portland's most trusted music school.</p>
              <p className="text-muted-foreground mb-6">Today, our team of 15+ degree-holding instructors teaches over 500 students across eight instruments and programs. We've prepared students for ABRSM diplomas, competition wins, and university music programs — but our proudest achievement is the community of lifelong musicians we've built.</p>
              <Link href="/contact" className="inline-flex"><Button>Start Your Journey <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <img src="/images/about/studio.jpg" alt="NoteWise Studio" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight">What Drives Us</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="glass-card">
                <CardContent className="p-6 text-center">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4"><FontAwesomeIcon icon={v.icon} className="size-5" /></div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Meet Your Instructors</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <Card key={m.name} className="glass-card">
                <CardContent className="p-6 text-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold mx-auto mb-4">{m.initials}</div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{m.role}</p>
                  <p className="text-sm text-muted-foreground">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
