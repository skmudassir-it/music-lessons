"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Performances" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-amber-500 text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">🎵 First Lesson Free — Book Your Trial Today! 🎵</span>
          <span className="inline-block px-8">🎵 First Lesson Free — Book Your Trial Today! 🎵</span>
        </div>
      </div>
      <nav className="sticky top-0 z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faMusic} className="size-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">NoteWise</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex">
                  <Button
                    variant={pathname === link.href ? "default" : "ghost"}
                    size="sm"
                    className="text-sm font-medium"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+15551234567" className="inline-flex">
                <Button variant="outline" size="sm">
                  <FontAwesomeIcon icon={faPhone} className="size-3 mr-2" />
                  (555) 123-4567
                </Button>
              </a>
              <Link href="/contact" className="inline-flex">
                <Button size="sm">Free Trial</Button>
              </Link>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon">
                  <FontAwesomeIcon icon={faBars} className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-10">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="inline-flex">
                      <Button
                        variant={pathname === link.href ? "default" : "ghost"}
                        className="w-full justify-start text-base"
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex w-full">
                      <Button className="w-full">Free Trial Lesson</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
