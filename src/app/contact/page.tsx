"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  instrument: z.string().min(1, "Please select an instrument"),
  experience: z.string().min(1, "Please select your experience level"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  { icon: faPhone, label: "Phone", value: "(555) 123-4567" },
  { icon: faEnvelope, label: "Email", value: "hello@harmonykeys.com" },
  { icon: faLocationDot, label: "Location", value: "Portland, OR 97201" },
  { icon: faClock, label: "Hours", value: "Mon-Fri: 10AM-8PM | Sat: 9AM-5PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Contact Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Book Your Free Trial</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to start your musical journey? Fill out the form below and we'll get you matched with the perfect instructor.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="glass-card">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <FontAwesomeIcon icon={info.icon} className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-sm">{info.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="glass-card p-10 text-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">
                    We've received your inquiry and will contact you within 24 hours to schedule your free trial lesson.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </Card>
              ) : (
                <Card className="glass-card p-6 sm:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <Input {...register("name")} placeholder="Your full name" />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input {...register("email")} type="email" placeholder="you@email.com" />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                        <Input {...register("phone")} placeholder="(555) 123-4567" />
                        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Instrument *</label>
                        <Select onValueChange={(v: string | null) => setValue("instrument", v || "")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select instrument" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="piano">Piano</SelectItem>
                            <SelectItem value="guitar">Guitar</SelectItem>
                            <SelectItem value="violin">Violin</SelectItem>
                            <SelectItem value="voice">Voice</SelectItem>
                            <SelectItem value="drums">Drums</SelectItem>
                            <SelectItem value="music-theory">Music Theory</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.instrument && <p className="text-xs text-destructive mt-1">{errors.instrument.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Experience Level *</label>
                      <Select onValueChange={(v: string | null) => setValue("experience", v || "")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Absolute Beginner</SelectItem>
                          <SelectItem value="novice">Some Experience (less than 1 year)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && <p className="text-xs text-destructive mt-1">{errors.experience.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <Textarea {...register("message")} placeholder="Tell us about your goals, availability, or any questions..." rows={4} />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" disabled={submitting} className="w-full">
                      {submitting ? "Sending..." : (
                        <>Send Request <FontAwesomeIcon icon={faPaperPlane} className="ml-2 size-4" /></>
                      )}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
