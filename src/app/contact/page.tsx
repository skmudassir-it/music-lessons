"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Select an interest"),
  message: z.string().min(10, "Tell us more (min 10 chars)"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try { const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); if (res.ok) setSubmitted(true); } catch {}
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="glass-card p-10">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4"><FontAwesomeIcon icon={faCheck} className="size-7" /></div>
            <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
            <p className="text-muted-foreground mb-6">We'll reach out within 24 hours to schedule your free trial lesson.</p>
            <Link href="/" className="inline-flex"><Button variant="outline">Back to Home</Button></Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Get Started</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Book Your Free Trial</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Fill out the form and we'll match you with the perfect instructor for a no-obligation trial lesson.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader><CardTitle>Tell Us About Yourself</CardTitle><CardDescription>All fields except phone are required.</CardDescription></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div><Input placeholder="Full Name" {...register("name")} />{errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}</div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Input type="email" placeholder="Email Address" {...register("email")} />{errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}</div>
                    <div><Input placeholder="Phone (optional)" {...register("phone")} /></div>
                  </div>
                  <div>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" {...register("interest")} defaultValue="">
                      <option value="" disabled>I'm interested in...</option>
                      <option value="piano">Piano Lessons</option>
                      <option value="guitar">Guitar Lessons</option>
                      <option value="voice">Voice Coaching</option>
                      <option value="violin">Violin Lessons</option>
                      <option value="drums">Drum Lessons</option>
                      <option value="theory">Music Theory</option>
                      <option value="group">Group Classes</option>
                      <option value="online">Online Lessons</option>
                      <option value="multiple">Multiple / Not Sure</option>
                    </select>
                    {errors.interest && <p className="text-xs text-destructive mt-1">{errors.interest.message}</p>}
                  </div>
                  <div><Textarea placeholder="Tell us about your musical background and goals..." rows={4} {...register("message")} />{errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}</div>
                  <Button type="submit" disabled={loading} className="w-full">{loading ? "Sending..." : <><FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" /> Send & Book Trial</>}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3"><FontAwesomeIcon icon={faPhone} className="size-4 text-primary mt-0.5" /><div><p className="font-medium text-sm">Phone</p><p className="text-sm text-muted-foreground">(555) 123-4567</p></div></div>
                <div className="flex items-start gap-3"><FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary mt-0.5" /><div><p className="font-medium text-sm">Email</p><p className="text-sm text-muted-foreground">hello@notewisemusic.com</p></div></div>
                <div className="flex items-start gap-3"><FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 text-primary mt-0.5" /><div><p className="font-medium text-sm">Studio</p><p className="text-sm text-muted-foreground">123 Melody Lane, Suite 100<br />Portland, OR 97201</p></div></div>
                <div className="flex items-start gap-3"><FontAwesomeIcon icon={faClock} className="size-4 text-primary mt-0.5" /><div><p className="font-medium text-sm">Hours</p><p className="text-sm text-muted-foreground">Mon–Fri: 9 AM – 8 PM<br />Sat: 9 AM – 5 PM<br />Sun: Closed</p></div></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
