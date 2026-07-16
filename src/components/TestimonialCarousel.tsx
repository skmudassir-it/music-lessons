"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  items: Testimonial[];
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
      <CarouselContent>
        {items.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <FontAwesomeIcon icon={faQuoteLeft} className="size-6 text-primary/30 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.quote}</p>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FontAwesomeIcon key={j} icon={faStar} className="size-3.5 text-secondary" />
                    ))}
                  </div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
