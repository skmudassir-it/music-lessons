"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/lib/data";

const categories = ["All", "Recital", "Competition", "Community", "Camp", "Concert", "Event"];

export default function ProjectsClient() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? projects : projects.filter((p) => p.category === tab);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Performances</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Stage, Our Students</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Celebrating musical milestones — from first recitals to competition wins.</p>
        </div>
        <Tabs value={tab} onValueChange={(v: string | null) => setTab(v || "All")} className="mb-10">
          <TabsList className="flex justify-center flex-wrap mx-auto">
            {categories.map((c) => <TabsTrigger key={c} value={c}>{c}</TabsTrigger>)}
          </TabsList>
        </Tabs>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.slug} className="glass-card overflow-hidden">
              <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">{p.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt} className="size-3" /> {p.date}</span>
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
