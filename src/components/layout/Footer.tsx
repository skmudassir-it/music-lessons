import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Services: [
    { href: "/services", label: "All Services" },
    { href: "/services/piano-lessons", label: "Piano" },
    { href: "/services/guitar-lessons", label: "Guitar" },
    { href: "/services/violin-lessons", label: "Violin" },
    { href: "/services/voice-lessons", label: "Voice" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Student Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  Programs: [
    { href: "/services/drum-lessons", label: "Drums" },
    { href: "/services/music-theory", label: "Music Theory" },
    { href: "/services/group-classes", label: "Group Classes" },
    { href: "/services/recital-prep", label: "Recital Prep" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <FontAwesomeIcon icon={faMusic} className="size-5 text-secondary" />
              <span>Harmony<span className="text-secondary">Keys</span></span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Inspiring musicians of all ages with expert instruction in piano, guitar, violin, voice, drums, and more. Start your musical journey today.
            </p>
            <div className="flex gap-3">
              <a href="#" className="size-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="size-4" />
              </a>
              <a href="#" className="size-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="size-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} HarmonyKeys Music Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faPhone} className="size-3" /> (555) 123-4567
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faEnvelope} className="size-3" /> hello@harmonykeys.com
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLocationDot} className="size-3" /> Portland, OR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
