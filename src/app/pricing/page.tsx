import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = { title: "Pricing", description: "Transparent pricing for music lessons at NoteWise Music Academy." };

export default function PricingPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Pricing</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Simple, Transparent Pricing</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Choose the plan that fits your musical goals. All plans include a free trial lesson.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`glass-card p-8 relative ${plan.popular ? "ring-2 ring-primary scale-[1.02]" : ""}`}>
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>}
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <div className="mt-4"><span className="text-4xl font-bold">{plan.price}</span><span className="text-muted-foreground">{plan.period}</span></div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="size-3 text-primary mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex w-full"><Button variant={plan.popular ? "default" : "outline"} className="w-full">{plan.cta} <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12"><p className="text-sm text-muted-foreground">All plans include a free trial lesson. No long-term contracts — cancel anytime.</p></div>
      </div>
    </section>
  );
}
