import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const serviceLinks = [
  { href: "/services/piano-lessons", label: "Piano Lessons" },
  { href: "/services/guitar-lessons", label: "Guitar Lessons" },
  { href: "/services/voice-coaching", label: "Voice Coaching" },
  { href: "/services/violin-lessons", label: "Violin Lessons" },
  { href: "/services/drum-lessons", label: "Drum Lessons" },
  { href: "/services/music-theory", label: "Music Theory" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/projects", label: "Performances" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="glass mt-auto border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FontAwesomeIcon icon={faMusic} className="size-4" />
              </div>
              <span className="text-lg font-bold">NoteWise</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Inspiring musical excellence through personalized instruction since 2010.
            </p>
            <div className="flex gap-3 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FontAwesomeIcon icon={faYoutube} className="size-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceLinks.map((s) => (
                <li key={s.href}><Link href={s.href} className="hover:text-primary transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((q) => (
                <li key={q.href}><Link href={q.href} className="hover:text-primary transition-colors">{q.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3 text-primary" />
                <span>hello@notewisemusic.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-3 text-primary" />
                <span>123 Melody Lane, Suite 100<br />Portland, OR 97201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NoteWise Music Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
