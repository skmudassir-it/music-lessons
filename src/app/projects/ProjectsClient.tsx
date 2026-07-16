"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAward } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  { title: "Spring Recital 2026", category: "Recitals", description: "Our annual spring showcase featuring 40+ students performing across all instruments. A celebration of musical growth and achievement.", image: "/images/projects/spring-recital.jpg", highlight: "Sold Out" },
  { title: "ABRSM Exam Success", category: "Achievements", description: "12 students achieved Distinction or Merit in ABRSM piano, violin, and theory exams this year — our best results yet.", image: "/images/projects/exam-success.jpg", highlight: "12 Students" },
  { title: "Summer Music Camp", category: "Programs", description: "A week-long intensive camp with daily group classes, ensemble playing, songwriting workshops, and a final showcase concert.", image: "/images/projects/summer-camp.jpg", highlight: "Annual" },
  { title: "Community Concert Series", category: "Recitals", description: "Monthly community concerts at local venues — giving students real performance experience and bringing music to Portland neighborhoods.", image: "/images/projects/community-concert.jpg", highlight: "Monthly" },
  { title: "Songwriting Showcase", category: "Programs", description: "Students wrote and performed original compositions across all genres — from pop ballads to instrumental jazz pieces.", image: "/images/projects/songwriting.jpg", highlight: "Original" },
  { title: "Youth Orchestra Debut", category: "Achievements", description: "Four of our violin and cello students earned seats in the Portland Youth Philharmonic — a remarkable achievement.", image: "/images/projects/youth-orchestra.jpg", highlight: "4 Students" },
  { title: "Adult Student Workshop", category: "Programs", description: "Our first adult-only performance workshop — a supportive space for adult learners to perform for each other and grow.", image: "/images/projects/adult-workshop.jpg", highlight: "New" },
  { title: "Winter Holiday Concert", category: "Recitals", description: "A festive evening of seasonal music featuring duets, trios, and full ensemble performances. A cherished HarmonyKeys tradition.", image: "/images/projects/holiday-concert.jpg", highlight: "Annual" },
  { title: "Guitar Ensemble Night", category: "Recitals", description: "An evening dedicated to guitar — from classical duets to electric rock band performances. Standing room only!", image: "/images/projects/guitar-ensemble.jpg", highlight: "Popular" },
];

const categories = ["All", "Recitals", "Achievements", "Programs"];

export default function ProjectsClient() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Student Work</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Students in Action</h1>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Celebrating the achievements, performances, and milestones of the HarmonyKeys community.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={(v: string | null) => setActiveTab(v ?? "All")} className="max-w-5xl mx-auto">
            <TabsList className="mb-8 justify-center bg-transparent gap-2 flex-wrap h-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4 py-2">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((proj) => (
                  <Card key={proj.title} className="glass-card overflow-hidden group">
                    <div className="relative">
                      <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                      </div>
                      {proj.highlight && (
                        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs">
                          {proj.highlight}
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{proj.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{proj.title}</CardTitle>
                      <CardDescription>{proj.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
