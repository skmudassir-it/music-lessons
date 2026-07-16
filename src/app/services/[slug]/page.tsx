import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to All Services
        </Link>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="w-full h-64 sm:h-80 rounded-2xl bg-muted flex items-center justify-center overflow-hidden mb-6">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <Badge className="mb-3">{service.pricing}</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{service.title}</h1>
            <div className="gradient-divider w-20 mb-6" />
            <p className="text-muted-foreground mb-8">{service.description}</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0"><FontAwesomeIcon icon={faCheck} className="size-3" /></div>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex"><Button size="lg">Book a Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Explore More Programs</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(services).filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <div className="glass-card p-4 transition-shadow hover:shadow-md">
                  <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{s.pricing}</p>
                  <span className="text-xs text-primary group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
