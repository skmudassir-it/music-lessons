"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Student Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-primary via-accent to-secondary text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs sm:text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">
            🎵 Now enrolling for Summer 2026 — First lesson FREE! 🎵
          </span>
          <span className="inline-block px-8">
            🎵 Now enrolling for Summer 2026 — First lesson FREE! 🎵
          </span>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : "bg-white/95 border-b border-border"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground shrink-0">
              <FontAwesomeIcon icon={faMusic} className="size-5 text-primary" />
              <span>Harmony<span className="text-secondary">Keys</span></span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex">
                  <Button
                    variant={pathname === link.href ? "default" : "ghost"}
                    className="text-sm font-medium"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contact" className="inline-flex ml-2">
                <Button className="bg-primary hover:bg-primary/90 text-sm">
                  Free Trial Lesson
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon">
                  <FontAwesomeIcon icon={faBars} className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                      <Button
                        variant={pathname === link.href ? "default" : "ghost"}
                        className="w-full justify-start text-base"
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex mt-2">
                    <Button className="w-full">Free Trial Lesson</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
