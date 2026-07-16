import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing | HarmonyKeys Music Academy",
  description: "Transparent pricing for music lessons — piano, guitar, violin, voice, drums, and more. First trial lesson free!",
};

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for beginners exploring their instrument",
    badge: "Most Popular",
    sessions: "30-minute weekly sessions",
    price: "$160",
    period: "/month",
    features: ["30-minute private lessons", "Weekly scheduled sessions", "All instruments available", "Access to student recitals", "Progress tracking", "Email support"],
  },
  {
    name: "Growth",
    description: "Ideal for committed students seeking faster progress",
    sessions: "45-minute weekly sessions",
    price: "$220",
    period: "/month",
    features: ["45-minute private lessons", "Weekly scheduled sessions", "All instruments available", "Access to student recitals", "Progress tracking", "Priority scheduling", "Monthly progress reports", "Theory workbook included"],
  },
  {
    name: "Accelerate",
    description: "For serious musicians aiming for excellence",
    sessions: "60-minute weekly sessions",
    price: "$280",
    period: "/month",
    features: ["60-minute private lessons", "Weekly scheduled sessions", "All instruments available", "Access to student recitals", "Progress tracking", "Priority scheduling", "Monthly progress reports", "Theory workbook included", "Exam & competition prep", "Recording studio access"],
  },
  {
    name: "Group",
    description: "Learn together in small groups of 3-6 students",
    sessions: "60-minute weekly group sessions",
    price: "$140",
    period: "/month",
    features: ["60-minute group sessions", "Small groups (3-6 students)", "Beginner piano & guitar", "Band ensembles", "Collaborative learning", "More affordable"],
  },
];

const faqs = [
  { q: "How do I know which instrument or tier is right for me?", a: "We offer a free trial lesson where you can try an instrument and meet an instructor. They'll assess your level and recommend the right session length for your goals." },
  { q: "What is your cancellation policy?", a: "We require 24-hour notice for cancellations. Make-up lessons are offered subject to instructor availability." },
  { q: "Do you offer sibling or multi-lesson discounts?", a: "Yes! Families with multiple students receive a 10% discount on the second student. Contact us for details." },
  { q: "Can I switch instruments or instructors?", a: "Absolutely. We want you to have the best experience possible. Switching is easy — just let us know and we'll arrange it." },
  { q: "Are there performance opportunities?", a: "Yes! We host bi-annual recitals (spring and winter), monthly community concerts, and prepare students for competitions and exams." },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Pricing</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the plan that fits your goals. All plans include a free trial lesson — no commitment required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`glass-card flex flex-col relative ${tier.badge ? 'border-primary/30' : ''}`}>
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-xs px-3 py-1">
                    {tier.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{tier.sessions}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full" variant={tier.badge ? "default" : "outline"}>
                      Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="glass-card group p-0 overflow-hidden">
                  <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                    {faq.q}
                    <svg className="size-4 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
